import { CardContainer, Cards, Button } from "./styles";

const Card = ({ guest }) => {
  console.log(guest);
  return (
    <CardContainer>
      {guest.length < 7
        ? guest.map((ele) => (
            <Cards>
              <figure>
                <img src={ele.image}></img>
              </figure>
              <p>{ele.name}</p>
              <Button colorSchema> Remover Participante</Button>
            </Cards>
          ))
        : null}
    </CardContainer>
  );
};

export default Card;
