import {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import '../Payment/payment.css'

export default function Payment() {

    let navigate = useNavigate()
    
    const user = useSelector((state) => state.user)
        console.log('-------------------------------------------------------')
        console.log('type:',user.user.type)
        console.log('id:',user.user.id)
        console.log('numberItem:',user.user.numberItem)
        console.log('selected:',user.user.selected)
        console.log('selectedSweetness:',user.user.selectedSweetness)
        console.log('selected_Hot_Or_Cold:',user.user.selected_Hot_Or_Cold)
        console.log('straw:',user.user.straw)
        console.log('cup_cover:', user.user.cup_cover)
        console.log('stock:',user.user.stock)
        console.log('duration:',user.user.duration)
        console.log('price:',user.user.price)


    //-----------------------Coffee---------------------
    const [getTypeAttribute, setGetTypeAttribute] = useState()
    const [getPriceAttribute, setGetPriceAttribute] = useState()

    const [type, setType] = useState(user.user.type)
    const [id, setId] = useState(user.user.id)
    const [typeCoffee, setTypeCoffee] = useState(user.user.selected)
    const [numberItem , setNumberItem] = useState(user.user.numberItem)
    const [selected_Hot_Or_Cold, setSelected_Hot_Or_Cold] = useState(user.user.selected_Hot_Or_Cold)
    const [price, setPrice] = useState(user.user.price)
    
    const [stock, setStock] =  useState(user.user.stock)

    //-----------------Calculator-----------------------
    const [Calculator, setCalculator] = useState()


    //-----------------Update Stock-----------------------
    const [updateStock, setUpdateStock] = useState(stock - numberItem)
    console.log('Update Stock:',updateStock)

    
    //---------------Get stock from api Coffee-----------
    useEffect(() => { 
      const getAttribute = async () => {
        await axios.get('http://localhost:8800/api/attributes/attribute_type')
        .then((res)=>{
            console.log(res.data)
            
            setGetTypeAttribute(res.data[1].type)
            setGetPriceAttribute(res.data[1].price)
        })
      }
      getAttribute()


      //------------------Condition Cold + price + duration--------------------------------
      if(selected_Hot_Or_Cold === 'Cold'){
        setPrice(price + 5)
      }
       
      console.log('Calculator:',Calculator)
      setCalculator(selected_Hot_Or_Cold === "Cold" ? parseInt(price) + 5 : parseInt(price))
      
    },[])



    //--------------------Submit-------------------
    const handleSubmit = (e) => {
        e.preventDefault()

        if(stock >= numberItem){
          
          if(type === 'coffee'){
            axios.put(`http://localhost:8800/api/purchase_beverage/coffee/${id}`,
              {   
                  "id": id,
                  "stock": updateStock
              }
            )
            navigate("/production_time")
          }else if(type === 'tea'){
            axios.put(`http://localhost:8800/api/purchase_beverage/tea/${id}`,
              {   
                  "id": id,
                  "stock": updateStock
              }
            )
            navigate("/production_time")
          }else if(type === 'soft_drink'){
            axios.put(`http://localhost:8800/api/purchase_beverage/soft_drink/${id}`,
              {   
                  "id": id,
                  "stock": updateStock
              }
            )
            navigate("/production_time")
          }
          
        }else if(stock < numberItem && stock > 0){

          navigate("/Not_enough_product")
          
        }else if(stock === 0){

          navigate("/out_of_stock")
        }
    }

  return (
    
    <div className="payment">
        <ToastContainer />
        <div className="payment_container">

            <h1>Payment</h1>
            <p>item</p>
            <p>{typeCoffee} {numberItem} cup * {price} per order</p>
            <h2>{Calculator} Bath</h2>

            <button className="button-68" type="button" onClick={handleSubmit}>Pay</button>
        </div>
    </div>
  )
}
