import {
  BreadcrumbLink,
  Center,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { procurarCarrinho } from "../../api/routes/procurarCarrinho";
import CheckoutItem from "../../components/checkoutItem";
import Header from "../../components/layout/header";
import { getCartCookie } from "../../helpers/cookies/getCartCookie";
import styles from "../../styles/Home.module.css";
import { CamisetaType } from "../../types/CamisetaType";

const Checkout: React.FC = () => {
  const [items, setItems] = useState<CamisetaType[]>([]);

  useEffect(() => {
    if (getCartCookie()) {
      procurarCarrinho(getCartCookie()).then((result) => {
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
    } else document.location.href = "/";
  }, []);

  const ReturnBreadcrumb: React.FC = () => {
    return (
      <Breadcrumb ml={5}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Início</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/checkout" color={"red.500"}>
            Checkout
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  };

  const returnTotalCost = () => {
    const moneyAmount = 36 * items.length;

    return moneyAmount.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <Header breadcrumb={<ReturnBreadcrumb />} hiddenCart />

      <Helmet>
        <title>ZDN</title>
        <meta name="description" content="Site oficial de vendas do ZDN"></meta>
      </Helmet>
      <div className={styles.container}>
        <Center>
          <Heading
            as="h2"
            size="xl"
            fontWeight={"bold"}
            mt={10}
            className="red-text-color"
          >
            CHECKOUT
          </Heading>
        </Center>

        <Center>
          <div>
            {items.map((item) => (
              <CheckoutItem
                key={item.id}
                color={item.cor}
                name={item.nome}
                number={item.numero}
              />
            ))}
          </div>
        </Center>

        <Center>
          <Text fontSize={"2xl"} color="red.500" fontWeight={"bolder"}>
            TOTAL: {returnTotalCost()}
          </Text>
        </Center>
      </div>
    </>
  );
};

export default Checkout;
