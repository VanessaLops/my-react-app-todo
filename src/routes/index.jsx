import { Switch } from "react-router-dom";
import CreateEvent from "../pages/create-event";
import EditEvent from "../pages/edit-event";
import EditProfile from "../pages/edit-profile";

import Home from "../pages/home";
import Login from "../pages/login";
import SignUp from "../pages/sign-up";
import Route from "./routes";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/new" component={CreateEvent} isPrivate />
      <Route path="/profile" component={EditProfile} isPrivate />
      <Route path="/event" component={EditEvent} isPrivate />

    </Switch>
  );
};

export default Routes;
