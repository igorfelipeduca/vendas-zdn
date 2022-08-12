import { Image, Text } from "@chakra-ui/react";
import css from "./styles/checkoutItem.module.css";

type CheckoutItemProps = {
  key?: string;
  color: string;
  name: string;
  number: string;
};

type tshirtImageProps = {
  color: string;
};

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  key,
  color,
  number,
  name,
}) => {
  const ReturnTshirtImage: React.FC<tshirtImageProps> = ({ color }) => {
    if (color === "amarela") {
      return (
        <Image
          src="https://i.ibb.co/GWBBn9q/camisa-amarela-png.png"
          boxSize={"10rem"}
          alt="Modelo amarelo da camiseta comemorativa da copa do ZDN"
          mr={5}
        />
      );
    }
    if (color === "azul") {
      return (
        <Image
          src="https://i.ibb.co/wS85xP6/camisa-azul-png.png"
          boxSize={"10rem"}
          alt="Modelo azul da camiseta comemorativa da copa do ZDN"
          mr={5}
        />
      );
    }
    if (color === "branca") {
      return (
        <Image
          src="https://i.ibb.co/f87hKW5/camisa-branca-png.png"
          boxSize={"10rem"}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
          mr={5}
        />
      );
    } else return <></>;
  };

  const returnWordWithCapitalLeter = (word: string) => {
    const newChars: string[] = [];

    word.split("").forEach((letter) => {
      if (word.indexOf(letter) === 0) newChars.push(letter.toUpperCase());
      else newChars.push(letter);
    });

    return newChars.join("");
  };

  return (
    <div
      key={key}
      className={css.checkoutItemWrapper}
      style={{
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 35,
        paddingLeft: 35,
      }}
    >
      <ReturnTshirtImage color={color} />

      <div>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Camiseta ZDN Copa
        </Text>
        <Text fontSize={"lg"} mt={3} display="flex" alignItems={"center"}>
          Nome: <b>{name}</b>
        </Text>
        <Text fontSize={"lg"}>
          Número: <b>{number}</b>
        </Text>
        <Text fontSize={"lg"}>
          Cor: <b>{returnWordWithCapitalLeter("azul")}</b>
        </Text>
        <Text fontSize={"xl"} color="green.600" fontWeight={"bold"} mt={4}>
          R$ 0,00
        </Text>
      </div>
    </div>
  );
};

export default CheckoutItem;
