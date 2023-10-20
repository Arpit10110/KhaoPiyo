import React,{useEffect,useState} from 'react'
import {getDocs,collection} from "firebase/firestore"
import{db} from "../FirebaseConfig"
import"../Style/Admin.css"
const Admin = () => {
  const GetCollection=collection(db,"delivery");
  const [Orders,setOrders]=useState([]);
    useEffect(() => {
        document.title="KhaoPiyo | Admin"
        const getdata=async()=>{
          const data =await getDocs(GetCollection);
          setOrders(data.docs.map((doc)=>({...doc.data(),id :doc.id})))
        }
        getdata();
        }, [])
  return (
   <>
   <div className="AdminDiv">
   <h2 className='Headadmin'>Admin Panel</h2>
   <div className="allOrders">
   {
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
            <h3>TotalAmount:<span>{doc.TotalAmount}</span></h3>
          </div>
        );
       })
    }
   </div>
   </div>
   </>
  )
}

export default Admin