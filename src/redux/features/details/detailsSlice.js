import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

function fetchFromLocalStorage() {
    let value = localStorage.getItem("details");
    if (value) {
        return JSON.parse(value);
    }
    else {
        return []; 
    }
}

function storeInLocalStorage(data) {
    localStorage.setItem("details", JSON.stringify(data));
}

const initialState = {
    loading: false,
    value: fetchFromLocalStorage(),
    error: ""
}

export const getDetails = createAsyncThunk("getDetails", async (id) => {
    const response = await axios.get(`http://localhost:2926/api/all`);
    // console.log(response);
    // console.log(response.data);
    const result = response.data.filter((item)=>item.id===Number(id))
    return result;
})


export const searchItems = createAsyncThunk("searchItems", async (searchQuery) => {
    const response = await axios.get(`http://localhost:2926/api/all`);
    const result = response.data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return result;
});


export const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDetails.pending, (state, action) => {
            state.loading = true;
        })

        builder.addCase(getDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload; 
            storeInLocalStorage(state.value);
        })

        builder.addCase(getDetails.rejected, (state, action) => {
            state.error = "Bad fetching!"
        })


        builder.addCase(searchItems.pending, (state, action) => {
            state.loading = true;
        });

        builder.addCase(searchItems.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
            storeInLocalStorage(state.value);
        });

        builder.addCase(searchItems.rejected, (state, action) => {
            state.error = "Error in searching!";
        });
    }
});

export default detailsSlice.reducer;