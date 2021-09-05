import { Link } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <div className="niceMeeting">NiceMeeting</div>
        </Link>
        <MenuIcon onClick={() => setOpen(!open)}></MenuIcon>
        <HeaderNav open={open}>
          <div className="closeMenu" onClick={() => setOpen(!open)}>
            X
          </div>

          <Link className="link-nav" to="/login">
            Login
          </Link>
          <Link className="link-nav" to="/register">
            Cadastro
          </Link>
        </HeaderNav>
      </HeaderContainer>
    </>
  );
};

export default HeaderMobile;
