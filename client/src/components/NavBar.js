import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiHomeHeart } from "react-icons/bi";

const NavBar = () => {
  return (
    <Wrap>
      <Wrapper>
        <HomeIcon>
          <BiHomeHeart className="homeIcon" />
          <StyleLink to={"/"}>
            <Page>Home</Page>
          </StyleLink>
        </HomeIcon>

        <MainPages>
          <StyleLink to={"/Mind"}>
            <Page>Mind</Page>
          </StyleLink>
          <StyleLink to={"/Body"}>
            <Page>Body</Page>
          </StyleLink>
          <StyleLink to={"/Soul"}>
            <Page>Soul</Page>
          </StyleLink>
          <StyleLink to={"/signin"}>
            <Page>
              <BsPerson className="Login" />
            </Page>
          </StyleLink>
        </MainPages>
      </Wrapper>
      <hr />
    </Wrap>
  );
};

export default NavBar;

const Wrap = styled.div`
  hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }

  .Login {
    width: 50px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
  }

  .homeIcon {
    width: 50px;
    height: 40px;
    align-self: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .material-symbols-rounded {
    align-self: center;
    margin-right: 10px;
  }
`;
const Page = styled.h1`
  font-weight: bold;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  font-style: italic;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const MainPages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h1 {
    margin-right: 250px;
  }
`;
const HomeIcon = styled.div`
  display: flex;
  flex-wrap: wrap;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
  }
`;
