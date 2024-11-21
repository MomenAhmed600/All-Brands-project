import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CustomNavbar from "./components/customNavbar";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";
import MomenPage from "./components/MomenPage";
import CreateAccount from "./pages/CreateAcountPage";
import FavoritesPage from "./pages/FavoritesPage";
import LoginPage from "./pages/LoginPage";
// import ProductsPage from "./pages/ProductsPage";
import { UserProvider } from './context/UserContext';
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <>
    <UserProvider>
      <Router>
        
          <CustomNavbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/products/:gender?" element={<ProductsPage />} />
            <Route path="/momenpage" element={<MomenPage />} />
          </Routes>
          <Footer /> 
        
      </Router>
      </UserProvider>
    </>
  );
}

export default App;
