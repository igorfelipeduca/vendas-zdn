import { Col, Row } from "reactstrap";
import {
  Center,
  Text,
  Skeleton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "../cartModal";
import Image from "next/image";

import BrancaFrente from "../../assets/branca-frente.png";
import BrancaCostas from "../../assets/branca-costas.png";
import AzulFrente from "../../assets/azul-frente.png";
import AzulCostas from "../../assets/azul-costas.png";
import AmarelaFrente from "../../assets/amarela-frente.png";
import AmarelaCostas from "../../assets/amarela-costas.png";

const ProductList: React.FC = () => {
  const [isContentLoaded, setContentLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [camisetaBrancaDisplay, setCamisetaBrancaDisplay] = useState(true);
  const [camisetaAzulDisplay, setCamisetaAzulDisplay] = useState(true);
  const [camisetaAmarelaDisplay, setCamisetaAmarelaDisplay] = useState(true);

  const ReturnCamisetaBranca: React.FC = () => {
    if (camisetaBrancaDisplay) {
      return (
        <Image
          src={BrancaFrente}
          height={300}
          width={280}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
          onClick={() => {
            setCamisetaBrancaDisplay(!camisetaBrancaDisplay);
          }}
          style={{ cursor: "pointer" }}
        />
      );
    } else {
      return (
        <Image
          src={BrancaCostas}
          height={320}
          width={280}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
          onClick={() => {
            setCamisetaBrancaDisplay(!camisetaBrancaDisplay);
          }}
          style={{ cursor: "pointer" }}
        />
      );
    }
  };

  const ReturnCamisetaAmarela: React.FC = () => {
    if (camisetaAmarelaDisplay) {
      return (
        <Image
          src={AmarelaFrente}
          height={300}
          width={280}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
          onClick={() => {
            setCamisetaAmarelaDisplay(!camisetaAmarelaDisplay);
          }}
          style={{ cursor: "pointer" }}
        />
      );
    } else {
      return (
        <Image
          src={AmarelaCostas}
          height={300}
          width={280}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
          onClick={() => {
            setCamisetaAmarelaDisplay(!camisetaAmarelaDisplay);
          }}
          style={{ cursor: "pointer" }}
        />
      );
    }
  };

  const ReturnCamisetaAzul: React.FC = () => {
    if (camisetaAzulDisplay) {
      return (
        <Image
          src={AzulFrente}
          height={300}
          width={280}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
          onClick={() => {
            setCamisetaAzulDisplay(!camisetaAzulDisplay);
          }}
          style={{ cursor: "pointer" }}
        />
      );
    } else {
      return (
        <Image
          src={AzulCostas}
          height={300}
          width={280}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
          onClick={() => {
            setCamisetaAzulDisplay(!camisetaAzulDisplay);
          }}
          style={{ cursor: "pointer" }}
        />
      );
    }
  };

  const convertToBRL = (amount: number) => {
    return amount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  return (
    <Skeleton isLoaded={isContentLoaded} mt={28}>
      <Row>
        <Col>
          <Center>
            <ReturnCamisetaBranca />
          </Center>

          <Center>
            <Text fontSize={"lg"} mt={5}>
              Camiseta ZDN Copa <b>(Branca)</b>
            </Text>
          </Center>

          <Center>
            <Text fontSize={"2xl"} fontWeight="bold">
              {convertToBRL(0)}
            </Text>
          </Center>

          <Center>
            <CartModal color="branca">
              <Button
                colorScheme="red"
                mt={2}
                onClick={onOpen}
                boxShadow={"0px 0px 40px 5px rgba(255,0,0,0.28)"}
              >
                <AiOutlineShoppingCart style={{ marginRight: 10 }} /> Adicionar
                ao carrinho
              </Button>
            </CartModal>
          </Center>
        </Col>

        <Center mt={10}>
          <Col>
            <Center>
              <ReturnCamisetaAzul />
            </Center>

            <Center>
              <Text fontSize={"lg"} mt={5}>
                Camiseta ZDN Copa <b>(Azul)</b>
              </Text>
            </Center>

            <Center>
              <Text fontSize={"2xl"} fontWeight="bold">
                {convertToBRL(0)}
              </Text>
            </Center>

            <Center>
              <CartModal color="azul">
                <Button
                  colorScheme="red"
                  mt={2}
                  onClick={onOpen}
                  boxShadow={"0px 0px 40px 5px rgba(255,0,0,0.28)"}
                >
                  <AiOutlineShoppingCart style={{ marginRight: 10 }} />{" "}
                  Adicionar ao carrinho
                </Button>
              </CartModal>
            </Center>
          </Col>
        </Center>

        <Center mt={10} mb={10}>
          <Col style={{ marginTop: 20 }}>
            <Center>
              <ReturnCamisetaAmarela />
            </Center>

            <Center>
              <Text fontSize={"lg"} mt={5}>
                Camiseta ZDN Copa <b>(Amarela)</b>
              </Text>
            </Center>

            <Center>
              <Text fontSize={"2xl"} fontWeight="bold">
                {convertToBRL(0)}
              </Text>
            </Center>

            <Center>
              <CartModal color="amarela">
                <Button
                  colorScheme="red"
                  mt={2}
                  onClick={onOpen}
                  boxShadow={"0px 0px 40px 5px rgba(255,0,0,0.28)"}
                >
                  <AiOutlineShoppingCart style={{ marginRight: 10 }} />{" "}
                  Adicionar ao carrinho
                </Button>
              </CartModal>
            </Center>
          </Col>
        </Center>
      </Row>
    </Skeleton>
  );
};

export default ProductList;
