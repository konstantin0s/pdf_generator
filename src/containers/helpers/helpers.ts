import { Cart } from "../App/types";

export const calculateTotal = (cartItems: Cart[]) => {
  return cartItems?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};