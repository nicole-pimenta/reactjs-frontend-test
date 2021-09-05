import styled from "styled-components";

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--darkBlue);
`;

export const HeaderContainer = styled.div`
  height: 10vh;
  padding: 20px 70px 5px;

  .niceMeeting {
    color: var(--violetCore);
    font-size: 2rem;
    font-weight: 600;
    padding-left: 30px;
  }

  @media (max-width: 400px) {
    padding: 20px 5px 20px;

    .niceMeeting {
      font-size: 1.5rem;
      padding-left: 20px;
    }
  }
`;

export const SectionContainer = styled.div`
  background-color: var(--violetLight);
  width: 90vw;
  height: 650px;
  margin:20px auto;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 6px 8px white;
 
    .owner {
      width: 30%;
      max-width: 30vw;
      background-color: var(--brown);
      border-radius: 20px;
      border:2px solid white; 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 
      height: 500px;
      margin: 15px;

      .user{
        height: 70%;
        margin: 20px auto;
      } 

      img{
        border:none;
        border-radius: 10px;
        height: 70%;
        box-shadow: 3px 4px 5px white;
        width: 95%;
      } 

     
    }

    .public {
      width: 65%;
      max-width: 60vw;
      margin: 0 auto;
      height: 600px;
      background-color: var(--brown);
      border-radius: 20px;
      border:2px solid white;
    }
  }

  @media(max-width:1000px){
  flex-direction: column;
  justify-content: center ; 
  width: 80vw;
  margin: 0 auto;


  .owner,.public {
      width: 90%;
      max-width: 85vw;
     margin: 0 auto;

  } 

  .container-btn{
    display: flex;
    flex-direction: column;
    
  } 

 
`;
