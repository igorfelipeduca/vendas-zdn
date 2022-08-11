import axios from "axios";
import { ApiResponseType } from "../../types/ApiResponseType";

export const procurarCarrinho = async (cookie?: string) => {
  const request = await axios.get<ApiResponseType>(
    `https://vendas-zdn-backend.herokuapp.com/carrinho/find/${cookie}`
  );

  return request.data;
};
