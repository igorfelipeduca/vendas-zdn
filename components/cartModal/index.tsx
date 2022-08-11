import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { useState } from "react";
import { criarCarrinho } from "../../api/routes/criarCarrinho";
import { setCartCookie } from "../../helpers/cookies/setCartCookie";
import { CarrinhoType } from "../../types/CarrinhoType";

import { getCartCookie } from "../../helpers/cookies/getCartCookie";
import { atualizarCarrinho } from "../../api/routes/atualizarCarrinho";

type cartModalProps = {
  children: JSX.Element;
  color: string;
};

const CartModal: React.FC<cartModalProps> = ({ children, color }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tshirtName, setTshirtName] = useState("");
  const [tshirtNumber, setTshirtNumber] = useState("");
  const [isLoadingHidden, setLoadingHidden] = useState(true);
  const [areButtonsDisabled, setButtonsDisabled] = useState(false);

  type returnTShirtProps = {
    color: string;
  };

  const ReturnTShirtImage: React.FC<returnTShirtProps> = ({ color }) => {
    if (color === "branca") {
      return (
        <>
          <Center>
            <Image
              src="https://i.ibb.co/f87hKW5/camisa-branca-png.png"
              boxSize={"10rem"}
            />
          </Center>

          <Center mt={2} flexDirection="column">
            <Text>
              Camiseta ZDN Copa <b>(Branca) </b>
            </Text>

            <Text color={"green.600"} fontWeight="bold" fontSize={"2xl"}>
              R$ 36,00
            </Text>
          </Center>
        </>
      );
    }
    if (color === "azul") {
      return (
        <>
          <Center>
            <Image
              src="https://i.ibb.co/wS85xP6/camisa-azul-png.png"
              boxSize={"10rem"}
            />
          </Center>

          <Center mt={2} flexDirection="column">
            <Text>
              Camiseta ZDN Copa <b>(Azul) </b>
            </Text>

            <Text color={"green.600"} fontWeight="bold" fontSize={"2xl"}>
              R$ 36,00
            </Text>
          </Center>
        </>
      );
    }
    if (color === "amarela") {
      return (
        <>
          <Center>
            <Image
              src="https://i.ibb.co/GWBBn9q/camisa-amarela-png.png"
              boxSize={"10rem"}
            />
          </Center>

          <Center mt={2} flexDirection="column">
            <Text>
              Camiseta ZDN Copa <b>(Amarela) </b>
            </Text>

            <Text color={"green.600"} fontWeight="bold" fontSize={"2xl"}>
              R$ 36,00
            </Text>
          </Center>
        </>
      );
    } else {
      return <></>;
    }
  };

  const postCart = () => {
    setLoadingHidden(!isLoadingHidden);
    setButtonsDisabled(!areButtonsDisabled);

    if (getCartCookie()) {
      const cart: CarrinhoType = {
        items: [
          {
            nome: tshirtName,
            numero: tshirtNumber,
            cor: color,
          },
        ],
      };

      atualizarCarrinho(getCartCookie(), cart).then((result) => {
        document.location.reload();
      });
    } else {
      const cart: CarrinhoType = {
        items: [
          {
            nome: tshirtName,
            numero: tshirtNumber,
            cor: color,
          },
        ],
      };

      criarCarrinho(cart).then((result) => {
        setCartCookie(result.body.id);
        document.location.reload();
      });
    }
  };

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Adicionar camiseta {color} ao carrinho</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReturnTShirtImage color={color} />

            <Center mt={5}>
              <Input
                placeholder="Nome / Número"
                value={tshirtName}
                onChange={(e) => setTshirtName(e.target.value)}
              />

              <HStack ml={2}>
                <PinInput
                  value={tshirtNumber}
                  onChange={(e) => setTshirtNumber(e)}
                >
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </Center>
          </ModalBody>

          <Center>
            <Spinner
              color="red.500"
              size="xl"
              mt={2}
              mb={2}
              hidden={isLoadingHidden}
            />
          </Center>

          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={onClose}
              disabled={areButtonsDisabled}
            >
              Cancelar
            </Button>
            <Button
              colorScheme="green"
              onClick={postCart}
              disabled={areButtonsDisabled}
            >
              Adicionar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CartModal;
