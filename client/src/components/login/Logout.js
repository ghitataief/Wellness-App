import styled from "styled-components";
import {FiLogOut} from "react-icons/fi"

const Logout = ({setCurrentUser}) => {

    const handleLogOut = () =>{
        setCurrentUser(null)
    }

    return (
        <>
            <Logoutbutton onClick={handleLogOut}> <FiLogOut/></Logoutbutton>
        </>
    )

}

export default Logout;

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