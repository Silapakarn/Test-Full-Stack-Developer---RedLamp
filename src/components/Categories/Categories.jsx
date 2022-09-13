import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../Categories/categories.css'


export default function Categories() {

    let navigate = useNavigate()

    const [coffee, setCoffee] = useState('')
    const [tea, setTea] = useState('')
    const [soft_drink, setSoft_drink] = useState('')


    //--------Click to Coffee-----------------
    const handleSubmit_Coffee = (e) => {
        e.preventDefault()
        navigate("/Attribute_coffee")
    }


    //--------Click to Tea-----------------
    const handleSubmit_Tea = (e) => {
      e.preventDefault()
      navigate("/Attribute_tea")
  }


  //--------Click to Tea-----------------
  const handleSubmit_soft_drink = (e) => {
    e.preventDefault()
    navigate("/Attribute_soft_drink")
}




    //---------------Get Categories from api-----------------
    useEffect(() => {
        const getCategories = async () => {
            await axios.get('http://localhost:8800/api/categories')
            .then((res)=>{
                // console.log(res.data)
                setCoffee(res.data[0].beverages)
                setTea(res.data[1].beverages)
                setSoft_drink(res.data[2].beverages)
            })
            .catch((err) => {
                console.error(err)
            })
        }
        getCategories()
    }, [])


  return (
    <div className="categories">

      <div className="categories_coffee" onClick={handleSubmit_Coffee}>
            <img src="https://cdn-icons-png.flaticon.com/512/571/571504.png" alt="" />
            <h2>{coffee}</h2>
      </div>

      <div className="categories_tea" onClick={handleSubmit_Tea}>
            <img src="https://cdn-icons-png.flaticon.com/512/571/571545.png" alt="" />
            <h2>{tea}</h2>
      </div>

      <div className="categories_soft_drink" onClick={handleSubmit_soft_drink}>
            <img src="https://cdn-icons-png.flaticon.com/512/571/571463.png" alt="" />
            <h2>{soft_drink}</h2>
      </div>

    </div>
  )
}
