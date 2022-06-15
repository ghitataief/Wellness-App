import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

const SignUp = () => {
  //Establish the current user data
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  //Declare my state of the current User
  const [signInName, setSignInName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Establish the data of the current User : calender event
  const [myCalendar, setMyCalendar] = useState([]);

  //statuts
  const [subStatus, setSubStatus] = useState("idle");

  //Error Message
  const [errMessage, setErrMessage] = useState("");

  //Use history to redirect
  const history = useHistory();

  //On submit of the form, run this function
  const singInForm = (e) => {
    //   //prevent the default action of the form element
    e.preventDefault();

    //fetch the data post end point
    fetch("/api/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signInName,
        email,
        password,
      }),
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        //On the sign in, set the currentUser to that data
        if (data.status === 400) {
          setSubStatus("Error");
          setErrMessage(data.message);
        }

        if (data.status === 201) {
          setCurrentUser(data.data);
          setSubStatus("confirmed");
          history.push("/");
        }
      });
  };

  return (
    <WrapSignIn>
      <form onSubmit={singInForm}>
        <SignUpTitle>Sign up</SignUpTitle>
        <LogInTitle>
          Already a member ? <StyleLink to={"/login"}>Log In</StyleLink>
        </LogInTitle>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            aria-describedby="name-help"
            placeholder="Enter name"
            onChange={(e) => {
              setSignInName(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="form-group form-check">
          <label class="form-check-label" for="exampleCheck1">
            Agree to terms and services
          </label>
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        </div>

        <button type="submit" class="btn btn-primary">
          Sign Up
        </button>
      </form>
      {subStatus === "Error" && <ErrorMsg>{errMessage}</ErrorMsg>}
    </WrapSignIn>
  );
};

export default SignUp;

const WrapSignIn = styled.div`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  flex-direction: column;
  align-items: center;

  form {
    padding: 80px;
    border-radius: 3px;
    margin: 80px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  label {
    font-size: 30px;
  }

  input {
    height: 40px;
    width: 350px;
  }

  .form-check-input {
    width: 15px;
  }
  .form-check {
    display: flex;
    flex-wrap: wrap;
  }

  .form-check-label {
    font-size: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  button {
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    top: 50%;
    background-color: #a5e1fc;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 15px;
    min-height: 30px;
    min-width: 350px;
    :hover {
      background-color: #33c0ff;
      transition: 0.7s;
    }
  }
`;
const SignUpTitle = styled.h1`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  align-self: center;
  align-content: center;
`;

const LogInTitle = styled.p`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #33c0ff;
`;
