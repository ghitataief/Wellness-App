import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
    fetch("/api/signin",
      {
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
          //On the sign in, set the currentUser to that data
          console.log("data login", data);
          setCurrentUser(data.data);
          if (data.status === 201) {
            history.push("/");
            //redirect to homepage
          } else if (currentUser !== null) {
            setSubStatus("confirmed");
          } else if (currentUser === null) {
            setSubStatus("error");
            setErrMessage("User doesn't exist");
          }
        });
  };

  return (
    <>
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
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            //On change of event, set Sign in Name to the value
            onChange={(e) => {
              setSignInName(e.target.value);
            }}
            // onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        </form>
      </WrapSignIn>
    </>
  );
};

export default LogIn;

const WrapSignIn = styled.div`
  display: flex;
  justify-content: center;
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
