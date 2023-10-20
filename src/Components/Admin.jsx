import React,{useEffect,useState,useReducer} from 'react'
import {getDocs,collection,deleteDoc,doc} from "firebase/firestore"
import{db} from "../FirebaseConfig"
import"../Style/Admin.css"
import { async } from '@firebase/util'
const Admin = () => {
  const GetCollection=collection(db,"delivery");
  const [rednerData,forceUpdate]=useReducer(x=>x+1,0);
  const orderdelivered=async(id)=>{
    const Id=""+id;
    deleDoc(Id);
  }
  const deleDoc = async(ID)=>{
     const docdel=doc(db,"delivery",ID);
    await deleteDoc(docdel);
  }
  const [Orders,setOrders]=useState([]);
    useEffect(() => {
        document.title="KhaoPiyo | Admin"
        const getdata=async()=>{
          const data =await getDocs(GetCollection);
          setOrders(data.docs.map((doc)=>({...doc.data(),id :doc.id})))
          forceUpdate();
        }
        getdata();
        }, [rednerData])
  return (
   <>
   <div className="AdminDiv">
   <h2 className='Headadmin'>Admin Panel</h2>
   <div className="allOrders">
   {
    Orders.length>0?
       Orders.map((doc,index)=>{
        return(
          <div key={doc.id} className='datas'>
            <h3>id:<span>#{index+1}</span></h3>
            <h3>Name:<span>{doc.Name}</span></h3>
            <h3>PhoneNo:<span>{doc.Phone}</span></h3>
            <h3>Address:<span>{doc.Address}</span></h3>
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
            <button onClick={()=>{
              orderdelivered(doc.id)
            }}>Order Deliverd</button>
          </div>
        );
       }):<h2>No Order !!!</h2>
    }
   </div>
   </div>
   </>
  )
}

export default Admin