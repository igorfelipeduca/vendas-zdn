import axios from "axios";
import { ApiResponseType } from "../../types/ApiResponseType";
import { CarrinhoType } from "../../types/CarrinhoType";

export const atualizarCarrinho = async (
  compraId: string | undefined,
  items: any
) => {
  const request = await axios.post<ApiResponseType>(
    `https://vendas-zdn-backend.herokuapp.com/carrinho/update/${compraId}`,
    items
  );

  return request.data;
};
