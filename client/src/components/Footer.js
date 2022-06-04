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
          <p>&copy; 2022 | Wellness & Co.</p>
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

const MoreAboutUS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-left: 5%;
  padding-right: 5%;
`;

const FooterLinks = styled.a`
  color: black;
  text-decoration: none;
`;

const CustomerSupport = styled.span`
  display: flex;
  font-weight: bold;
  span {
    padding-top: 15px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    p {
      display: block;
      font-weight: normal;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: left;
    }
  }
`;

const ContactLink = styled.a`
  color: black;
  text-decoration: none;
`;

const ShopWithUs = styled.div`
  display: flex;
  font-weight: bold;
  span {
    padding-top: 15px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    p {
      display: block;
      font-weight: normal;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: left;
    }
  }
`;

const AboutUs = styled.div`
  display: flex;
  font-weight: bold;
  margin-top: -10px;
  span {
    padding-top: 15px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    p {
      display: block;
      font-weight: normal;
      padding-top: 5px;
      padding-bottom: 5px;
      text-align: left;
    }
  }
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
