import { Button, Center, Heading, Image, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/layout/header";
import styles from "../styles/Home.module.css";
import ProductList from "../components/productList";
import { FaTwitter } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Home: NextPage = () => {
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
