import React from 'react'

const Card = ({url='',name='',price='',handleChange}) => {

  return (
    <div className='products'>
                  <img className='prodimg' src={url} alt='product1.jpg'/>
                  <p>{name}</p>
                  <p>Rs:₹ {price}</p>
                  <div className='buttons'>
                  <button onClick={()=>{handleChange({name:name,price:price})}} variant="contained" className='btn1'>Add to cart</button>
                  <button to="#" variant="contained" className='btn2'>Order Now</button>
                  </div>
    </div>
  )
}

export default Card