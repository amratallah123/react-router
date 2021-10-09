import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Error from "./pages/Error";
import Post from "./pages/Post";
import Hook from "./components/Hook";
import Button from "@material-ui/core/Button";
function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter basename='toutrial'>
      <div className='App'>
        <Header />
        <Button onClick={() => setLogin(!login)}>
          {login ? "log out" : "log in"}
        </Button>

        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/profile'>
            <Profile login={login} />
          </Route>
          <Route path='/post/:id' component={Post}></Route>

          <Route path='/post' component={Post}></Route>
          <Route component={Error}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
