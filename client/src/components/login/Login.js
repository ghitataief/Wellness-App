import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //statuts
  const [subStatus, setSubStatus] = useState("idle");
  //Error Message
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //Declare my state of the current User
  const [signInName, setSignInName] = useState("");

  //Establish the current user data
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  //Use history to redirect
  const history = useHistory();

  //On submit of the form, run this function
  const logInForm = (e) => {
    //   //prevent the default action of the form element
    e.preventDefault();

    //fetch the data users
    fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        setCurrentUser(data.data);
        if (data.status === 201) {
          history.push("/");
        } else if (currentUser !== null) {
          setSubStatus("confirmed");
        }
        if (data.status === 404) {
          setSubStatus("Error");
          setErrMessage("User doesn't exist");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <WrapSignIn>
      <form onSubmit={logInForm}>
        <SignUpTitle>Log In</SignUpTitle>
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

        <button
          type="submit"
          class="btn btn-primary"
          onChange={(e) => {
            setSignInName(e.target.value);
          }}
        >
          Log In
        </button>
      </form>
      {subStatus === "Error" && <ErrorMsg>{errMessage}</ErrorMsg>}
    </WrapSignIn>
  );
};

export default LogIn;

const WrapSignIn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;

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

  form {
    padding: 80px;
    border-radius: 3px;
    margin: 80px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
