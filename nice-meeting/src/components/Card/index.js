import { CardContainer, Cards, Button } from "./styles";

const Card = ({ guest, handleRemove }) => {
  return (
    <CardContainer>
      {guest.map((ele) => (
        <Cards>
          <figure>
            <img alt="guest" src={ele.image}></img>
          </figure>
          <p>{ele.name}</p>
          <Button colorSchema onClick={() => handleRemove(ele)}>
            {" "}
            Remover Participante
          </Button>
        </Cards>
      ))}
    </CardContainer>
  );
};

export default Card;
