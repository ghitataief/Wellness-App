import styled from "styled-components";
import Login from "./Login";


const SignIn = () => {

  return (<Wrapper>
  <Title>Let's create the life of <br/>your dream</Title>
  <Login/>
  </Wrapper>);
};

export default SignIn;

const Wrapper = styled.div`
margin: 100px 300px;
//background-color: red;
border-color: #FEE4CC;
border-style: solid;
border-width: 4px;
border-radius: 1%;
padding: 30px 20px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
  display: flex;
  text-align:center;
  margin: 100px;
`