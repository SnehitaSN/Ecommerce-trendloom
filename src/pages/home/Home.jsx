import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
// import {useDispatch, useSelector} from 'react-redux'
// import { addToCart, deleteFromCart } from "../../redux/cartSclice";


function Home() {
  const context = useContext(myContext);
  console.log(context);
  //checking function working properly or not
//   const dispatch=useDispatch();
//   const cartItem = useSelector((state)=>state.cart)
//   console.log(cartItem)

//   const addCart =()=>{
//     dispatch(addToCart("jacket"))
//   }

// const deleteCart = ()=>{
//   dispatch(deleteFromCart("jacket"))
// }
  //destructure

  return (
    <Layout>
      {/* <div className="flex gap-5 justify-center">
        <button className="bg-gray-400 p-5" onClick={()=>addCart()}>Add</button>
        <button className="bg-gray-400 p-5" onClick={()=>deleteCart()}>Delete</button>
      </div> */}

      <HeroSection />
      <Filter />
      <ProductCard />
      <Track/>
    
      <Testimonial/>
    </Layout>
  );
}

export default Home;
