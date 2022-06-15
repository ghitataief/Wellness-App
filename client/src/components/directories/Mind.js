import styled from "styled-components";
import { useState, useContext } from "react";
import "react-quill/dist/quill.snow.css";
import MindJournal from "./MindJournal";
import Helmet from "react-helmet";
import ReactQuill from "react-quill";
import { CurrentUserContext } from "../../components/login/CurrentUserContext";
import { useHistory } from "react-router-dom";
import mindfull from "../images/mindfull.png"

const Mind = ({ monthDate, weeklyDate }) => {

  
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  //Set the status of journaling
  const [journalingStatus, setJournalingStatus] = useState(false);
  //Set usestate
  const [value, setValue] = useState("");
  //posted messages : to not affected the value posted
  const [post, setPost] = useState("");

  //Fetch and catching errors
  const [errorUser, setErrorUser] = useState();

  //Use history
  let history = useHistory();

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
        email: currentUser.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        setErrorUser("error:", error);
      })
      .finally(() => {
        setJournalingStatus(true);
        //To set the final value of the post
        setPost(value);
        //Set back the value to empty string
        setValue("");
      });
  };

  return (
    <Wrapper>
      <Helmet bodyAttributes={{ style: "background-color : #F2FFDA  " }} />
      <img src={mindfull}/>
      <Title>Mindfull Practice</Title>
      <hr />
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
      <hr />
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
            fontSize: "50px",
          }}
        />
      </NotePad>
      <SendButton onClick={postingJournal}>POST</SendButton>
      <MyJournalButton
        onClick={() => {
          history.push("/Mind/Journal");
        }}
      >
        MY JOURNAL
      </MyJournalButton>
      {/* Render the journal prompt if post has been clicked*/}
      {journalingStatus && (
        <StyleMindJournal>
          <MindJournal value={post} key={value} />
        </StyleMindJournal>
      )}
    </Wrapper>
  );
};

export default Mind;

const Wrapper = styled.div`
  margin: 100px;

  img{
    width: 450px;
    position: absolute;
  }
  .ql-container {
    font-size: 30px;
    border-style: none;
  }
  hr {
    height: 2vh;
    width: 70vw;
    border-style: solid;
    background-color: #e0e8cd;
    border-color: #e0e8cd;
    margin-bottom: 70px;
  }
`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 100px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  justify-content: center;
  color: #9f61e4;
  margin-bottom: 80px;
  text-align: center;
  letter-spacing: 5px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
const Description = styled.h1`
  font-weight: bold;
  font-size: 40px;
  margin: 40px 350px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;

  ul {
    font-size: 30px;
    font-style: normal;
    font-weight: 300;
  }
`;

const NotePad = styled.div`
  margin: 0 350px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
const StyleMindJournal = styled.div`
  margin: 25px 350px;
`;

const MyJournalButton = styled.button`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  top: 50%;
  background-color: #f6cdfc;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
  margin-left: 940px;
  :hover {
    background-color: #f39eff;
    transition: 0.1s;
  }
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
