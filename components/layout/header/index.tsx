import { Row, Col } from "reactstrap";
import Image from "next/image";
import Zdn from "../../../assets/zdn.png";
import CartDrawer from "../cartDrawer";
import { FC } from "react";

type headerProps = {
  hiddenCart?: boolean;
  breadcrumb?: JSX.Element;
};

const Header: React.FC<headerProps> = ({ hiddenCart, breadcrumb }) => {
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={Zdn}
            height={50}
            width={50}
            id="zdn-header-img"
            alt="ZDN Logo"
          />

          <div>{breadcrumb ? breadcrumb : <></>}</div>
        </div>

        <div hidden={hiddenCart}>
          <CartDrawer />
        </div>
      </Row>
    </>
  );
};

export default Header;
