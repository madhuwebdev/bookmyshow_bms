import React from "react";

//components
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import Navbar from "../Components/Navbar/Navbar.Component";

const DefaultLayout = (props) =>{
   return(
       <div>
          <Navbar/>
          <HeroCarousel/>
           {props.children}
          
       </div>
   )
}

export default DefaultLayout;