import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import { setSelectedProduct } from '../redux/slices/productsSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const {id} = useParams(); //gönderilen id yakalamak için
    const {products,selectedProduct} = useSelector((store)=>store.products);

    const {image,price,title,description}= selectedProduct;

    const [count,setCount] = useState(0);

    const increment = ()=>{
      setCount(count+1);
    }
    const decrement = ()=>{
      if(count>0)
      {setCount(count-1);}
    }

    const distpatch = useDispatch();

    const addBasket = ()=>{
      const payload = {
        id,
      price,
      image,
      title,
      description,
      count
      }
      
      distpatch(addToBasket(payload));
      distpatch(calculateBasket())
    }

    useEffect(()=>{
        getProductById();
    },[])

    const getProductById = ()=>{
      products  && products.map((product)=>{
          if(product.id == id){
            distpatch(setSelectedProduct(product));
          }
      })
    }
  return (
    <div className='flex-row' style={{marginTop: '30px'}}>
      <div style={{marginRight:"50px"}}><img src={image} width={150} height={200}/></div>

      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h1>{price} TL</h1>

        <div style={{display:"flex",alignItems: "center"}}>
        <CiCirclePlus onClick={increment} style={{fontSize:'30px',marginRight:"5px",cursor: 'pointer'}} />

        <span style={{fontSize:'20px'}}>{count}</span>

        <CiCircleMinus onClick={decrement} style={{fontSize:'30px', marginLeft:"5px",cursor: 'pointer'}} />
        </div>
        
        <div>
          <button onClick={addBasket} style={{marginTop:
          '25px',
          border: 'none',
          padding: '15px',
          backgroundColor:'green',
          borderRadius:'5px',
          color:'white'
        }}>Sepete Ekle</button>
        </div>

      </div>
    </div>

    

  )
}

export default ProductDetails