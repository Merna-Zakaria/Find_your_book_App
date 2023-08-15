import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function BasicExample() {
  const { user, logout } = useAuth();
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" width={80} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="px-2">
              Home
            </Link>
           { user?.userName && <Link to="/profile" className="px-2">
              Profile
            </Link>}
            <Link to="/about" className="px-2">
              About
            </Link>
          </Nav>
          {!user?.userName && (
            <Link to="/login">
              <button type="button" className="btn btn-info">
                Login
              </button>
            </Link>
          )}
          {user?.userName && (
            <>
              <span className="px-2 ">{user.userName}</span>
              <Link to="/">
                <button type="button" className="btn logoutBtn" onClick={logout}>
                  Logout
                </button>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
