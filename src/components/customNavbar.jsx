import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsCart, BsFillPersonFill, BsSearch } from "react-icons/bs";
// import { NavDropdown } from "react-bootstrap";
import { useUser } from "../context/UserContext";

function CustomNavbar() {
  const { user, setUser } = useUser();
  const [show, setShow] = useState(false);


  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <div className="img-logo">
            <img
              src="brand logo.png"
              className="d-inline-block align-top logo"
              alt="Logo"
            />
          </div>
          <span className="ms-2">Brands</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/products">
            Products
          </Nav.Link>
        </Nav>
        <Nav className="me-2">
          <Nav.Link href="#login">
            <BsSearch />
          </Nav.Link>

          {user ? (
            <>
              <Nav.Link as={Link} to={`/profile/${user.id}`}>
                <img
                  src={user.profileImage}
                  alt={user.firstName}
                  className="rounded-circle"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "5px",
                    border: " 2px solid #48cb57",
                  }}
                />
                <span>{user.firstName}</span>
              </Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <Nav.Link as={Link} to="login">
              <BsFillPersonFill />
            </Nav.Link>
          )}

          <Nav.Link as={Link} to="/carts">
            <BsCart />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
