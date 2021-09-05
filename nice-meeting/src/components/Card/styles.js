import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 280px;
  height: 250px;
  background-color: var(--violetCore);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  margin: 20px;

  figure {
    height: 150px;
    width: 200px;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  img {
    height: 100%;
    width: 100%;
    margin: 5px auto;
    justify-content: center;
    box-shadow: 3px 4px 5px white;
    border: none;
    border-radius: 10px;
  }
`;

export const Button = styled.div`
  background-color: var(--violetLight);
  color: black;
  border: none;
  padding: 10px;
  width: 200px;
  text-align: center;
  font-size: 1rem;
  border-radius: 20.45px;
  cursor: pointer;
  margin: 5px auto;

  &:hover {
    filter: brightness(1.1);
    transition: all 250ms linear;
  }

  &:active {
    transition: all 150ms linear;
  }
`;
