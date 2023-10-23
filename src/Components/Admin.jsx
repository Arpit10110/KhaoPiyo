import React, { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";
import "../Style/Admin.css";
const Admin = () => {
  var currentdate = new Date();
  let i = 0;
  const [Status, setStatus] = useState("Accepted");
  const GetCollection = collection(db, "delivery");
  const orderCollection = collection(db, "Orders");
  const deleDoc = async (ID) => {
    const docdel = doc(db, "delivery", ID);
    await deleteDoc(docdel);
  };
  const [Orders, setOrders] = useState([]);
  const getdata = async () => {
    const data = await getDocs(GetCollection);
    setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(i);
  };
  useEffect(() => {
    document.title = "KhaoPiyo | Admin";
    getdata();
  }, []);
  const Submit = async(docdeatil) => {
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
    docdeatil.Date = date;
    docdeatil.Time = time;
    docdeatil.status = Status;
    await  addDoc(orderCollection, docdeatil);
    await  deleDoc(docdeatil.id);
    await  getdata();
  };
  return (
    <>
      <div className="AdminDiv">
        <h2 className="Headadmin">Admin Panel</h2>
        {Orders.length > 0 ? (
          <h2 className="PendingOrderhead">Pending Orders..</h2>
        ) : (
          <span />
        )}
        <div className="allOrders">
          {Orders.length > 0 ? (
            Orders.map((doc, index) => {
              return (
                <div key={doc.id} className="datas">
                  <h3>
                    id:<span>#{index + 1}</span>
                  </h3>
                  <h3>
                    Name:<span>{doc.Name}</span>
                  </h3>
                  <h3>
                    PhoneNo:<span>{doc.Phone}</span>
                  </h3>
                  <h3>
                    Address:<span>{doc.Address}</span>
                  </h3>
                  {doc.Orders.map((i) => {
                    return (
                      <div>
                        <h3>✨{i.name}</h3>
                        <h3>
                          Price:{i.price} Qty:{i.qty}
                        </h3>
                      </div>
                    );
                  })}
                  <h3>
                    TotalAmount:<span>₹{doc.TotalAmount}</span>
                  </h3>
                  <div>
                    <label for="Status">Status:</label>
                    <select
                      id="Status"
                      onChange={(e) => {
                        return setStatus(e.target.value);
                      }}
                    >
                      <option value="Accepted" selected>
                        Accept
                      </option>
                      <option value="Rejected">Reject</option>
                    </select>
                  </div>
                  <button
                    onClick={() => {
                      Submit(doc);
                    }}
                  >
                    Submit
                  </button>
                </div>
              );
            })
          ) : (
            <h2>No Pending Order !!!</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
