import styled from "styled-components";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Mind = () => {
  //Set usestate
  const [value, setValue] = useState("");

  return (
    <>
      <Title>Mind</Title>
      <Description>
        Description : this place is to journal, your thought, your goals for the
        days
      </Description>
      <NotePad>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </NotePad>
      <SendButton>Send</SendButton>
    </>
  );
};

export default Mind;

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
  font-size: 20px;
  margin-left: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
`;

const NotePad = styled.div`
  margin: 0 50px;
`;
const SendButton = styled.button`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  top: 50%;
  background-color:#DBC4F5  ;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
  margin: 0 50px;
  :hover {
      background-color:#9F61E4;
      transition: 0.7s;
  }
`;
