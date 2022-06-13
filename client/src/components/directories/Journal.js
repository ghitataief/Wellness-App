import styled from "styled-components";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import Moment from "react-moment";
import { FcOvertime } from "react-icons/fc";
import { Link } from "react-router-dom";

//Get data from blog post

const Journal = ({ value }) => {
  const [blog, setBlog] = useState([]);

  const blogArray = [];

  useEffect(() => {
    fetch("/api/get-journal", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.data)
      .then((result) => {
        console.log('result',result)
        result.map((blog) => {
          blogArray.push(blog.journalPost);
        });
        setBlog(blogArray);
      });
  }, []);

  return (
    <>
    <Wrapper>
      <Title>My Journal</Title>
      {blog?.map((message, key) => {
        return (
          <>
            <BlogPost>
              <div dangerouslySetInnerHTML={{ __html: message }} key ={key}/>
            </BlogPost>
          </>
        );
      })}
    </Wrapper>
    </>
  );
};

export default Journal;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;

`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 50px;
  display: flex;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  display: flex;
  margin-top: 20px;
  background-color: pink;
  color: whitesmoke;
  padding: 30px;
 // width: 20vw;
  border-radius: 2px;
`

const BlogPost = styled.div`
display: flex;
justify-content: center;
background-color: aliceblue;
border-width: 3px;
border-style: solid;
margin: 20px;
border-radius: 20px;
padding: 35px;
width: max-content;
align-self: center;

`
