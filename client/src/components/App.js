// Import librairies
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import { CurrentUserContext } from "./login/CurrentUserContext";
import { useContext } from "react";

//Import components
import ErrorPage from './ErrorPage'
import Home from "./Home";
import Mind from "./directories/Mind";
import Body from "./directories/Body";
import Soul from "./directories/Soul";
import SignIn from "./login/SignIn";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Journal from "./directories/Journal"
import LogIn from "./login/LogIn";
//authotification process
import { Auth0Provider } from "@auth0/auth0-react";



const App = () => {
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext); 

    return (
      <Auth0Provider
      domain="http://localhost:3000"
      clientId={"YOUR_CLIENT_ID"}
      redirectUri={window.location.origin}
    >
        <BrowserRouter>
        <NavBar currentUser= {currentUser} setCurrentUser={setCurrentUser}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route exact path="/Mind">
              <Mind />
            </Route>
            <Route exact path="/Mind/Journal">
              <Journal />
            </Route>
            <Route exact path="/Body">
              <Body />
            </Route>
            <Route exact path="/Soul">
              <Soul />
            </Route>
            <Route path="/signin">{currentUser? <Redirect to="/"/> : <SignIn />}
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route path="">
              <ErrorPage />
            </Route>
          </Switch>
        <Footer/>
      </BrowserRouter>
      </Auth0Provider>
    )
}

export default App; 