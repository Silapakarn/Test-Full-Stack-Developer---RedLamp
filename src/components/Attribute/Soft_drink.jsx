import {useState, useEffect} from 'react'
import axios from "axios"
import {soft_drink} from '../redux/product.jsx'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import 'antd/dist/antd.css'
import { Switch } from 'antd'




export default function Soft_drink() {

    
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [Soda, setSoda] = useState('')
    const [Cola, setCola] = useState('')
    const [Energy_drink, setEnergy_drink] = useState('')


    //-----------------------Option----------------------------
    const options = [Soda, Cola, Energy_drink]
    const [selected, setSelected] = useState(options[0])


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
    const [idSoda, setidSoda] = useState()
    const [idCola, setidCola] = useState()
    const [idEnergy_drink, setidEnergy_drink] = useState()


    //------------------------stock Soft_drink--------------------------
    const [stockSoda, setStockSoda] = useState()
    const [StockCola, setStockCola] = useState()
    const [StockEnergy_drink, setStockEnergy_drink] = useState()


    //---------------------Duration Soft_drink---------------------------
    const [durationSoda, setDurationSoda] = useState()
    const [durationCola, setDurationCola] = useState()
    const [durationEnergy_drink, setDurationEnergy_drink] = useState()


    //---------------------Price Soft_drink---------------------------
    const [priceSoda, setPriceSoda] = useState()
    const [priceCola, setPriceCola] = useState()
    const [priceEnergy_drink, setPriceEnergy_drink] = useState()


    //-----------------------Number item--------------------------
    const [numberItem, setNumberItem] = useState()


    //---------------Get Attribute from api-----------------
    useEffect(() => { 

      const getAttribute = async () => {
        await axios.get('http://localhost:8800/api/attributes/attribute_soft_drink')
        .then((res)=>{
            console.log(res.data)
            setidSoda(res.data[0].id)
            setidCola(res.data[1].id)
            setidEnergy_drink(res.data[2].id)

            setSoda(res.data[0].type)
            setCola(res.data[1].type)
            setEnergy_drink(res.data[2].type)

            setStockSoda(res.data[0].stock)
            setStockCola(res.data[1].stock)
            setStockEnergy_drink(res.data[2].stock)

            setDurationSoda(res.data[0].duration)
            setDurationCola(res.data[1].duration)
            setDurationEnergy_drink(res.data[2].duration)

            setPriceSoda(res.data[0].price)
            setPriceCola(res.data[1].price)
            setPriceEnergy_drink(res.data[2].price)
        })
      }
      getAttribute()

    },[])


    const handleSubmit = (e) => {
        e.preventDefault()

        if(selected === Soda){
            dispatch(
                soft_drink({
                    type: 'soft_drink',
                    id: idSoda,
                    selected: selected,
                    numberItem: parseInt(numberItem),
                    straw: straw,
                    cup_cover: cup_cover,
                    stock: stockSoda,
                    duration: durationSoda,
                    price: priceSoda
                }))
            }else if(selected === Cola){
                dispatch(
                    soft_drink({
                        type: 'soft_drink',
                        id: idCola,
                        selected: selected,
                        numberItem: parseInt(numberItem),
                        straw: straw,
                        cup_cover: cup_cover,
                        stock: StockCola,
                        duration: durationCola,
                        price: priceCola
                    }))
            }else if(selected === Energy_drink){
                dispatch(
                    soft_drink({
                        type: 'soft_drink',
                        id: idEnergy_drink,
                        selected: selected,
                        numberItem: parseInt(numberItem),
                        straw: straw,
                        cup_cover: cup_cover,
                        stock: StockEnergy_drink,
                        duration: durationEnergy_drink,
                        price: priceEnergy_drink
                    }))
            }
        navigate("/Payment")
    }


  return (
    <div className="Coffee">
        
    <div className="Coffee_option">
    <h1>Soft drink</h1>

        <div className="option_type">
            <h3>Type</h3>

            <select value={selected} onChange={e => setSelected(e.target.value)}>
                {options.map((value) => (<option value={value} key={value}>{value}</option>))}
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
