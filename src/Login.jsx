import axios from "axios";
import { useState } from "react";
import { Signup } from "./Signup";
import { Modal } from "./Modal";

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
    <div id="login">
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="text-center">
        <h3 className="color-white">Login</h3>
        <hr />
        <form className="myForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="color-white" for="exampleInputEmail1">
              Email address
            </label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="color-white" for="exampleInputPassword1">
              Password
            </label>
            <div className="input-group mb3">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={passwordInput}
                name="password"
                class="form-control"
                placeholder="Password"
              />
              <span class="btn btn-outline-primary" onClick={togglePassword} id="button-addon1">
                SHOW
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>{" "}
          <button onClick={handleSignupShow} className="btn btn-primary">
            Signup
          </button>
          {"    "}
          <button type="button" className="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup />
      </Modal>
    </div>
  );
}
