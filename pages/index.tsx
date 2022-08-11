import { Center, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../components/layout/header";
import styles from "../styles/Home.module.css";
import ProductList from "../components/productList";
import { FiTwitter } from "react-icons/fi";
import { Helmet } from "react-helmet";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>ZDN</title>
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

      <footer>
        <Center p={3}>
          <FiTwitter style={{ marginRight: 5, fontSize: 24 }} />
          <Text fontSize={"lg"} fontWeight="bold">
            @outofnena
          </Text>
        </Center>
      </footer>
    </>
  );
};

export default Home;
