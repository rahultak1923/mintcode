import React from 'react';
import logo from './logo.png';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav class="navbar   navbar-expand-lg border-body navbar-r shadow" data-bs-theme="dark" style={{ background: "rgb(122, 54, 250)" }}>

{/* <nav className="navbar bg-dark navbar-expand-lg" style={{ background: "rgb(122, 54, 250)" }}> */}
      <div className="container-fluid container">
        <a className="navbar-brand" href="/">
          <img
            src={logo} // ✅ Correct path if stored in public/images/
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top logo"
          />
          
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
        <button className="btn btn-outline-light d-md-none me-2" onClick={onMenuClick}>
        <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ background: "#692cdf", border: "0.1px solid #ffffff75" }} />
            <button className="btn btn-outline-light" type="submit" ><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg><i className="bi bi-person-circle"></i></button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
