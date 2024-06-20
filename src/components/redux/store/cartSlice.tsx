//@ts-ignore
import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    deliveryFee: 35,
    freeDeliveryFrom: 6000,

}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            const newProduct = action.payload.product;
            const cartItem = state.items.find(
                (item) => item.product.id == newProduct.id
            )
            if (cartItem) {
                cartItem.count += 1;
            } else {
             state.items.push({ product: newProduct, count: 1});
            }
            
        },
        changeCount: (state,action) => {
            const {productId, amount} = action.payload;
            const cartItem = state.items.find((item) => item.product.id == productId)
            if (cartItem) {
                cartItem.count += amount;
            }
            if(cartItem.count <= 0) {
                state.items = state.items.filter((item) => item != cartItem)
            }
        },
    }
})

export const selectedNumberItem = (state) => state.cart.items.length;

export const selecteSubtotal = (state) => state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.count,0
);
const cartSelector = (state) => state.cart;

export const selectedDeliveryPrice = createSelector(
    cartSelector,selecteSubtotal, (cart,subtotal) => (subtotal > cart.freeDeliveryFrom || subtotal == 0 ? 0 : cart.deliveryFee)

);

export const selectedTotal = createSelector(
    selecteSubtotal,selectedDeliveryPrice,
    (subtotal, delevery) => subtotal + delevery
);