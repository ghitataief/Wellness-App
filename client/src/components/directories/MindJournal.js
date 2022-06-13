import styled from "styled-components";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Moment from "react-moment";
import { FcOvertime } from "react-icons/fc";
import { Link } from "react-router-dom";

const Mind = ({ value }) => {

  const date = new Date();


  return (
    <Wrapper>
      <StyleLink to={"/Mind/Journal"}>
        <FcOvertime className="calender" />
        <Moment format="YYYY/MM/DD - HH:MM" className="Date">
          {date}
        </Moment>
      </StyleLink>
      <br />
      <div dangerouslySetInnerHTML={{ __html: value }} className="JournalValue" />
    </Wrapper>
  );
};

export default Mind;

const Wrapper = styled.div`
  border-width: 5px;
  //border-radius: 10px;
  border-style: solid;
  border-color: #dbc4f5;
  padding: 15px;
  width: 62vw;
  background-color: white;

  .Date {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-style: italic;
  }
  .calender {
    height: 45px;
    width: 40px;
  }
  .JournalValue{
    margin: 30px;
    font-size: 25px;
  }
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
