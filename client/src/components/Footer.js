import styled from "styled-components";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <Wrapper>

      <PolConf>
        <NavLink
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            textAlign: "center",
          }}
        >
          <p>&copy; © 2021 Growth Haven, Inc. All rights reserved </p>
        </NavLink>
        
      </PolConf>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  background-color: white;
`;



const PolConf = styled.div`
  height: 25px;

  p {
    padding: 10px;
    background-color: white;
  }

  hr {
    width: 60%;
    min-height: 2px;
    background-color: #e1e1e1;
    border-color: #e1e1e1;
  }
`;

export default Footer;
