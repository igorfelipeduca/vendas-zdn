import axios from "axios";
import { ApiResponseType } from "../../types/ApiResponseType";

export const removerCamiseta = async (
  camisetaId: string | undefined,
  compraId: string | undefined
) => {
  const request = await axios.get<ApiResponseType>(
    `https://vendas-zdn-backend.herokuapp.com/carrinho/camiseta/delete/${compraId}/${camisetaId}`
  );

  return request.data;
};
