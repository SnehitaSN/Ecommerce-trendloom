import React, { useEffect, useState } from 'react'
import myContext from './myContext'
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query} from "firebase/firestore"
import {toast} from 'react-toastify'
import { fireDB} from "../../firebase/FirebaseConfig"

function MyState(props) {
 const [mode, setMode] = useState('light');

 const [loading, setLoading] = useState(false)
 const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'rgb(17,21,39)'
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white'
  }
 }

 const [products, setProducts] = useState({
  title:null,
  price:null,
  imageUrl:null,
  category:null,
  description:null,
  time:Timestamp.now(),
  date:new Date().toLocaleString(
    "en-us",
    {
      month:"short",
      day:"2-digit",
      year:"numeric"
    }
  )
 })
  //****************Add Product Section******* */
  const addProduct = async ()=>{
    if(products.title == null || products.price == null || products.imageUrl == null ||
      products.category == null || products.description == null){
        return toast.error ("Please fill the required fileds")
      }
      setLoading(true)
      try {
        const productRef = collection(fireDB,"products")
        toast.success("Product Add successfully")

       setTimeout(()=>{
        window.location.href = "/dashboard"
       },800)
        await addDoc(productRef,products)
        setLoading(false)
        getProductData()
        
      } catch (error) {
        console.log(error)
        setLoading(false)
        
      }
    }

    //******get product*********//

    const [product, setProduct] = useState([])

    const getProductData = async ()=>{
      setLoading(true)
      try {
        const q = query(
          collection(fireDB,"products"),
          orderBy("time"),
          //limit(5)
        );
        const data = onSnapshot(q,(QuerySnapshot )=>{
          let productsArray = [];
          QuerySnapshot.forEach((doc)=>{
            productsArray.push({...doc.data(),id:doc.id})
          });
          setProduct(productsArray)
        })
        return ()=>data
        
      } catch (error) {
        console.log(error)
        
      }
    }


    useEffect(()=>{
      getProductData()
    },[])
  return (
    <myContext.Provider value={{mode,toggleMode,loading,setLoading,products,setProducts,addProduct,product}}>
{props.children}
    </myContext.Provider>
  )
}

export default MyState