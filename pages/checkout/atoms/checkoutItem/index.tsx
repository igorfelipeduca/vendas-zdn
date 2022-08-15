import { Badge, Box, Image, Text } from "@chakra-ui/react";
import styles from "../../styles/Checkout.module.css";

type tshirtImageProps = {
  color: string;
};

const ReturnTshirtImage: React.FC<tshirtImageProps> = ({ color }) => {
  if (color === "amarela") {
    return (
      <Image
        src="https://i.ibb.co/GWBBn9q/camisa-amarela-png.png"
        boxSize={"5rem"}
        alt="Modelo amarelo da camiseta comemorativa da copa do ZDN"
      />
    );
  }
  if (color === "azul") {
    return (
      <Image
        src="https://i.ibb.co/wS85xP6/camisa-azul-png.png"
        boxSize={"5rem"}
        alt="Modelo azul da camiseta comemorativa da copa do ZDN"
      />
    );
  }
  if (color === "branca") {
    return (
      <Image
        src="https://i.ibb.co/f87hKW5/camisa-branca-png.png"
        boxSize={"5rem"}
        alt="Modelo branco da camiseta comemorativa da copa do ZDN"
      />
    );
  } else return <></>;
};

type checkoutItemProps = {
  color: string;
  name: string;
  number: string;
  id?: string;
};

const CheckoutItem: React.FC<checkoutItemProps> = ({
  color,
  name,
  number,
  id,
}) => {
  return (
    <Box className={styles.itemCard} style={{ display: "flex" }} key={id}>
      <Box>
        <Text fontSize={"sm"}>Itens retirados em Caetité (BA)</Text>

        <Box mt={3} display={"flex"}>
          <ReturnTshirtImage color={color} />

          <Box ml={4}>
            <Box>
              <Text>
                Camiseta ZDN Copa <b>({color}) </b>
              </Text>
            </Box>

            <Box>
              <Text fontSize={"sm"} color={"red.600"} fontWeight={"bold"}>
                R$ 0,00
              </Text>
            </Box>

            <Box display={"flex"} mt={3}>
              <Badge mr={3} colorScheme={"red"}>
                {name}
              </Badge>
              <Badge colorScheme={"red"}>{number}</Badge>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutItem;
