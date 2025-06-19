import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Home from "./pages/Home";
import WebDevelopmentPage from "./pages/WebDevelopment";
import GraphicDesignPage from "./pages/GraphicDesign";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebDevelopmentPage />} />
        <Route path="/graphic" element={<GraphicDesignPage />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
