import { Row, Col } from "reactstrap";
import Image from "next/image";
import Zdn from "../../../assets/zdn.png";
import CartDrawer from "../cartDrawer";

const Header: React.FC = () => {
  return (
    <>
      <Row
        style={{
          padding: 20,
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image src={Zdn} height={50} width={50} id="zdn-header-img" />

        <CartDrawer />
      </Row>
    </>
  );
};

export default Header;
