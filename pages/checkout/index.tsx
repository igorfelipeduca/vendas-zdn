import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet";
import { procurarCarrinho } from "../../api/routes/procurarCarrinho";
import { getCartCookie } from "../../helpers/cookies/getCartCookie";
import styles from "./styles/Checkout.module.css";
import { CamisetaType } from "../../types/CamisetaType";
import CheckoutHeader from "../../components/layout/checkoutHeader";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
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
  }, []);

  return targetReached;
};

const Checkout: React.FC = () => {
  const isBreakpoint = useMediaQuery(768);
  const [itemAmount, setItemAmount] = useState(0);
  const [items, setItems] = useState<CamisetaType[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

  if (isBreakpoint) {
    return (
      <>
        <CheckoutHeader itemAmount={itemAmount} />

        <Helmet>
          <title>ZDN</title>
          <meta
            name="description"
            content="Site oficial de vendas do ZDN"
          ></meta>
        </Helmet>

        <div className={styles.container}>
          <Box w={"100%"}>
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
                  />
                  <FormHelperText>
                    Seu email não será compartilhado.
                  </FormHelperText>
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    type={"text"}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </FormControl>
              </Box>
            </Box>

            <Divider />

            <Box alignItems={"center"} p={10}>
              <Box display={"flex"} alignItems={"center"}>
                <Heading as={"h3"} fontSize={"lg"} mr={5} fontWeight={"bold"}>
                  2
                </Heading>

                <Heading as={"h3"} fontSize={"lg"} fontWeight={"bold"}>
                  Revisar itens
                </Heading>
              </Box>

              <Box mt={4}>
                {items.map((item) => (
                  <CheckoutItem
                    color={item.cor}
                    name={item.nome}
                    number={item.numero}
                    id={item.id}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <CheckoutAside items={items} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <CheckoutHeader itemAmount={itemAmount} />

        <Helmet>
          <title>ZDN</title>
          <meta
            name="description"
            content="Site oficial de vendas do ZDN"
          ></meta>
        </Helmet>

        <div className={styles.container} style={{ display: "flex" }}>
          <Box w={"75%"}>
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
                  <Input type="email" />
                  <FormHelperText>
                    Seu email não será compartilhado.
                  </FormHelperText>
                </FormControl>

                <FormControl mt={5}>
                  <FormLabel>Nome</FormLabel>
                  <Input type={"text"} />
                </FormControl>
              </Box>
            </Box>

            <Divider />

            <Box alignItems={"center"} p={10}>
              <Box display={"flex"} alignItems={"center"}>
                <Heading as={"h3"} fontSize={"lg"} mr={5} fontWeight={"bold"}>
                  2
                </Heading>

                <Heading as={"h3"} fontSize={"lg"} fontWeight={"bold"}>
                  Revisar itens
                </Heading>
              </Box>

              <Box mt={4}>
                {items.map((item) => (
                  <CheckoutItem
                    color={item.cor}
                    name={item.nome}
                    number={item.numero}
                    id={item.id}
                  />
                ))}
              </Box>
            </Box>
          </Box>

          <CheckoutAside items={items} />
        </div>
      </>
    );
  }
};

export default Checkout;
