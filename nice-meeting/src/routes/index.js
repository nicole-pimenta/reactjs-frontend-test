import { Switch, Route } from "react-router-dom";
//import Route from "./route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MeetingRoom from "../pages/MeetingRoom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/meeting">
        <MeetingRoom />
      </Route>
    </Switch>
  );
};

export default Routes;
