import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  //   const addToCart = (product) => {
  //     const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  //     if ((productInCartIndex) => 0) {
  //       const newCart = structuredClone(cart);
  //       newCart[productInCartIndex].quantity += 1;
  //       return setCart(newCart);
  //     }

  //     setCart((prevState) => [
  //       ...prevState,
  //       {
  //         ...product,
  //         quantity: 1,
  //       },
  //     ]);
  //   };
  // const addToCart = (product) => {
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  //   if (productInCartIndex >= 0) {
  //     const newCart = [...cart];
  //     newCart[productInCartIndex].quantity += 1;
  //     setCart(newCart);
  //   } else {
  //     setCart((prevState) => [
  //       ...prevState,
  //       {
  //         ...product,
  //         quantity: 1,
  //       },
  //     ]);
  //   }
  // };

  // const RemoveFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id != product.id));
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };
  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
