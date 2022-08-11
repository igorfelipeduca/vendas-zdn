import { getCookie } from "typescript-cookie";

export const getCartCookie = () => {
  return getCookie("zdn-cart-cookie");
};
