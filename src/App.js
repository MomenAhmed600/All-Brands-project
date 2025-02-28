import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/customNavbar";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";
import MomenPage from "./components/MomenPage";
import CreateAccount from "./pages/CreateAcountPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./context/UserContext";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <CartProvider>
            <CustomNavbar />
            <Routes>
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile/:userId" element={<ProfilePage />} />
              <Route path="/" element={<MainContent />} />
              <Route path="/carts" element={<CartPage />} />
              <Route path="/products/:gender?" element={<ProductsPage />} />
              <Route path="/momenpage" element={<MomenPage />} />
            </Routes>
            <Footer />
          </CartProvider>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
