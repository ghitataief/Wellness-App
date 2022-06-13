import styled from "styled-components";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";
import { Link } from "react-router-dom";
import {FiLogOut} from "react-icons/fi"

const Logout = ({setCurrentUser}) => {

    const handleLogOut = () =>{
        setCurrentUser(null)
    }

    return (
        <Wrapper>
            <Logoutbutton onClick={handleLogOut}> <FiLogOut/></Logoutbutton>
        </Wrapper>
    )

}

export default Logout;

const Wrapper = styled.div`

`
const Logoutbutton = styled.button`
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  top: 50%;
  background-color: #C3ADF4 ;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  width: 120px;
  :hover {
    background-color: #A780FB ;
    transition: 0.1s;
  }
`