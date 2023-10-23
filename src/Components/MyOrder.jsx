import React,{useEffect,useReducer} from 'react'
import {getDocs,collection,doc} from "firebase/firestore"
import{db} from "../FirebaseConfig"
import {useSelector} from "react-redux"
import { useState } from 'react';
import "../Style/Myordes.css"
const MyOrder = () => {
    const GetCollectionOrders=collection(db,"Orders");
    const [AllOrders,setAllOrders]=useState([]);
    const [MyOrders,setMyOrders]=useState([]);
    const [rednerData,forceUpdate]=useReducer(x=>x+1,0);
    const {Phone} = useSelector(state=>state.cart);
    useEffect(() => {
        document.title="KhaoPiyo | MyOrders "
        const getOrders = async()=>{
            const data =await getDocs(GetCollectionOrders);
            setAllOrders(data.docs.map((doc)=>({...doc.data(),id :doc.id})))
            console.log(Phone)
            const filtered = AllOrders.filter(Orders => Orders.Phone == Phone);
            setMyOrders(filtered);
            forceUpdate();
        };
        getOrders();
    }, [rednerData])
  return (
    <>
  <div className="MyorderDiv">
  <h2 className='OrderHead'>My Orders</h2>
    <div className="MyorderDatas">
       {
        MyOrders.length>0?
        MyOrders.map((doc,index)=>{
            return(<div key={doc.id} className='datas'>
            <h3>Date: <span>{doc.Date}</span></h3>
            <h3>Time: <span>{doc.Time}</span></h3>
            {
              doc.Orders.map((i)=>{
                return(
                  <div>
                    <h3>✨{i.name}</h3>
                    <h3>Price:{i.price} Qty:{i.qty}</h3>
                  </div>
                )
              })
            }
            <h3>TotalAmount:<span>₹{doc.TotalAmount}</span></h3>
            {
                doc.status == "Reject"?<h3>Status: <span>🔴{doc.status}</span></h3>:<h3>Status: <span>🟢{doc.status}</span></h3>
            }
          </div>
        );
        })
        : <h2>No orders!!!</h2>
       }
    </div>
  </div>
    </>
  )
}

export default MyOrder