// Import librairies
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { CurrentUserContext } from "./login/CurrentUserContext";
import { useContext} from "react";
import moment from "moment";

//Import components
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Mind from "./directories/Mind";
import Body from "./directories/Body";
import Soul from "./directories/Soul";
import SignIn from "./login/SignIn";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Journal from "./directories/Journal";
import LogIn from "./login/LogIn";



const App = () => {
  const { currentUser, setCurrentUser, replaceUserEvent } = useContext(CurrentUserContext);

  console.log("current user", currentUser)

  //Set the Date of the blog 
  const date = new Date();
  const monthDate = moment(date).format("MMMM YYYY");
  const weeklyDate = moment(date).format("dddd DD");

  return (

      <BrowserRouter>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Mind">
            <Mind monthDate={monthDate} weeklyDate={weeklyDate} />
          </Route>
          <Route exact path="/Mind/Journal">
            <Journal monthDate={monthDate} weeklyDate={weeklyDate} currentUser={currentUser} />
          </Route>
          <Route exact path="/Body">
            <Body currentUser= {currentUser} setCurrentUser= {setCurrentUser}/>
          </Route>
          <Route exact path="/Soul">
            <Soul />
          </Route>
          <Route path="/signin">
            {currentUser ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route path="">
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>

  );
};

export default App;
