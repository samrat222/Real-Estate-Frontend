import Cart from "./pages/Cart";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FilterPage from "./pages/FilterPage";
import { useSelector } from "react-redux";

function App() {
  const user = false;
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/filter/:cat" element={<FilterPage />} />
          <Route
            path="/login"
            element={user ? <Navigate replace to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={user ? <Navigate replace to="/" /> : <Register />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
