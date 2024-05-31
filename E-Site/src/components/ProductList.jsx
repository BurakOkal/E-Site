import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { getAllProducts } from '../redux/slices/productsSlice';
import Product from './Product';

function ProductList() {
    
    const distpatch = useDispatch();
    const {products} = useSelector((store)=>store.products);
    useEffect(()=>{
        distpatch(getAllProducts())
    },[])
  return (
    //ürünleri dive sığmazsa alta geçsin flexwrap
    <div className='flex-row' style={{flexWrap:'wrap'}}> 
      {
      products && products.map((product)=>(

          <Product key={product.id} product={product} />
      ))
      }
    </div>
  )
}

export default ProductList