import { Box, Center, Divider, Text, Button } from "@chakra-ui/react";
import { CamisetaType } from "../../../../types/CamisetaType";
import styles from "../../styles/Checkout.module.css";

type checkoutAsideProps = {
  items: CamisetaType[];
};

const CheckoutAside: React.FC<checkoutAsideProps> = ({ items }) => {
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
        <Button colorScheme="red" w={"100%"}>
          Finalizar pedido
        </Button>
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
