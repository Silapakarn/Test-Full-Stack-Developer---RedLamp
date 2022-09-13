import React from 'react'
import '../Out_of_stock/out_of_stock.css'
import { useNavigate } from "react-router-dom"


export default function Out_of_stock() {

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }
  return (
    <div className="out_of_stock">
        <div className="out_of_stock_container">
            <h1>Sorry..</h1>

            <p>this product is out of stock.</p>
            
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/5331/5331910.png" alt=""  className="out_of_stock_img" />       
            </div>
        
            <button className="button-68" type="button" onClick={handleSubmit}>Home</button>
        </div>
    </div>
  )
}
