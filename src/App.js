import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Books from "./components/books/Books";
import NotFound from "./features/notfound/NotFound";
import Pens from "./components/pens/Pens";
import Pencils from "./components/pencils/Pencils";
import Others from "./components/others/Others";
import Aboutus from "./components/aboutus/Aboutus";
import Account from "./features/account/Account";
import Cart from "./features/cart/Cart";
import Policy from "./features/policy/Policy";
import Terms from "./features/terms/Terms";
import Login from "./features/login/Login";
import Signup from "./features/signup/Signup";
import Itemdetail from "./features/itemdetail/Itemdetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/books" element={<Books />}></Route>
          <Route path="/pens" element={<Pens />}></Route>
          <Route path="/pencils" element={<Pencils />}></Route>
          <Route path="/others" element={<Others />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/account/login" element={<Login />}></Route>
          <Route path="/account/signup" element={<Signup />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/itemdetail" element={<Itemdetail />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
