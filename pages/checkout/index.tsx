import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import { procurarCarrinho } from "../../api/routes/procurarCarrinho";
import { getCartCookie } from "../../helpers/cookies/getCartCookie";
import styles from "./styles/Checkout.module.css";
import { CamisetaType } from "../../types/CamisetaType";
import CheckoutHeader from "../../components/layout/checkoutHeader";
import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Radio,
  Text,
} from "@chakra-ui/react";
import CheckoutItem from "./atoms/checkoutItem";
import CheckoutAside from "./components/checkoutAside";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

function validateEmail(email: string) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

const Checkout: React.FC = () => {
  const isBreakpoint = useMediaQuery(768);
  const [itemAmount, setItemAmount] = useState(0);
  const [items, setItems] = useState<CamisetaType[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isNameInvalid, setNameInvalid] = useState(false);
  const [isEmailInvalid, setEmailInvalid] = useState(false);

  useEffect(() => {
    if (getCartCookie()) {
      procurarCarrinho(getCartCookie()).then((result) => {
        setItemAmount(result.body.camisetas.length);

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
          setItems((items) => [
            ...items,
            {
              nome: item.nome,
              numero: item.numero,
              cor: item.cor,
              id: item.id,
            },
          ]);
        });
      });
    } else {
      document.location.href = "/";
    }
  }, []);

  const endPurchase = () => {
    if (name === "") setNameInvalid(true);
    if (email === "") setEmailInvalid(true);

    if (name !== "" && email !== "") {
      if (!validateEmail(email)) setEmailInvalid(true);
      else {
        if (isEmailInvalid) setEmailInvalid(false);
        alert("a");
      }
    }
  };

  return (
    <>
      <CheckoutHeader itemAmount={itemAmount} />

      <Helmet>
        <title>ZDN</title>
        <meta name="description" content="Site oficial de vendas do ZDN"></meta>
      </Helmet>

      <div
        className={styles.container}
        style={{ display: isBreakpoint ? "block" : "flex" }}
      >
        <Box w={isBreakpoint ? "100%" : "75%"}>
          <Box alignItems={"center"} p={10}>
            <Box display={"flex"} alignItems={"center"}>
              <Heading as={"h3"} fontSize={"lg"} mr={5} fontWeight={"bold"}>
                1
              </Heading>

              <Heading as={"h3"} fontSize={"lg"} fontWeight={"bold"}>
                Informações do comprador
              </Heading>
            </Box>

            <Box mt={4}>
              <FormControl>
                <FormLabel>Endereço de email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  errorBorderColor="crimson"
                  placeholder="email@zdn.com"
                  isInvalid={isEmailInvalid}
                  required
                />
                <FormHelperText>
                  Seu email não será compartilhado.
                </FormHelperText>

                <Box mt={5}>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type={"text"}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    errorBorderColor="crimson"
                    placeholder="Fulano da Silva"
                    isInvalid={isNameInvalid}
                    required
                  />
                </Box>
              </FormControl>
            </Box>
          </Box>

          <Divider />

          <Box alignItems={"center"} p={10}>
            <Box>
              <Box display={"flex"} alignItems={"center"}>
                <Heading as={"h3"} fontSize={"lg"} mr={5} fontWeight={"bold"}>
                  2
                </Heading>

                <Heading as={"h3"} fontSize={"lg"} fontWeight={"bold"}>
                  Método de pagamento
                </Heading>
              </Box>

              <Box mt={5}>
                <Radio value="1" isChecked colorScheme="teal">
                  Pix
                </Radio>
              </Box>

              <Box mt={5}>
                <Box
                  className="pix-wrapper"
                  mt={5}
                  display={"flex"}
                  alignItems={"center"}
                  border={"1px solid teal.600"}
                >
                  <Image
                    src="https://logospng.org/download/pix/logo-pix-icone-1024.png"
                    boxSize={10}
                  />

                  <Box ml={3}>
                    <Text fontSize={"md"}>Guilherme Lopes Fernandes</Text>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                      77991807291
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider />

          <Box alignItems={"center"} p={10}>
            <Box display={"flex"} alignItems={"center"}>
              <Heading as={"h3"} fontSize={"lg"} mr={5} fontWeight={"bold"}>
                3
              </Heading>

              <Heading as={"h3"} fontSize={"lg"} fontWeight={"bold"}>
                Revisar itens
              </Heading>
            </Box>

            <Box mt={4}>
              {items.map((item) => (
                <div key={item.id}>
                  <CheckoutItem
                    color={item.cor}
                    name={item.nome}
                    number={item.numero}
                    id={item.id}
                  />
                </div>
              ))}
            </Box>
          </Box>
        </Box>

        <CheckoutAside items={items} endPurchase={endPurchase} />
      </div>
    </>
  );
};

export default Checkout;
