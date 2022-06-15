import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import moment from "moment";

const Mind = ({ value }) => {

  //Set the Date of the blog
  const date = new Date();
  const monthDate = moment(date).format("MM/YYYY");
  const weeklyDate = moment(date).format("dddd DD");

  return (
    <Wrapper>
      <TimeStamp>
        <StyleLink to={"/Mind/Journal"}>
          <p>{weeklyDate}</p>
        </StyleLink>
      </TimeStamp>
      <div className="JournalInput">
        <br />
        <div
          dangerouslySetInnerHTML={{ __html: value }}
          className="JournalValue"
        />
      </div>
    </Wrapper>
  );
};

export default Mind;

const Wrapper = styled.div`
  border-width: 5px;
  border-style: solid;
  border-color: #dbc4f5;
  padding: 15px;
  width: 62vw;
  background-color: white;
  display: flex;

  .Date {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-style: italic;
  }
  .calender {
    height: 45px;
    width: 40px;
  }
  .JournalValue {
    margin: 30px;
    font-size: 25px;
  }
  .JournalInput {
    max-width: 55vw;
    word-break: break-word;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const TimeStamp = styled.div`
  background-color: #eacaf1;
  width: fit-content;
  padding: 25px;
  border-radius: 3px;
  display: flex;
  p {
    color: white;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }
`;
