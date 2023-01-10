import { LogoutLink } from "./Logout";
export function Header() {
  let authenticationLinks;
  if (localStorage.jwt !== undefined) {
    authenticationLinks = (
      <li className="nav-item">
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
          <a className="navbar-brand" href="/todos">
            Construction To Do
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
                <a className="nav-link active" aria-current="page" href="/todos">
                  Home
                </a>
              </li>
              {authenticationLinks}
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
                    <a className="dropdown-item" href="/todos/new">
                      Assign Tasks
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/employees">
                      Employees
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/employees/punchin">
                      Time Clock
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
