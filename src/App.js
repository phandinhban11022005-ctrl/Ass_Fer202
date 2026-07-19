import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./App.css";

// LO7: Main Feature page is lazy-loaded with React.lazy + Suspense so its
// code (and the data-fetching logic inside it) is only downloaded when the
// user actually navigates to /feature.
const MainFeature = lazy(() => import("./pages/MainFeature"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const EditProduct = lazy(() => import("./pages/EditProduct"));

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <main className="app-main">
        {/* LO5: React Router with the 3 required routes: /, /feature, /about
            plus two nested feature routes for product detail & edit. */}
        <Suspense fallback={<Loader label="Loading page..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feature" element={<MainFeature />} />
            <Route path="/feature/:id" element={<ProductDetail />} />
            <Route path="/feature/:id/edit" element={<EditProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <footer className="app-footer text-center py-3">
        <small>
          FER202 &middot; Custom React Web Application &middot; Product
          Explorer &copy; {new Date().getFullYear()}
        </small>
      </footer>
    </BrowserRouter>
  );
}

export default App;
