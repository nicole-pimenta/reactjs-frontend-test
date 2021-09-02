import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>Avenida Boa Viagem, 500 - Recife, PE</li>
        <li>info@nicemeeting.com</li>
      </ul>
      <ul>
        <li>Sobre NiceMeeting</li>
        <li>Nosso time</li>
        <li>Fale Conosco</li>
      </ul>
      <ul>
        <li className="socialMedia">Instagram</li>
        <li className="socialMedia">Twitter</li>
        <li className="socialMedia">LinkedIn</li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
