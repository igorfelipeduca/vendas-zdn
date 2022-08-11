import { Col, Row } from "reactstrap";
import {
  Center,
  Text,
  Image,
  Skeleton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartModal from "../cartModal";

const ProductList: React.FC = () => {
  const [isContentLoaded, setContentLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setContentLoaded(true);
  }, []);

  return (
    <Skeleton isLoaded={isContentLoaded} mt={28}>
      <Row>
        <Col>
          <Center>
            <Image
              src="https://i.ibb.co/f87hKW5/camisa-branca-png.png"
              boxSize={"25rem"}
              alt="Modelo branco da camiseta comemorativa da copa do ZDN"
            />
          </Center>

          <Center>
            <Text fontSize={"lg"} mt={5}>
              Camiseta ZDN Copa <b>(Branca)</b>
            </Text>
          </Center>

          <Center>
            <Text fontSize={"2xl"} fontWeight="bold">
              R$ 36,00
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
              <Image
                src="https://i.ibb.co/wS85xP6/camisa-azul-png.png"
                boxSize={"25rem"}
                alt="Modelo azul da camiseta comemorativa da copa do ZDN"
              />
            </Center>

            <Center>
              <Text fontSize={"lg"} mt={5}>
                Camiseta ZDN Copa <b>(Azul)</b>
              </Text>
            </Center>

            <Center>
              <Text fontSize={"2xl"} fontWeight="bold">
                R$ 36,00
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
              <Image
                src="https://i.ibb.co/GWBBn9q/camisa-amarela-png.png"
                boxSize={"25rem"}
                alt="Modelo amarelo da camiseta comemorativa da copa do ZDN"
              />
            </Center>

            <Center>
              <Text fontSize={"lg"} mt={5}>
                Camiseta ZDN Copa <b>(Amarela)</b>
              </Text>
            </Center>

            <Center>
              <Text fontSize={"2xl"} fontWeight="bold">
                R$ 36,00
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
