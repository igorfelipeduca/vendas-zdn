import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import pix from "../../../../assets/pix-lopes.jpeg";
import { SiPicpay } from "react-icons/si";

type checkoutModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  valorTotal: string;
  nomeComprador: string;
  enderecoEmail: string;
};

const CheckoutModal: React.FC<checkoutModalProps> = ({
  isOpen,
  onOpen,
  onClose,
  valorTotal,
  nomeComprador,
  enderecoEmail,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Finalizar pedido</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={pix} style={{ borderRadius: 12, marginBottom: 10 }} />

            <Center mt={5} mb={5}>
              <Button
                onClick={() => window.open("https://picpay.me/guilopesscrf")}
                colorScheme={"green"}
              >
                <SiPicpay style={{ marginRight: 5 }} /> Pagar com PicPay
              </Button>
            </Center>

            <Text fontSize={"lg"} fontWeight={"bold"}>
              Informações da compra:
            </Text>

            <Box>
              <Text fontSize={"sm"}>{nomeComprador}</Text>
              <Text fontSize={"sm"}>{enderecoEmail}</Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Box
              mt={3}
              justifyContent={"end"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"end"}
            >
              <Text fontWeight={"bold"} color={"red.600"}>
                Valor total: {valorTotal}
              </Text>
              <Text fontSize={"sm"} color={"gray"}>
                Taxas: R$ 5,00
              </Text>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CheckoutModal;
