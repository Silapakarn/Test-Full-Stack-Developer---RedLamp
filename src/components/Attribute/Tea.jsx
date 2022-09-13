import {useState, useEffect} from 'react'
import axios from "axios"
import {tea} from '../redux/product.jsx'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import 'antd/dist/antd.css'
import { Switch } from 'antd'



export default function Tea() {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    

    const [Taiwan_tea, setTaiwan_tea] = useState('')
    const [Thai_tea, setThai_tea] = useState('')


    //-----------------------Option----------------------------
    const options = [Taiwan_tea, Thai_tea]
    const [selected, setSelected] = useState(options[0])

    const options_Select_sweetness = ['Default', 'Less sugar', 'More sugar']
    const [selectedSweetness, setSelectedSweetness] = useState(options_Select_sweetness[0])

    const options_Hot_Or_Cold = ['Hot', 'Cold']
    const [selected_Hot_Or_Cold, setSelected_Hot_Or_Cold] = useState(options_Hot_Or_Cold[0])

    const [straw, setStraw] = useState()
    const onChangeStraw = (straw) => {
        console.log(`straw: ${straw}`)
        setStraw(straw)
    }

    const [cup_cover, setCup_cover] = useState()
    const onChangeCup_cover = (cup_cover) => {
        console.log(`cup cover: ${cup_cover}`)
        setCup_cover(cup_cover)
    }

    //--------------------------ID---------------------------------
    const [idTaiwan_tea, setidTaiwan_tea] = useState()
    const [idThai_tea, setidThai_tea] = useState()



     //------------------------stock Tea--------------------------
     const [stockTaiwan_tea, setStockTaiwan_tea] = useState()
     const [StockThai_tea, setStockThai_tea] = useState()

     //---------------------Duration Tea---------------------------
    const [durationTaiwan_tea, setDurationTaiwan_tea] = useState()
    const [durationThai_tea, setDurationThai_tea] = useState()

     //---------------------Price Tea---------------------------
     const [priceTaiwan_tea, setPriceTaiwan_tea] = useState()
     const [priceThai_tea, setPriceThai_tea] = useState()

    //-----------------------Number item--------------------------
    const [numberItem, setNumberItem] = useState()




    //---------------Get Attribute from api-----------------
    useEffect(() => { 

        const getAttribute = async () => {
          await axios.get('http://localhost:8800/api/attributes/attribute_tea')
          .then((res)=>{
              console.log(res.data)
              setidTaiwan_tea(res.data[0].id)
              setidThai_tea(res.data[0].id)

              setTaiwan_tea(res.data[0].type)
              setThai_tea(res.data[1].type)

              setStockTaiwan_tea(res.data[0].stock)
              setStockThai_tea(res.data[1].stock)

              setDurationTaiwan_tea(res.data[0].duration)
              setDurationThai_tea(res.data[1].duration)

              setPriceTaiwan_tea(res.data[0].price)
              setPriceThai_tea(res.data[1].price)
          })
        }
        getAttribute()
  
      },[])





    const handleSubmit = (e) => {
        e.preventDefault()
        if(selected === Taiwan_tea){
            dispatch(
                tea({
                    type: 'tea',
                    id: idTaiwan_tea,
                    selected: selected,
                    numberItem: parseInt(numberItem),
                    selected_Hot_Or_Cold: selected_Hot_Or_Cold,
                    straw: straw,
                    cup_cover: cup_cover,
                    stock:stockTaiwan_tea,
                    duration: durationTaiwan_tea,
                    price: priceTaiwan_tea 
            }))
        }else if(selected === Thai_tea){
            dispatch(
                tea({
                    type: 'tea',
                    id: idThai_tea,
                    selected: selected,
                    numberItem: parseInt(numberItem),
                    selected_Hot_Or_Cold: selected_Hot_Or_Cold,
                    straw: straw,
                    cup_cover: cup_cover,
                    stock: StockThai_tea,
                    duration: durationThai_tea,
                    price: priceThai_tea 
            }))
        }
        navigate("/Payment")
    }

  return (
    <div className="Coffee">
        
    <div className="Coffee_option">
    <h1>Tea</h1>

        <div className="option_type">
            <h3>Type</h3>

            <select value={selected} onChange={e => setSelected(e.target.value)}>
                {options.map((value) => (<option value={value} key={value}>{value}</option>))}
            </select>
        </div>


        <div className="option_type">
            <h3>Select sweetness</h3>

            <select value={selectedSweetness} onChange={e => setSelectedSweetness(e.target.value)}>
                    {options_Select_sweetness.map((value) => (<option value={value} key={value}>{value}</option>))}
            </select>
        </div>


        <div className="option_type">
            <h3>Hot or Cold?</h3>

            <select value={selected_Hot_Or_Cold} onChange={e => setSelected_Hot_Or_Cold(e.target.value)}>
                    {options_Hot_Or_Cold.map((value) => (<option value={value} key={value}>{value}</option>))}
            </select>
        </div>

        <div className="option_type">
            {/* <h3>Option</h3> */}

            <option value="straw">straw</option>
            <Switch defaultChecked onChange={onChangeStraw} />

            <option value="cup cover">cup cover</option>
            <Switch defaultChecked onChange={onChangeCup_cover}/>
            
        </div>

        <div className="option_type">
            <h3>Item number</h3>
            <input type="number" name="quantity" min="1" max="10" onChange={e => setNumberItem(e.target.value)}></input>
        </div>


        <button className="button-68" type="button" onClick={handleSubmit}>Continue</button>
    </div>
</div>
  )
}
