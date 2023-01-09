import { useState } from "react";
import { LogoutLink } from "./Logout";
export function Header() {
  const [isSignupvisible, setIsSignupVisible] = useState(false);
  const [isLoginvisible, setIsLoginVisible] = useState(false);
  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };
  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };
  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };
  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li>
          <a className="nav-link" href="#" onClick={handleLoginShow}>
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" onClick={handleSignupShow}>
            Signup
          </a>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <li>
        <a className="nav-link" href="#login">
          <LogoutLink />
        </a>
      </li>
    );
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Construction Todos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">{authenticationLinks}</li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Signup
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tasks
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Assign Tasks
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
