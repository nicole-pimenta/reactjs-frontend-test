import { HomeContainer, HeroContainer, AboutContainer } from "./styles";
import Meeting from "../../assets/meeting.svg";
import Meeting2 from "../../assets/meeting2.svg";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";

import Animation from "../../assets/MeetingAnimation.json";
import LottieAnimation from "../../components/Lotties";
import HeaderMobile from "../../components/HeaderMobile";
import { useHistory } from "react-router-dom";

const MeetingRoom = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <div className="heroInfo"></div>
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
          <img src={Meeting2} alt="bulb" />
        </figure>

        <div className="ellipse2">
          <img src={Ellipse2} alt="ellipse" />
        </div>
      </AboutContainer>
    </HomeContainer>
  );
};

export default MeetingRoom;
