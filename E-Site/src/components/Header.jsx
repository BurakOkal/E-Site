import React, { useState , useEffect } from 'react'
import '../css/Header.css'
import { FaShoppingBasket } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';
import { searchProduct } from '../redux/slices/productsSlice';


function Header() {


  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();

  const {products} = useSelector((store)=>store.basket)
  const dispatch = useDispatch();
  const changeTheme = ()=>{
    const root = document.getElementById("root");
    if(theme) {
      root.style.background = "black";
      root.style.color = "#fff";
    } else {
      root.style.background = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  }

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    dispatch(searchProduct(inputValue))
  },[inputValue]);

  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <div onClick={()=>navigate("/")}>
        <img style={{cursor: 'pointer'}} className='logo' src="./src/images/Logo.png"/>
      </div>
      <div  className='flex-row'>
        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} className='search-input' placeholder='Bir şeyler ara' />
        <div>
          {theme ? <FaMoon className='icon' onClick={changeTheme} /> : <CiLight className='icon' onClick={changeTheme} />}
          <Badge onClick={()=>dispatch(setDrawer())}  badgeContent={products.length} color='primary'>
            <FaShoppingBasket style={{marginRight:'5px'}} className='icon' />
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Header