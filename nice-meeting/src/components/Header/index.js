import { Link, useHistory } from "react-router-dom";
import { HeaderContainer, HeaderNav } from "./styles";
import Button from "../Button";
import { HashLink as Anchor } from "react-router-hash-link";

const Header = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <div>
      <HeaderContainer>
        <Link to="/">
          <div className="niceMeeting">NiceMeeting</div>
        </Link>
        <HeaderNav>
          <Anchor className="link-nav" to="/#infoApp">
            Como funciona
          </Anchor>
          <Anchor className="link-nav" to="/#infoApp">
            Contato
          </Anchor>
          <Button colorSchema onClick={() => handleNavigation("/register")}>
            Cadastro
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </HeaderNav>
      </HeaderContainer>
    </div>
  );
};

export default Header;
