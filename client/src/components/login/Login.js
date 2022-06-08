import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { Redirect, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //Login authautifaction
  const { loginWithRedirect } = useAuth0();

  //---Sign in function

  //Declare my state of the current User
  const [signInName, setSignInName] = useState("");

  //Establish the current user data
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

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

  //   //fetch the data post end point
  //   fetch("api/signin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       status: signInName,
  //     }),
  //   })
  //     .then((reponse) => {
  //       return reponse.json();
  //     })
  //     .then((data) => {
  //       //On the sign in, set the currentUser to that data
  //       setCurrentUser(data.data);
  //       if (data.status === 200) {
  //         history.push("/");
  //         //redirect to homepage
  //       } else if (currentUser !== null) {
  //         setSubStatus("confirmed");
  //       } else if (currentUser === null) {
  //         setSubStatus("error");
  //         setErrMessage("User doesn't exist");
  //       }
  //     });
  };

  return (
    <WrapSignIn>
      <form onSubmit={singInForm}>
        <SignUpTitle>Sign Up</SignUpTitle>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
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
          //On change of event, set Sign in Name to the value
          onChange={(e) => {
            setSignInName(e.target.value);
          }}
          onClick={() => loginWithRedirect()}
        >
          Submit
        </button>
      </form>
    </WrapSignIn>
  );
};

export default Login;

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
`;
