import { useEffect, useState } from 'react'
import './css/App.css'
import Header from './components/Header';
import PageContainer from './container/PageContainer';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, deleteProduct, setDrawer } from './redux/slices/basketSlice';

function App() {
  const {products , drawer, totalAmount} = useSelector((store)=>store.basket);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(calculateBasket())
  },[])

  const dispatches = (product)=>{
    dispatch(deleteProduct(product))
    dispatch(calculateBasket())
  }

  return (
   <div>
   
    <PageContainer>
      <Header />
      <RouterConfig />
      <Loading />
      
      <Drawer onClose={()=>dispatch(setDrawer())} anchor='right' open={drawer}>
        {products[0] ? 
        <h4 style={{border:'1px'}}>Sepetiniz</h4> 
        : <h4>Sepetiniz Boş</h4>}
        
      
          {
            
            products && products.map((product)=>{
              return(
                <div style={{padding:'10px'}}>
                  <img style={{width:'50px'}} src={product.image}/>
                  <p>{product.price}TL ({product.count})Adet</p>
                  <button onClick={()=>dispatches(product)} style={{borderRadius: '5px',backgroundColor:'red',border:"none",color:'white',cursor:'pointer'}}>
                  Sil</button>
                  <hr />        
                </div>
              )
            })
            
          }
          

      </Drawer>
    </PageContainer>
   </div>
  )
}

export default App
