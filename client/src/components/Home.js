import styled from "styled-components";
import Helmet from "react-helmet";
import SignUp from "./login/SignUp";
import Flower from "./images/Flower.png"
import plant_icon from "./images/plant_icon.png"
import lavende from "./images/lavende.png"

const Home = () => {
  return (
    <Wrapper>
      <Helmet bodyAttributes={{ style: "background-color : #F3EDFC" }} />
      <img src={Flower} className="Flower"/>
      <Title>
        <GrowthHavenIcon src={lavende} alt="Plant Icon" className="Lavende"/>
        Growth Haven
        
      </Title>
 
      <Description>
        Discover Your True Potential, Release Your Fears & Make Your Dream Life
        a Reality <br></br>Whether it's discovering your purpose, doing what you
        love, making a positive impact, or simply creating a beautiful, fun and
        fulfilling life—you can totally do it. You are the artist of your life.
        You have the power to create your dream life.
      </Description>
      <img src={Flower} className="Flower"/>
      <VisionBorad>Place Holder for a Vision board
     
      </VisionBorad>
      <SubDescription>
        <ul>
          <li>
            Get intentional with your daily pratices with your personal journal
          </li>
          <li>Track your physical wellness in your calender.</li>
          <li>Access to daily affirmations exercises</li>
        </ul>
      </SubDescription>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  span {
    margin: 15px;
  }
  .Flower{
   width: 420px;
    position: absolute;
    z-index: 1;
  }
  .Lavende{
    width: 100px;
  }
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 90px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
  display: flex;
  align-self: center;
  align-items: center;
  margin-top: 50px;

  img {
    margin-right: 10px;
  }
`;

const Description = styled.div`
  font-size: 30px;
  display: flex;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin: 100px 300px;
  background-color: white;
  padding : 30px 100px;
`;
const SubDescription = styled.div`
  font-size: 30px;
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  margin: 10px;
  ul {
    background-color: #f9eedf;
    padding: 60px;
  }
`;

const GrowthHavenIcon = styled.img`
  width: 80px;
`;
const VisionBorad = styled.div`
  background-color: #E5E2E7 ;
  color: white;
  padding: 250px;
  margin: 60px 300px;
  font-family: "Tiro Gurmukhi", serif;
  font-size: 50px;
  text-align: center;
  border-radius: 30px;
`;
