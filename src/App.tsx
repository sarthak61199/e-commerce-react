import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Layout from "./components/Layout";

import { Toaster } from "@/components/ui/sonner";

import "@smastrom/react-rating/style.css";
import PersistLogin from "./components/PersistLogin";
import RequireAuth from "./components/RequireAuth";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PersistLogin />}>
            <Route path="/" index element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route element={<RequireAuth />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/success" element={<Success />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
