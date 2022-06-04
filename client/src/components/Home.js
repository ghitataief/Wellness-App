import styled from "styled-components";
import Helmet from "react-helmet";

const Home = () => {
  console.log("Home render");
  return (
    <Wrapper>
      <Helmet bodyAttributes={{ style: "background-color : #EDE3F9" }} />
      <Title>Welcome to - H a v e n</Title>
      <Description>
        Simple and accessible programs that adapt to your daily life, whatever
        your level, your pace and your desires. Stress less. Sleep more. Take
        your daily dose of happiness with Haven. Access hundreds of meditations,
        focus exercises and more by starting your free trial today.
      </Description>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  span {
    margin: 15px;
  }
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
`;

const Description = styled.div`
  font-size: 20px;
  display: flex;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  justify-content: center;
  margin: 50px;
  background-color: white;
  padding: 20px;
  `;
