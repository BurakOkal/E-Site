import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const initialState = {
  products : [],
  selectedProduct : {}, //seçtiğimiz bir ürünü farklı bir sayfada açacağımız için bunu yazdık
  loading : false,
  tempProducts : []
}
const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts" ,async()=>{
    
    const response =  await axios.get(`${BASE_URL}/products`);
    return response.data;
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
        setSelectedProduct: (state,action) =>{
            state.selectedProduct = action.payload;
        },
        searchProduct:(state,action) =>{
            if(action.payload === ''){
            state.products = [...state.tempProducts]
            }
            const searchProduct = state.products.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.products = [...searchProduct]
            
           
        },
    },
    extraReducers : (builder) =>{
        //data bekleniyorsak
        builder.addCase(getAllProducts.pending, (state, action)=>{
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled , (state,action)=>{
            state.loading = false;
            state.products = action.payload;
            state.tempProducts = state.products;
        })
    }
})

export const { setSelectedProduct ,searchProduct } = productsSlice.actions

export default productsSlice.reducer