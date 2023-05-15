import "./SignUp.css";
import Input from "@mui/joy/Input";
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import Button from "@mui/joy/Button";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { pb } from "../../services/PBservices";

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [location, setLocation] = useLocation();
  const [error, setError] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState();
  async function handleSubmit(e) {
    e.preventDefault();

    if (password === passwordConfirm) {
      try {
        await pb.collection("users").create({
          email: email,
          emailVisibility: true,
          password: password,
          passwordConfirm: passwordConfirm,
          name: "test",
        });

        
        setLocation("/login", { replace: true });
        
        

      } catch (error) {
        if (error.isAbort) {
          setError("La solicitud fue abortada o cancelada.");
        } else if (error.status === 400) {
          // El error 400 se maneja aquí sin imprimir en la consola

          setError("Este usuario ya ha sido registrado");
        } else {
          console.log(error.status);
          setError(
            "Error en la creación del usuario. Por favor, inténtalo nuevamente."
          );
          console.log("Error de API:");
          console.log("URL:", error.url);
          console.log("Código de estado:", error.status);
          console.log("Respuesta de error:", error.response);
          console.log("Error original:", error.originalError);
        }
      }
    } else {
      setError("Las contraseñas no coinciden.");
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
              <p>SignUp</p>
            </div>
            <p className="error">{error}</p>
            <Input
              onChange={(evt) => {
                setEmail(evt.target.value);
              }}
              required
              placeholder="example@gmail.com"
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
              placeholder="password"
              required
              type="password"
              className="loginInput"
              startDecorator={<HttpsIcon className="icon" />}
              sx={{
                "--Input-minHeight": "50px",
              }}
            />
            <Input
              placeholder="confirm password"
              onChange={(evt) => {
                setPasswordConfirm(evt.target.value);
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
