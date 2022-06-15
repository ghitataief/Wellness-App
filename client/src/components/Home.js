import styled from "styled-components";
import Helmet from "react-helmet";
import SignIn from "./login/SignIn";
import { CurrentUserContext } from "./login/CurrentUserContext";
import { useContext } from "react";
import peacefull from "../components/images/peacefull.png";
import cloud from "../components/images/cloud.png";

const Home = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Wrapper>
      <Helmet bodyAttributes={{ style: "background-color : #F3EDFC" }} />

      <Title>Growth Haven</Title>
      <SubDescription>
        <ul>
          <li>
            - Get intentional with your daily pratices with your personal
            journal
          </li>
          <br />
          <li>- Track your physical wellness and organize your month in your calender</li>
          <br />
          <li>- Access to daily affirmations practices and positives quotes</li>
        </ul>
      </SubDescription>

      <Description>
        Discover Your True Potential, Release Your Fears & Make Your Dream Life
        a Reality <br></br>Whether it's discovering your purpose, doing what you
        love, making a positive impact, or simply creating a beautiful, fun and
        fulfilling life—you can totally do it. You are the artist of your life.
        You have the power to create your dream life.
      </Description>
      {!currentUser && <SignIn />}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-image: url(${cloud});

  span {
    margin: 15px;
  }
  .calendar {
    width: 200px;
    position: absolute;
    z-index: 1;
  }
  .harmonyIcon {
    width: 100px;
  }
`;
const Title = styled.h1`
  font-weight: 800;
  font-size: 120px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
  display: flex;
  align-self: center;
  align-items: center;
  padding: 110px;
  letter-spacing: 1rem;
  color: black;
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  text-shadow: 7px 6px 1px white;

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
  padding: 100px 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  li {
    text-shadow: 7px 6px 1px white;
  }
`;
const SubDescription = styled.div`
  font-size: 30px;
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  margin: 10px;

  ul {
    background-color: #f9eedf;
    padding: 100px;
    border-radius: 3px;
    list-style: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
`;
