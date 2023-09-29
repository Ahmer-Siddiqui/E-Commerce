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
            <div className="container-fluid">
                <div className="logo">
                  <img
                    src={require("../../../assets/img/logo.png")}
                    alt="logo"
                  />
                </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav mx-5" />
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
            </div>
          </Navbar>
        </>
      ) : (
          <Navbar expand="lg" className="bg-body-tertiary">
            <div className="container-fluid ">
                <div className="logo">
                  <img
                    src={require("../../../assets/img/logo.png")}
                    alt="logo"
                  />
                </div>

                <div className="d-flex">
                  <NavLink className="nav-link mx-2 mx-md-3 mx-lg-5" to="/signup">
                    Sign Up
                  </NavLink>
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </div>
            </div>
          </Navbar>
      )}
    </div>
  );
};

export default MainNav;
