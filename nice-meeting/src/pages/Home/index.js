import { HomeContainer, HeroContainer, AboutContainer } from "./styles";
import Meeting from "../../assets/meeting.svg";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Animation from "../../assets/MeetingAnimation.json";
import LottieAnimation from "../../components/Lotties";
import HeaderMobile from "../../components/HeaderMobile";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <HomeContainer>
      <Header />
      <HeaderMobile />
      <HeroContainer>
        <div className="heroInfo">
          <h1>Bora reunir?! </h1>
          <p>
            A plataforma que vai te ajudar a promover, transmitir,
            disponibilizar o sua melhor reunião
          </p>
          <Button>Quero testar!</Button>
        </div>
        <div className="lootie">
          <LottieAnimation lotti={Animation} height={500} width={500} />
        </div>
      </HeroContainer>
      <AboutContainer>
        <div className="ellipse1">
          <img src={Ellipse1} alt="ellipse" />
        </div>
        <figure>
          <img src={Meeting} alt="bulb" />
        </figure>
        <div id="infoApp" className="aboutInfo">
          <h4>POR QUE NICEMEETING?</h4>
          <h2>
            Grandes mudanças começam com pequenos passos. Construa seu novo
            futuro com NiceMeeting!
          </h2>
        </div>
        <div className="ellipse2">
          <img src={Ellipse2} alt="ellipse" />
        </div>
      </AboutContainer>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
