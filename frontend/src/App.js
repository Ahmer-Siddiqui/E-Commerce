import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/container/header/Nav";
import Footer from "./components/container/footer/Footer";
import SignUp from "./components/container/signup/SignUp";
import PrivateComponent from "./components/privatecomponent/PrivateComponent";
import Login from "./components/container/login/Login";
import AddProduct from "./components/addproduct/AddProduct";
import ProductList from "./components/productlist/ProductList";
import UpdateProduct from "./components/updateproduct/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<PrivateComponent />}>
          <Route path="/" element={<ProductList/>} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct/>} />
          <Route path="/logout" element={<h1>Logout Product Component</h1>} />
          <Route path="/profile" element={<h1>Profile Product Component</h1>} />
        </Route>

        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
