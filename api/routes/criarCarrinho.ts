import axios from "axios";
import { CarrinhoType } from "../../types/CarrinhoType";

export const criarCarrinho = async (carrinho: CarrinhoType) => {
  var request = await axios.post(
    "https://vendas-zdn-backend.herokuapp.com/carrinho/create",
    carrinho
  );

  return request.data;
};
