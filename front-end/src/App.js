import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<h1>Product Listing Component</h1>} />
        <Route path='/add' element={<h1>Add Product  Component</h1>} />
        <Route path='/update' element={<h1>Update Product  Component</h1>} />
        <Route path='/logout' element={<h1>Logout Product  Component</h1>} />
        <Route path='/profile' element={<h1>Profile Product  Component</h1>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
