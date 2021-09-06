import {
  MainContainer,
  SectionContainer,
  HeaderContainer,
  Button,
} from "./styles";
import { useAuth } from "../../Providers/Auth";
import User from "../../assets/user.jpeg";
import { Redirect } from "react-router-dom";
import { useGuests } from "../../Providers/Guests";
import Card from "../../components/Card";
import { Badge } from "@material-ui/core";
import { FaUser } from "react-icons/fa";
//import jwt_decode from "jwt-decode";

const MeetingRoom = () => {
  const { authenticated } = useAuth();
  const { addGuest, guestList, exitMeeting, removeGuest } = useGuests();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <div className="niceMeeting">NiceMeeting</div>
        <div>
          <span>Participantes </span>
          <Badge badgeContent={guestList.length} color="secondary">
            <FaUser />
          </Badge>
        </div>
      </HeaderContainer>
      <SectionContainer>
        <div className="owner">
          <div className="user">
            <img src={User} alt="owner" />
          </div>
          <div className="container-btn">
            <Button onClick={addGuest}> Adicionar Participante</Button>
            <Button onClick={exitMeeting}> Finalizar Reunião </Button>
          </div>
        </div>
        <div className="public">
          {<Card guest={guestList} handleRemove={removeGuest}></Card>}
        </div>
      </SectionContainer>
    </MainContainer>
  );
};

export default MeetingRoom;
