import styled from "styled-components";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Moment from "react-moment";
import { FcOvertime } from "react-icons/fc";
import { Link } from "react-router-dom";

const Mind = ({ value }) => {

  // const [blog, setBlog] = useState([]); 
  // const [post, setPost] = useState([]); 

  const date = new Date();

  // fetch ("api/get-journal",{
  //   headers: {
  //     "Content-Type": "application/json",
  //   }
  // })
  // .then((res) => res.json())
  // .then((data) => {
  //   setBlog(data.data)
  //   console.log("Get journal", blog);
  // })

  // blog.map((post) => {
  //   setPost(post.message)
  // })
  

  return (
    <Wrapper>
      <StyleLink to={"/Mind/Journal"}>
        <FcOvertime className="calender" />
        <Moment format="YYYY/MM/DD - HH:MM" className="Date">
          {date}
        </Moment>
      </StyleLink>
      <br />
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </Wrapper>
  );
};

export default Mind;

const Wrapper = styled.div`
  border-width: 3px;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
  padding: 15px;
  max-width: max-content;
  background-color: white;

  .Date {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
  }
  .calender {
    height: 45px;
    width: 40px;
  }
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
