import React from 'react';

import "./Cartstyle.css";
import { useRecoilState } from 'recoil';
import { OrderState } from '../Atoms/Orderdetails';

const Cartcontent = () => {

const [order,setOrder]=useRecoilState(OrderState)
  return (
    <div className="cart">
        <h1>Cart</h1>

        {
          order.map((o)=>{
            return(
              <div>
                <p>{o.name}</p>
                <p>{o.price}</p>
                <p>{o.count}</p>
                <button onClick={()=>{
                  // setOrder(
                  //   {
                  //     ...order,
                  //     count:order.count+1
 
                  //   }
                  // )
                }}>add</button>
                </div>

            )
          })
        }
    </div>
  )
}

export default Cartcontent