import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MeetingRoom from "../pages/MeetingRoom";
import PageNotFound from "../pages/PageNotFound";

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
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
