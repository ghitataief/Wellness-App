// Import librairies
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Import components
import ErrorPage from './ErrorPage'
import Home from "./Home";
import Mind from "./directories/Mind";
import Body from "./directories/Body";
import Soul from "./directories/Soul";
import SignIn from "./SignIn";
import Footer from "./Footer";
import NavBar from "./NavBar";



const App = () => {
    console.log("app render")
    return (
        <BrowserRouter>

        <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Mind">
              <Mind />
            </Route>
            <Route exact path="/Body">
              <Body />
            </Route>
            <Route exact path="/Soul">
              <Soul />
            </Route>
            <Route exact path="/SignIn">
              <SignIn />
            </Route>
            <Route path="">
              <ErrorPage />
            </Route>
          </Switch>
        <Footer/>
      </BrowserRouter>
    )
}

export default App; 