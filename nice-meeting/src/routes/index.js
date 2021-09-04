import { Switch } from "react-router-dom";
import Route from "./route";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MeetingRoom from "../pages/MeetingRoom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/meeting" component={MeetingRoom} isPrivate></Route>
    </Switch>
  );
};

export default Routes;
