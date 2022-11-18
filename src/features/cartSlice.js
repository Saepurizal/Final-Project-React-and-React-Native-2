import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  firstRender: true,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initiateProducts: (state, action) => {
        state.firstRender = false;
        state.products = action.payload;
    },
    updateStock: (state, action) => {
        state.products[action.payload.idx].quantity = action.payload.quantity;
    },
    addCart: (state, action) => {
        let idx = -1;

        const { cartData, qty, isCart } = action.payload;

        const isProductFound = state.cart.some((data, dataIdx) => {
            if (data.id === cartData.id) {
                idx = dataIdx;
                return true;
            }
            return false;
        });

        if (isProductFound) {
            if (isCart)
                qty ? state.cart[idx].cartQuantity = parseInt(qty) : state.cart[idx].cartQuantity = qty;
            else
                state.cart[idx].cartQuantity += parseInt(qty);
            state.cart[idx].isOverStock = state.cart[idx].quantity < state.cart[idx].cartQuantity;
        } else {
            state.cart.push({ ...cartData, cartQuantity: qty, isOverStock: cartData.quantity < 1 });
        }
    },
    addToCart(state, action) {
      state.cartItems.unshift(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      alert("Product Add to Cart");
      window.location.replace("/cart")
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.title !== action.payload.title
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      alert("Remove product  from Cart");
      
    }
  },
});

export const { addToCart, removeFromCart, addCart } = cartSlice.actions;

export default cartSlice.reducer;
