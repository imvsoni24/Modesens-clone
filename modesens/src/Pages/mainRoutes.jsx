import React from 'react'
import { Route,Routes } from 'react-router-dom'
// import Home from './Home'
 import Womens from "./Womens"
// import Mens from "./Mens"
// import Kids from "./Kids"
import Beauty from "./Beauty"
// import Community from './Community'
// import WhyMod from "./WhyMod"
// import Sale from "./Sale"
 import Cart from "./Cart"
// import Gift from "./Gift"
import Payment from './Payment'
import Details from './Details'


const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route  path="/beauty/:id" element={<Details />}/>
            
            <Route  path="/payment" element={<Payment/>}/>
            <Route path="/" element={<Womens/>}/>
            {/* <Route path="/mens" element={<Mens/>}/> */}
            <Route path='/beauty' element={<Beauty/>}/>
            {/* <Route path="/kids" element={<Kids/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/whymodesens' element={<WhyMod/>}/>
            <Route path='/sale' element={<Sale/>}/>
            <Route path="/gift" element={ <Gift/>}/> */}
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes