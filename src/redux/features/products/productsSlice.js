import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    value: [], 
    error: ""
}

export const getProducts = createAsyncThunk("getProducts", async () => {
    const response = await axios.get("http://localhost:2926/api/mobiles");
    // console.log(response);
    // console.log(response.data);
    // console.log(response.data.products); 
    return response.data
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload; 
        })

        builder.addCase(getProducts.rejected, (state, action) => {
            state.error = "Bad fetching!"
        })
    }
});

export default productsSlice.reducer;