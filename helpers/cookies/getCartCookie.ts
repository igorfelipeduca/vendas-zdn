import Cookies from "js-cookie";

export const getCartCookie = () => {
  return Cookies.get("zdn-cart-cookie");
};
