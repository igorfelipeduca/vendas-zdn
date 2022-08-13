import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import Zdn from "../../../assets/zdn.png";

type checkoutHeaderProps = {
  itemAmount: number;
};

const CheckoutHeader: React.FC<checkoutHeaderProps> = ({ itemAmount }) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={5}
        borderBottom={"1px solid red"}
        mb={5}
      >
        <Box display={"flex"} alignItems="center">
          <Image
            src={Zdn}
            height={50}
            width={50}
            id="zdn-header-img"
            alt="ZDN Logo"
          />
        </Box>

        <Box>
          {itemAmount > 1 ? (
            <Heading
              as="h2"
              size="lg"
              fontWeight={"bold"}
              className="red-text-color"
            >
              Finalizar a compra ({itemAmount} itens)
            </Heading>
          ) : (
            <Heading
              as="h2"
              size="lg"
              fontWeight={"bold"}
              className="red-text-color"
            >
              Finalizar a compra ({itemAmount} item)
            </Heading>
          )}
        </Box>

        <Box color={"red.500"}>
          <Heading
            as="h2"
            size="lg"
            fontWeight={"bold"}
            className="red-text-color"
            cursor={"pointer"}
          >
            <Link href={"/"}>
              <FiHome />
            </Link>
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default CheckoutHeader;
