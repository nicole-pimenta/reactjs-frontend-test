import { MainContainer, SectionContainer, HeaderContainer } from "./styles";
import { useAuth } from "../../Providers/Auth";
import User from "../../assets/user.jpeg";
import Button from "../../components/Button";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useGuests } from "../../Providers/Guests";
import Card from "../../components/Card";

const MeetingRoom = () => {
  const { authenticated } = useAuth();
  const { addGuest, guestList, exitMeeting } = useGuests();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <MainContainer>
      <HeaderContainer>
        <div className="niceMeeting">NiceMeeting</div>
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
        <div className="public">{<Card guest={guestList}></Card>}</div>
      </SectionContainer>
    </MainContainer>
  );
};

export default MeetingRoom;
