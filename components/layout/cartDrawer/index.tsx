import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Col, Row } from "reactstrap";
import { procurarCarrinho } from "../../../api/routes/procurarCarrinho";
import { removerCamiseta } from "../../../api/routes/removerCamiseta";
import { getCartCookie } from "../../../helpers/cookies/getCartCookie";
import { CamisetaType } from "../../../types/CamisetaType";

const CartDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItems, setCartItems] = useState<CamisetaType[]>([]);

  type tshirtImageProps = {
    color: string;
  };

  const ReturnTshirtImage: React.FC<tshirtImageProps> = ({ color }) => {
    if (color === "amarela") {
      return (
        <Image
          src="https://i.ibb.co/GWBBn9q/camisa-amarela-png.png"
          boxSize={"10rem"}
          alt="Modelo amarelo da camiseta comemorativa da copa do ZDN"
        />
      );
    }
    if (color === "azul") {
      return (
        <Image
          src="https://i.ibb.co/wS85xP6/camisa-azul-png.png"
          boxSize={"10rem"}
          alt="Modelo azul da camiseta comemorativa da copa do ZDN"
        />
      );
    }
    if (color === "branca") {
      return (
        <Image
          src="https://i.ibb.co/f87hKW5/camisa-branca-png.png"
          boxSize={"10rem"}
          alt="Modelo branco da camiseta comemorativa da copa do ZDN"
        />
      );
    } else return <></>;
  };

  const removeCamiseta = (
    camisetaId: string | undefined,
    compraId: string | undefined
  ) => {
    removerCamiseta(camisetaId, compraId).then((result) => {
      if (result.status === 200) document.location.reload();
    });
  };

  const prosseguirButtonDisabled = () => {
    return getCartCookie() ? false : true;
  };

  useEffect(() => {
    if (getCartCookie()) {
      procurarCarrinho(getCartCookie()).then((result) => {
        setCartItemsCount(result.body.camisetas.length);

        const items: CamisetaType[] = [];

        result.body.camisetas.map((camiseta: any) => {
          items.push({
            nome: camiseta.nome,
            numero: camiseta.numero,
            cor: camiseta.cor,
            id: camiseta.id,
          });
        });

        const filteredItems = items.filter(function (item, pos) {
          return items.indexOf(item) == pos;
        });

        filteredItems.map((item) => {
          setCartItems((cartItems) => [
            ...cartItems,
            {
              nome: item.nome,
              numero: item.numero,
              cor: item.cor,
              id: item.id,
            },
          ]);
        });
      });
    }
  }, []);

  return (
    <Row
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={onOpen}
    >
      <Col>
        <AiOutlineShoppingCart className="red-text-color" fontSize={32} />
      </Col>
      <Col>
        <Text
          fontSize={"2xl"}
          className="red-text-color"
          ml={3}
          fontWeight={"bold"}
        >
          {cartItemsCount}
        </Text>
      </Col>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={"flex"} alignItems="center">
            <Text
              fontSize={"2xl"}
              className="red-text-color"
              ml={3}
              fontWeight={"bold"}
              mr={2}
            >
              {cartItemsCount}
            </Text>
            <Text fontSize={"lg"}> produtos no carrinho</Text>
          </DrawerHeader>

          <DrawerBody>
            {cartItemsCount > 0 ? (
              cartItems.map((object) => (
                <Row
                  key={object.id}
                  style={{ marginTop: 10, paddingBottom: 25 }}
                >
                  <Center>
                    <Col>
                      <ReturnTshirtImage color={object.cor} />
                    </Col>
                  </Center>

                  <Center mt={2}>
                    <Col>
                      <Text fontSize={"md"}>
                        Camiseta ZDN Copa <b>({object.cor})</b>
                      </Text>

                      <Row
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Col>
                          <Text fontSize={"sm"} fontWeight={"bold"}>
                            Nome: {object.nome}
                          </Text>
                        </Col>

                        <Col>
                          <Text fontSize={"sm"} fontWeight={"bold"}>
                            Número: {object.numero}
                          </Text>
                        </Col>
                      </Row>

                      <Row
                        style={{
                          justifyContent: "space-between",
                          display: "flex",
                          alignItems: "center",
                          marginTop: 10,
                        }}
                      >
                        <Col>
                          <Text
                            fontSize={"lg"}
                            color={"green.600"}
                            fontWeight={"bold"}
                          >
                            R$ 00,00
                          </Text>
                        </Col>

                        <Col>
                          <Button
                            colorScheme="red"
                            size="sm"
                            onClick={() => {
                              removeCamiseta(object.id, getCartCookie());
                            }}
                          >
                            Remover
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Center>
                </Row>
              ))
            ) : (
              <Center mt={2}>
                <Text fontWeight={"bold"}>Adicione algum item ao carrinho</Text>
              </Center>
            )}

            <DrawerFooter mt={10}>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancelar
              </Button>

              <Link href={"/checkout"}>
                <Button
                  colorScheme="green"
                  disabled={prosseguirButtonDisabled()}
                >
                  Concluir
                </Button>
              </Link>
            </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Row>
  );
};

export default CartDrawer;
