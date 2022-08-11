import { setCookie } from "typescript-cookie";

export const setCartCookie = (id: string) => {
  return setCookie("zdn-cart-cookie", id);
};
