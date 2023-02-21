import axios from "axios";
import { useState } from "react";
import { Signup } from "./Signup";
import { Modal } from "./Modal";
import { render } from "react-dom";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };
  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/todos"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="background-home">
      <div className="text-center">
        <form className="myForm" onSubmit={handleSubmit}>
          <div className="card text-bg-dark" id="card-login">
            <h2>Login</h2>
            <br />
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <br />
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <div className="input-group mb3">
                <input
                  type={passwordType}
                  onChange={handlePasswordChange}
                  value={passwordInput}
                  name="password"
                  class="form-control"
                  placeholder="Password"
                />

                <span className="btn btn-outline-primary" onClick={togglePassword} id="button-addon1">
                  SHOW
                </span>
              </div>

              {errors.map((error) => (
                <div className="errors" key={error}>
                  {error}
                </div>
              ))}
            </div>
            <br />

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <br />
            <button onClick={handleSignupShow} className="btn btn-primary">
              Signup
            </button>
            <br />

            <button type="button" className="btn btn-primary">
              Forgot Password
            </button>
          </div>
        </form>
      </div>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
    </div>
  );
}
