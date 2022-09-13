import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {coffee} from '../redux/product.jsx'
import { useDispatch } from "react-redux"
import 'antd/dist/antd.css'
import { Switch } from 'antd'
import '../Attribute/coffee.css'


export default function Coffee() {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [Espresso, setEspresso] = useState('')
    const [Americano, setAmericano] = useState('')
    const [Latte, setLatte] = useState('')


    //-----------------------Option----------------------------

    const options = [Espresso, Americano, Latte]
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
    const [idEspresso, setidEspresso] = useState()
    const [idAmericano, setidAmericano] = useState()
    const [idLatte, setidLatte] = useState()


    //------------------------stock Coffee--------------------------
    const [stockEspresso, setStockEspresso] = useState()
    const [StockAmericano, setStockAmericano] = useState()
    const [StockLatte, setStockLatte] = useState()
    

    //---------------------Duration Coffe---------------------------
    const [durationEspresso, setDurationEspresso] = useState()
    const [durationAmericano, setDurationAmericano] = useState()
    const [durationLatte, setDurationLatte] = useState()


    //---------------------Price Coffe---------------------------
    const [priceEspresso, setPriceEspresso] = useState()
    const [priceAmericano, setPriceAmericano] = useState()
    const [priceLatte, setPriceLatte] = useState()


    //-----------------------Number item--------------------------
    const [numberItem, setNumberItem] = useState()


    //---------------Get Attribute from api-----------------
    useEffect(() => { 

      const getAttribute = async () => {
        await axios.get('http://localhost:8800/api/attributes/attribute_coffee')
        .then((res)=>{
            console.log(res.data)
            setidEspresso(res.data[0].id)
            setidAmericano(res.data[1].id)
            setidLatte(res.data[2].id)

            setEspresso(res.data[0].type)
            setAmericano(res.data[1].type)
            setLatte(res.data[2].type)

            setStockEspresso(res.data[0].stock)
            setStockAmericano(res.data[1].stock)
            setStockLatte(res.data[2].stock)

            setDurationEspresso(res.data[0].duration)
            setDurationAmericano(res.data[1].duration)
            setDurationLatte(res.data[2].duration)

            setPriceEspresso(res.data[0].price)
            setPriceAmericano(res.data[1].price)
            setPriceLatte(res.data[2].price)
        })
      }
      getAttribute()

    },[])


    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(selected === Espresso){
            dispatch(
                coffee({
                    type: 'coffee',
                    id: idEspresso,
                    selected: selected,
                    numberItem: parseInt(numberItem),
                    selectedSweetness: selectedSweetness,
                    selected_Hot_Or_Cold: selected_Hot_Or_Cold,
                    straw: straw,
                    cup_cover: cup_cover,
                    stock: stockEspresso,
                    duration: durationEspresso,
                    price: priceEspresso

                }))
            }else if(selected === Americano){
                dispatch(
                    coffee({
                        type: 'coffee',
                        id: idAmericano,
                        selected: selected,
                        numberItem: parseInt(numberItem),
                        selectedSweetness: selectedSweetness,
                        selected_Hot_Or_Cold: selected_Hot_Or_Cold,
                        straw: straw,
                        cup_cover: cup_cover,
                        stock: StockAmericano,
                        duration: durationAmericano,
                        price: priceAmericano
                    }))
            }else if(selected === Latte){
                dispatch(
                    coffee({
                        type: 'coffee',
                        id: idLatte,
                        selected: selected,
                        numberItem: parseInt(numberItem),
                        selectedSweetness: selectedSweetness,
                        selected_Hot_Or_Cold: selected_Hot_Or_Cold,
                        straw: straw,
                        cup_cover: cup_cover,
                        stock: StockLatte,
                        duration: durationLatte,
                        price: priceLatte
                    }))
            }
        navigate("/Payment")
    }

  
    
  return (
    <div className="Coffee">
        
        <div className="Coffee_option">
        <h1>Coffee</h1>

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
