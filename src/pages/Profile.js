import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { useEffect } from "react";
import EditProfile from "./EditProfile";
import ViewProfile from "./ViewProfile";
const Profile = ({ login }) => {
  const history = useHistory();
  useEffect(() => {
    if (!login) {
      history.push("/");
    }
  }, [history, login]);
  const { path, url } = useRouteMatch("/profile");
  return (
    <BrowserRouter>
      <div>
        <h1>YOUR PROFILE</h1>
        <ul>
          <li>
            <Link to={`${url}/editprofile`}> Edit your profile </Link>|
            <Link to={`${url}/viewprofile`}> View Profile </Link>
          </li>
          <li></li>
        </ul>
        <Switch>
          <Route
            path={`${path}/editprofile`}
            exact
            component={EditProfile}></Route>
          <Route path={`${path}/viewprofile`} component={ViewProfile}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Profile;
