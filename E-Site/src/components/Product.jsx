import React from 'react'
import '../css/product.css'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const {id,image,price,title,description}= product;
    const navigate = useNavigate();

  return (
    <div className='card' style={{textAlign: 'center'}}>
        <img className='image' src={image}/>
        <div >
            <p style={{textAlign:'center',height:"50px"}}>{title}</p>
            <h3 style={{textAlign:'center'}}>{price} TL</h3>
        </div>
        
        <div>
          <button onClick={()=>navigate("/product-details/"+id)} className='detail-btn' >Detay</button>
        </div>
    </div>
  )
}

export default Product