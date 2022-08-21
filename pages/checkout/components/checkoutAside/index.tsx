import {
  Box,
  Center,
  Divider,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { CamisetaType } from "../../../../types/CamisetaType";
import CheckoutModal from "../../atoms/checkoutModal";
import styles from "../../styles/Checkout.module.css";

type checkoutAsideProps = {
  items: CamisetaType[];
  setNameInvalid: Dispatch<SetStateAction<boolean>>;
  setEmailInvalid: Dispatch<SetStateAction<boolean>>;
  name: string;
  email: string;
  isEmailInvalid: boolean;
  isNameInvalid: boolean;
};

function validateEmail(email: string) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

const CheckoutAside: React.FC<checkoutAsideProps> = ({
  items,
  setNameInvalid,
  setEmailInvalid,
  name,
  email,
  isEmailInvalid,
  isNameInvalid,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const endPurchase = () => {
    if (name === "") setNameInvalid(true);
    if (email === "") setEmailInvalid(true);

    if (name !== "" && email !== "") {
      if (!validateEmail(email)) setEmailInvalid(true);
      else {
        if (isEmailInvalid) setEmailInvalid(false);
        if (isNameInvalid) setNameInvalid(false);
        onOpen();
      }
    }
  };

  const returnTotalCost = () => {
    if (items) {
      const moneyAmount = 0 * items.length;

      return moneyAmount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    } else {
      const moneyAmount = 0;

      return moneyAmount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
    }
  };

  return (
    <Box className={styles.resumoPedido} p={5} position={"static"}>
      <Center>
        <Box>
          <Button colorScheme="red" w={"100%"} onClick={endPurchase}>
            Finalizar pedido
          </Button>

          <CheckoutModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            valorTotal={returnTotalCost()}
            nomeComprador={name}
            enderecoEmail={email}
          />

          <Text fontSize={"sm"} mt={3}>
            Em caso de dúvidas, problemas ou modificações na compra, procure um
            membro do ZDN.
          </Text>
        </Box>
      </Center>

      <Divider mt={5} />

      <Text fontSize={"xl"} fontWeight={"bold"} mt={4}>
        Resumo do pedido
      </Text>

      <Box mt={3}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"sm"}>Itens:</Text>
          <Text fontSize={"sm"}>R$ 0,00</Text>
        </Box>
      </Box>

      <Box mt={3}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"sm"}>Taxas:</Text>
          <Text fontSize={"sm"}>R$ 0,00</Text>
        </Box>
      </Box>

      <Divider mt={5} />

      <Box mt={4}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text fontSize={"xl"} color={"red.600"} fontWeight={"bold"}>
            Total do pedido:
          </Text>
          <Text fontSize={"xl"} color={"red.600"} fontWeight={"bold"}>
            {returnTotalCost()}
          </Text>
        </Box>
      </Box>

      <Box mt={2}>
        <Text fontSize={"sm"} fontWeight={"bold"}>
          Em 1x de R$ 0,00 sem juros.
        </Text>
      </Box>
    </Box>
  );
};

export default CheckoutAside;
