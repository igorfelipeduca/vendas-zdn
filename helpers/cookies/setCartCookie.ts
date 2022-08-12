import Cookies from "js-cookie";

export const setCartCookie = (id: string) => {
  return Cookies.set("zdn-cart-cookie", id);
};
