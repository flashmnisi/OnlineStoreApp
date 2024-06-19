import { createSlice } from "@reduxjs/toolkit";
import { datarecent } from "../../data/datarecent";

const initialState = {
    products: datarecent,
    selectedProduct: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.find((p) => p.id == productId);
        }
    }
})