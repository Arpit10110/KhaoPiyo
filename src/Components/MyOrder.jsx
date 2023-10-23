import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../FirebaseConfig';
import { useSelector } from 'react-redux';
import "../Style/Myordes.css"

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { Phone } = useSelector((state) => state.cart);
 let i=0;
  useEffect(() => {
    console.log(i);
    document.title = 'KhaoPiyo | MyOrders';

    const fetchOrders = async () => {
      try {
        console.log(i);
        const ordersCollection = collection(db, 'Orders');
        const snapshot = await getDocs(ordersCollection);
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
    </div>
  );
};

export default MyOrder;
