import "./App.css";
import { Route, useLocation, Switch } from "wouter";
import Home from "./pages/Home/Home";
import Video from "./pages/VideoPlay/VideoPlay";
import Login from "./pages/Login/Login";
import { loggedIn } from "./services/PBservices";
function App() {
  const [location, navigate] = useLocation();

  return (
    <>
      <Switch>
        {loggedIn && (
          <Route path="/video/:collectionId/:id/:videoName" component={Video} />
        )}
        {loggedIn && <Route path="/" component={Home} />}
        {!loggedIn && (
          <>
            <Route path="/login" component={Login} />
            {loggedIn === false && navigate("/login")}{" "}
            {/* Redirige solo si loggedIn es falso */}
          </>
        )}
      </Switch>
    </>
  );
}

export default App;
