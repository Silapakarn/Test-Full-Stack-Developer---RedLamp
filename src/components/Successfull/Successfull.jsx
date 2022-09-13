import React from 'react'
import { useNavigate } from "react-router-dom"
import '../Successfull/successfull.css'


export default function Successfull() { 

    let navigate = useNavigate()




    const handleSubmit = (e) => {
        e.preventDefault()

        navigate('/')
    }

    return(
    <div className="Successful">
        <div className="Successful_container">
            <h1>Successful transaction !</h1>

            <p>Please receive the products below</p>

            <div>
            <img src="https://www.phpsupport.co/wp-content/uploads/2017/10/sign-check-icon.png" alt="" className="Successful_img" />
            </div>
            
            <button type="button" className="button-68" onClick={handleSubmit}>Home</button>
            
        </div>
    </div>
    )
}