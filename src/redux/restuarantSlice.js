import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// api call or asynchronous function call using Thunk
//first argument is name of slice+/+name of Thunk function
export const fetchRestaurant = createAsyncThunk('restuarantSlice/fetchRestaurant', () => {
    const result = axios.get('./restaurant.json').then(response => response.data);
    console.log(result);
    return result;
    
})

const restuarantSlice = createSlice({
    name: "restaurantSlice",
    initialState: {
        loading: false, //pending state that means,api call in-progress
        allRestaurant: [],//-resolve stage
        error:'',//rejected state - return error
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurant.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurant = action.payload;
            state.searchRestuarant= action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false
            state.allRestaurant = []
            state.error = action.error.message
        })
    },
    reducers: {
        searchRestuarant: (state, action) => {
            state.allRestaurant.restaurants= state.searchRestuarant.restaurants.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})
export default restuarantSlice.reducer;
export const { searchRestuarant } = restuarantSlice.actions;

//redux is a synchronous operation 
//but api call or file need or write , etc are Asynchoronous operations
//to deal with asychronous operation  in redux we are using redux thunk
//thunk is not a part of slice, separate method in redux toolkit