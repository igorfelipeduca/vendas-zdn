import { Button, Center, Heading, Text, useToast } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/layout/header";
import styles from "../styles/Home.module.css";
import ProductList from "../components/productList";
import { FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const Home: NextPage = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      title: "Info",
      description: "Clique em qualquer camiseta para ver seu outro lado.",
      status: "info",
      duration: 9000,
      isClosable: true,
    });
  }, [toast]);

  return (
    <>
      <Header />
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
            FAÇA SEU PEDIDO
          </Heading>
        </Center>

        <ProductList />
      </div>

      <hr />

      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Center p={3}>
          <Button
            colorScheme="twitter"
            leftIcon={<FaTwitter />}
            onClick={() => {
              window.open("https://twitter.com/weluv_duca");
            }}
          >
            <Text fontSize={"lg"} fontWeight="bold">
              @weluv_duca
            </Text>
          </Button>
        </Center>

        <Center p={3}>
          <Button
            colorScheme="twitter"
            leftIcon={<FaTwitter />}
            onClick={() => {
              window.open("https://twitter.com/outofnena");
            }}
          >
            <Text fontSize={"lg"} fontWeight="bold">
              @outofnena
            </Text>
          </Button>
        </Center>
      </footer>
    </>
  );
};

export default Home;
