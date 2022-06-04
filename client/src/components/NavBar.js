import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log("NavBar render");
  return (
    <Wrapper>
        <HomeIcon>
        <span class="material-symbols-rounded">house</span>
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
      </MainPages>
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

.material-symbols-rounded{
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

  h1{
      margin-right: 250px;
  }

`
const HomeIcon = styled.div`
display: flex;
flex-wrap: wrap;

h1{
    font-family: 'Poppins', sans-serif;
}
`
