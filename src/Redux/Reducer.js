import { createReducer } from "@reduxjs/toolkit";
export const cartreducer = createReducer({
  cartitem :localStorage.getItem("cartitem")? JSON.parse(localStorage.getItem("cartitem")) : [],
  totalAmount :localStorage.getItem("totalAmount")?localStorage.getItem("totalAmount"): 0,
  SubTotal : localStorage.getItem("SubTotal")?localStorage.getItem("SubTotal"): 0,
  tax :localStorage.getItem("tax")?localStorage.getItem("tax"): 0,
  Shipingprice :localStorage.getItem("Shipingprice")?localStorage.getItem("Shipingprice"): 0,
},{
    addtocart :(state ,action)=>{
        const items = action.payload;
        const itemExist = state.cartitem.find((i) => i.id === items.id);
        if (itemExist) {
          state.cartitem.forEach((i) => {
            if (i.id === items.id) {
              i.qty += 1;
            }
          });
        } else {
          state.cartitem.push(items);
        }
    },
    decrement : (state,action) => {
      const items=action.payload;
      state.cartitem.forEach((i)=>{
          if(i.id === items.id){
             if(i.qty>1)
             {
              i.qty -= 1;
             }
             else{
             state.cartitem=state.cartitem.filter((i)=>items.id !== i.id)
             }
          }
         })
    },
    deletehandler :(state, action)=>{
      const items=action.payload;
      state.cartitem=state.cartitem.filter((i)=>items.id !== i.id)
  },
  calculatePrice:(state)=>{
    let sum=0; 
    state.cartitem.forEach((i)=>{
        return(sum+=i.price*i.qty)
    })
    state.SubTotal=sum;
    if(state.cartitem.length>0)
    {
        state.SubTotal>150?state.Shipingprice=15 : state.Shipingprice=30;
    }
    else{
        state.Shipingprice=0;
    }
    state.tax=+(state.SubTotal*0.18).toFixed();
    state.totalAmount=state.SubTotal+state.Shipingprice+state.tax;
     localStorage.setItem("totalAmount", state.totalAmount)
     localStorage.setItem("SubTotal", state.SubTotal)
     localStorage.setItem("tax", state.tax)
     localStorage.setItem("Shipingprice", state.Shipingprice)
},
storage:(state)=>{
    localStorage.setItem("cartitem", JSON.stringify(state.cartitem))
    },
    delleteall :(state)=>{
      state.cartitem=[];
    }
}) 