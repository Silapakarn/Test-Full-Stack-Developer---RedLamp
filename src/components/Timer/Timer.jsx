import {useState,useEffect} from 'react'
import '../Timer/timer.css'
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"

export default function Timer() {

    let navigate = useNavigate()

    //----------------------Duration-----------------------
    const user = useSelector((state) => state.user)

    const [Duration, setDuration] = useState(user.user.duration)
    const [selected_Hot_Or_Cold, setSelected_Hot_Or_Cold] = useState(user.user.selected_Hot_Or_Cold)

    const [getDurationAttribute, setGetDurationAttribute] = useState()
    const [getTypeAttribute, setGetTypeAttribute] = useState()


    //-----------------------Time---------------------------
    const [counter , setCounter] = useState(Duration)

    useEffect(()=>{

        const getAttribute = async () => {
            await axios.get('http://localhost:8800/api/attributes/attribute_type')
            .then((res)=>{
                console.log(res.data)

                setGetDurationAttribute(res.data[1].duration)
                setGetTypeAttribute(res.data[1].type)
            })
          }
          getAttribute()
        
        // if(selected_Hot_Or_Cold === "Cold"){
        //     setCounter(selected_Hot_Or_Cold === "Cold" ? parseInt(Duration) + 5 : parseInt(Duration))
        // }
         
        // setCounter(selected_Hot_Or_Cold === "Cold" ? parseInt(Duration) + 5 : parseInt(Duration))

        if(counter > 0 && selected_Hot_Or_Cold === "Cold"){
            setDuration(parseInt(Duration) + 5)
            setTimeout(()=>setCounter(counter - 1),1000)
        }else if(counter > 0){
            setTimeout(()=>setCounter(counter - 1),1000)
        }else{
            navigate('/successfull')
        }
    },[counter])

    return(
        <div className="Timer">

            <div className="Timer_container">
                <h2>machine is working please wait...</h2>
                <h1>{counter}</h1>
            </div>

        </div>
        )
}