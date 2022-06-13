import styled from "styled-components";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import MindJournal from "./MindJournal";
import Helmet from "react-helmet";
import ReactQuill from "react-quill";
import moment from "moment";

const Mind = () => {
  //Set the status of journaling
  const [journalingStatus, setJournalingStatus] = useState(false);
  //Set usestate
  const [value, setValue] = useState("");

  //Fetch and catching errors
  const [errorUser, setErrorUser] = useState();

  //Display blog
  const [isShown, setIsShown] = useState(false);

  //set date 
  const date = new Date();
  console.log('new moment',moment(date).format('MM/YYYY : DD dddd'))

  const monthDate = moment(date).format('MM/YYYY');
  const weeklyDate = moment(date).format('DD dddd');

  const postingJournal = (e) => {
    e.preventDefault();
    fetch("/add-journal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: 201,
        message: value,
        month: monthDate,
        week: weeklyDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        setErrorUser("error:", error);
      })
      .finally(() => {
        setJournalingStatus(true);
      });
  };

  return (
    <Wrapper>
      <Helmet bodyAttributes={{ style: "background-color : #F2FFDA  " }} />
      <Title>Mindfull Practice</Title>
      <hr/>
      <Description>
        Journal prompts for self discovery, healing & growth
        <br />
        <ul>
          <li>
            Give yourself daily goals and design your life accordingly.
            <br />
          </li>

          <li>
            Start the week with your priorities and positive habits in mind
          </li>
          <li>
            Reset with a comprehensive reflection to feel refreshed for the week
            ahead.
          </li>
          <li>
            It's your tool to live a more intentional life, one week at a time.
          </li>
          <br />
          
        </ul>
      </Description>
      <hr/>
      <NotePad>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="What are 3 goals that I can accomplish today ?"
          className="Notes"
          style={{
            height: "40vh",
            backgroundColor: "white",
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: "5px",
            fontSize:"50px"
          }}
        />
      </NotePad>
      <SendButton onClick={postingJournal}>POST</SendButton>
      {/* Render the journal prompt if post has been clicked*/}
      {journalingStatus && (
        <StyleMindJournal>
          <MindJournal value={value} key={value}/>
        </StyleMindJournal>
      )}
    </Wrapper>
  );
};

export default Mind;

const Wrapper = styled.div`
  margin: 100px;

.ql-container{
  font-size: 30px;
  border-style: none;
}
hr {
  height: 2vh;
  width: 70vw;
  border-style: solid;
  background-color: #E0E8CD ;
  border-color:#E0E8CD ;
  margin-bottom: 70px;
}
`

;

const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
  color: #9f61e4;
  margin-bottom: 80px;
`;
const Description = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin: 0px 350px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  display: flex;
  flex-direction: column;
  ul {
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
  }
`;

const NotePad = styled.div`
  margin: 0 350px;
`;
const StyleMindJournal = styled.div`
  margin: 25px 350px;
`;
const SendButton = styled.button`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  top: 50%;
  background-color: #dbc4f5;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
  margin: 60px 350px;
  :hover {
    background-color: #9f61e4;
    transition: 0.1s;
  }
`;
