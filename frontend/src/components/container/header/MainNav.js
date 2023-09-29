import "./mainNav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/user/userSlice";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MainNav = () => {
  const dispatch = useDispatch();
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="navbar">
      {auth ? (
        <>
          {/* Boot Nav start */}
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <div className="logo">
                  <img
                    src={require("../../../assets/img/logo.png")}
                    alt="logo"
                  />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/">
                    Products
                  </NavLink>
                  <NavLink className="nav-link" to="/add">
                    Add Product
                  </NavLink>
                  <NavLink className="nav-link" to="/update/:id">
                    Update Product
                  </NavLink>
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                  <NavLink className="nav-link" to="/signup" onClick={onLogout}>
                    Logout ({JSON.parse(auth).name})
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <div className="logo">
                  <img
                    src={require("../../../assets/img/logo.png")}
                    alt="logo"
                  />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      )}
    </div>
  );
};

export default MainNav;
