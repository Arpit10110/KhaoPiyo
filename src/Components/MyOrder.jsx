import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { useSelector } from 'react-redux';
import "../Style/Myordes.css"

const MyOrder = () => {
  var currentdate = new Date();
  let date =
      currentdate.getDate() +
      "-" +
      (currentdate.getMonth() + 1) +
      "-" +
      currentdate.getFullYear();
      let time = currentdate.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
  const [myOrders, setMyOrders] = useState([]);
  const [Pendingorders,setPendingorders]=useState([]);
  const { Phone } = useSelector((state) => state.cart);
  useEffect(() => {
    document.title = 'KhaoPiyo | MyOrders';

    const fetchOrders = async () => {
      try {
        const ordersCollection = collection(db, 'Orders');
        const PendingOrders=collection(db,"delivery");
        const snapshot = await getDocs(ordersCollection);
        const Pendingsnapshot = await getDocs(PendingOrders);
        const PendinDatas=Pendingsnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const UserPendigs = PendinDatas.filter((order) => order.Phone === Phone);
        setPendingorders(UserPendigs);
        const ordersData = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        const userOrders = ordersData.filter((order) => order.Phone === Phone);
        setMyOrders(userOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [Phone]);

  return (
    <div className="MyorderDiv">
      <h2 className="OrderHead">My Orders</h2>
      <div className="MyorderDatas">
        {myOrders.length > 0 ? (
          myOrders.map((order) => (
            <div key={order.id} className="datas">
              <h3>Date: <span>{order.Date}</span></h3>
              <h3>Time: <span>{order.Time}</span></h3>
              {order.Orders.map((item, index) => (
                <div key={index}>
                  <h3>✨{item.name}</h3>
                  <h3>Price: {item.price} Qty: {item.qty}</h3>
                </div>
              ))}
              <h3>TotalAmount: <span>₹{order.TotalAmount}</span></h3>
              <h3>Status: <span>{order.status === 'Rejected' ? '🔴' : '🟢'}{order.status}</span></h3>
            </div>
          ))
        ) : (
          <h2>No orders!!!</h2>
        )}
      </div>
      <div className="MyorderDatas">
        {
          Pendingorders.map((i)=>{
            return(
              <div key={i.id} className="datas">
              <h3>Date: <span>{date}</span></h3>
              <h3>Time: <span>{time}</span></h3>
              {i.Orders.map((item, index) => (
                <div key={index}>
                  <h3>✨{item.name}</h3>
                  <h3>Price: {item.price} Qty: {item.qty}</h3>
                </div>
              ))}
              <h3>TotalAmount: <span>₹{i.TotalAmount}</span></h3>
              <h3>Status:🟡Pending</h3>
            </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default MyOrder;
