import "./Login.css";
import Input from "@mui/joy/Input";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import Button from "@mui/joy/Button";
import { styled } from "@mui/material/styles";
import { Link,useLocation } from "wouter";
import { useState } from "react";
import { pb } from "../../services/PBservices";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useLocation();
  const [error, setError] = useState("");

  
  async function handleSubmit(e) {
    e.preventDefault();
    try{
      await pb.collection("users").authWithPassword(email, password);

    }catch(e){

      setError("email o contraseña incorrectos")
    }
    if(pb.authStore.isValid){
      
      setLocation("/", { replace: true }); // `replaceState` is used
      console.log(location)
    }
  }

  const LoginButton = styled(Button)`
    background-color: #9ad642; /* Color de fondo personalizado */
    color: #ffffff;

    &:hover {
      text-shadow: #9ad642 0px 0px 34px;
      background-color: #9ad642;
    } /* Color del texto */
  `;
  return (
    <div className="loginPage">
      <div className="loginImages">
        <img
          src="https://cdn.dribbble.com/users/518045/screenshots/8226223/media/6f8c1ad7283595ffc225f59ffbf19e1f.png?compress=1&resize=800x600&vertical=top"
          alt=""
        />
      </div>
      <div className="login">
        <div className="loginForm">
          <form className="Form">
            <div className="textContainer">
              <h1>Welcome!</h1>
              <p>¡empieza a ver tu serie preferida ya!</p>
            </div>
            <p className="error">{error}</p>
            <Input
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
              required
              type="email"
              className="loginInput"
              startDecorator={<EmailIcon className="icon" />}
              sx={{
                "--Input-minHeight": "50px",
              }}
            />
            <Input
              onChange={(evt) => {
                setPassword(evt.target.value);
              }}
              required
              type="password"
              className="loginInput"
              startDecorator={<HttpsIcon className="icon" />}
              sx={{
                "--Input-minHeight": "50px",
              }}
            />
            <div className="recPassword">
              <Link href="#">
                <a className="active">Forgot passoword?</a>
              </Link>
            </div>
            <LoginButton
              type="submit"
              className="neonbutton"
              color="success"
              disabled={false}
              onClick={handleSubmit}
              size="lg"
              variant="solid"
            >
              Login
            </LoginButton>

            <div className="signUp">
              <p className="signUpText">don´t you have an account?</p>{" "}
              <Link href="#">
                <a className="active">Sign Up</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
