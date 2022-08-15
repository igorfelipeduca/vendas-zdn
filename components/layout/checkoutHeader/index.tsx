import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import Zdn from "../../../assets/zdn.png";

type checkoutHeaderProps = {
  itemAmount: number;
};

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

const CheckoutHeader: React.FC<checkoutHeaderProps> = ({ itemAmount }) => {
  const isBreakpoint = useMediaQuery(768);

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
          <Link href={"/"}>
            <Image
              src={Zdn}
              height={50}
              width={50}
              id="zdn-header-img"
              alt="ZDN Logo"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Box>

        <Box>
          {itemAmount > 1 ? (
            <Text fontSize={isBreakpoint ? "xl" : "2xl"} fontWeight={"bold"}>
              Finalizar a compra ({itemAmount} itens)
            </Text>
          ) : (
            <Text fontSize={isBreakpoint ? "xl" : "2xl"} fontWeight={"bold"}>
              Finalizar a compra ({itemAmount} item)
            </Text>
          )}
        </Box>

        <Box color={"red.500"}>
          <Heading
            as="h2"
            size="lg"
            fontWeight={"bold"}
            className="red-text-color"
            cursor={"pointer"}
            display={"none"}
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
