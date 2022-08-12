import axios from "axios";
import { ApiResponseType } from "../../types/ApiResponseType";

export const encontrarNumeros = async () => {
  const request = await axios.get<ApiResponseType>(
    "https://vendas-zdn-backend.herokuapp.com/carrinho/numeros/find"
  );

  return request.data;
};
