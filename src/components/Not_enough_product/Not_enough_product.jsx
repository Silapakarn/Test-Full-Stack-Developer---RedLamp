import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Not_enough_product() {

    let navigate = useNavigate()

    const user = useSelector((state) => state.user)
    console.log('-------------------------------------------------------')
    console.log('selected:',user.user.selected)
    console.log('stock:',user.user.stock)


    const [selected, setSelected] = useState(user.user.selected)
    const [stock, setStock] = useState(user.user.stock)


    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }

  return (
    <div className="out_of_stock">
        <div className="out_of_stock_container">
            <h1>Not enough product</h1>

            <h3>Please make a new transaction.</h3>
            <h2 style={{color:'green'}}>You can order {selected} max to {stock} cups.</h2>
            

            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/4753/4753319.png" alt=""  className="Not_enough_product" />       
            </div>
        
            <button className="button-68" type="button" onClick={handleSubmit}>Home</button>
        </div>
    </div>
  )
}
