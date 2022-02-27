import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useHistory } from "react-router";

const Login = () => {
  const [body, setBody] = useState({ username: "", password: "" });
  const { push } = useHistory();

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setBody({
      ...body,
      [name]: value,
    });
  };

  const submitLogin = () => {
    axios
      .post("http://fk-pqrsd.siipc.co/login", body)
      .then(({ data }) => {
        localStorage.setItem("auth", '"yes"');
        push("/admin");
      })
      .catch(({ response }) => {
        console.log(response.data);
      });
  };

  return (
    <>
      <div className="root-container">
        <div className="box-container">
          <div className="inner-container">
            <div className="header">Acceso</div>
            <div className="box">
              <div className="input-group">
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  value={body.username}
                  onChange={inputChange}
                  name="username"
                  className="login-input"
                  placeholder="Ingrese usuario"
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  value={body.password}
                  onChange={inputChange}
                  name="password"
                  className="login-input"
                  placeholder="Ingrese contraseña"
                />
              </div>

              <button type="button" className="login-btn" onClick={submitLogin}>
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
