import styled from "styled-components";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";

const Journal = ({ monthDate, weeklyDate, currentUser }) => {
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
        //Find current current user email that match post email
        result.find((post) => {
          if (post.email === currentUser.email) {
            //Push every post into the BlogArray of the current user
            blogArray.push(post.journalPost);
          }
        });
        setBlog(blogArray);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <>
      <Wrapper>
        <Title>My Journal</Title>
        {blog?.map((message, key) => {
          return (
            <BlogWrap>
              <TimeStamp>
                {monthDate}
                <p>{weeklyDate}</p>
              </TimeStamp>
              <BlogPost>
                <div dangerouslySetInnerHTML={{ __html: message }} key={key} />
              </BlogPost>
            </BlogWrap>
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
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const BlogPost = styled.div`
  display: flex;
  justify-content: left;
  background-color: #ffdeef;
  border-width: 3px;
  border-style: solid;
  border-color: #ffcae5;
  margin: 20px;
  padding: 35px;
  width: 70vw;
  align-self: center;
  font-family: "Roboto", sans-serif;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
const TimeStamp = styled.div`
  align-self: center;
  padding: 30px;
  background-color: #fdabbe;
  margin-top: 15px;
  font-family: "Tiro Gurmukhi", serif;
`;

const BlogWrap = styled.div`
  display: flex;
`;
