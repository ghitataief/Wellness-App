import React from "react";
import { AiOutlineFrown } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Error message
const ErrorPage = () => {
  return (
    <Wrapper>
      <div>
        <AiOutlineFrown size={200} />
      </div>
      <h1>An unknown error has occured.</h1>
      <br />
      <p>Please try refreshing the page or checkout our home page. </p>
      <Hp>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Hp>
    </Wrapper>
  );
};

// styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  div {
    font-size: 70px;
  }

  h1 {
    font-weight: bold;
    font-size: 32px;
  }

  p {
    font-size: 26px;
  }

  img {
    width: 100vw;
    //height:100vh;
  }
`;

const Hp = styled.h1`
  width: 100px;
  padding: 20px;
  color: var(--colour-blue);
  text-align: justify;
  text-decoration: none;
  font-weight: bold;
`;

export default ErrorPage;
