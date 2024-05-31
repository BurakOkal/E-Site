import { createSlice } from '@reduxjs/toolkit'
//Burada bütün projeyi ilgilendiren Loading kısmını oluşturuyoruz
const initialState = { 
  loading : false 
}


export const appSlice = createSlice({
    name : "app",
    initialState,
    reducers : {
        
    },
    extraReducers : (buider) => {

    }
})

export const { } = appSlice.actions

export default appSlice.reducer