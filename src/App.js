import Home from '../src/components/Home/Home.jsx'
import Coffee from '../src/components/Attribute/Coffee.jsx'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Payment from '../src/components/Payment/Payment.jsx'
import Timer from '../src/components/Timer/Timer.jsx'
import Successfull from '../src/components/Successfull/Successfull.jsx'
import Out_of_stock from '../src/components/Out_of_stock/Out_of_stock.jsx'
import Tea from '../src/components/Attribute/Tea.jsx'
import Soft_drink from '../src/components/Attribute/Soft_drink.jsx'
import Not_enough_product from '../src/components/Not_enough_product/Not_enough_product.jsx'
function App() {


  return (  
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/Attribute_coffee" element={<Coffee />} />
        <Route exact path="/Attribute_tea" element={<Tea />} />
        <Route exact path="/Attribute_soft_drink" element={<Soft_drink />} />
        <Route exact path="/Payment" element={<Payment />} />
        <Route exact path="/production_time" element={<Timer />} />
        <Route exact path="/successfull" element={<Successfull />} />
        <Route exact path="/out_of_stock" element={<Out_of_stock />} />
        <Route exact path="/Not_enough_product" element={<Not_enough_product />} />

        
      </Routes>
   </Router>
  )
}

export default App;
