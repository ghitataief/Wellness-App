import styled from "styled-components";
import Calendar from 'react-calendar'
import { useState } from "react";
import 'react-calendar/dist/Calendar.css'


const Body = () => {

  const [value, onChange] = useState(new Date());
  return (<Wrapper>
    <Title>Body Practice</Title>
    <Description>
    Track your physical health.
      <ul>
        <li>Set your body goals</li>
        <li>Organize your weekly meals</li>
        <li>Plan your daily exercises</li>
      </ul>
    </Description>
    <Calendar onChange={onChange} value={value} className="calendar"/>
    
    </Wrapper>);
};

export default Body;

const Wrapper =styled.div`
margin: 100px;

.calendar{
  margin-left: 350px;
  width: max-content;
  height: 430px;

  button{

    font-weight: bold;
    font-size: 25px;
    font-family: "Roboto", sans-serif;
    margin: 15px 0px;
  }
  
}

`
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
`;

const Description = styled.h1`
  font-weight: bold;
  //background-color: red;
  font-size: 40px;
  margin: 0px 350px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  display: flex;
  flex-direction: column;
  ul{
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
  }
`;