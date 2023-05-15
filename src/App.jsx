import "./App.css";
import { Route, useLocation, Switch } from "wouter";
import Home from "./pages/Home/Home";
import Video from "./pages/VideoPlay/VideoPlay";
import Login from "./pages/Login/Login";
import { loggedIn } from "./services/PBservices";
import SignUp from "./pages/SignUp/SignUp"
function App() {
  const [location, navigate] = useLocation();

  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp}  />
        {loggedIn && (
          <Route
            path="/video/:collectionId/:id/:videoName"
            component={Video}
            
          />
        )}
        
        {loggedIn && <Route path="/" component={Home} />}
        {!loggedIn && navigate("/login", { replace: true })} {/* Redirige si no está logueado */}
      </Switch>
    </>
  );
}

export default App;
