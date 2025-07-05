import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import WebDevelopmentPage from "./pages/WebDevelopment";
import GraphicDesignPage from "./pages/GraphicDesign";
import SeoPage from "./pages/Seo";
import DigitalMarketingPage from "./pages/DigitalMarketing";
import ErpSolutionsPage from "./pages/ErpSolutions";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<WebDevelopmentPage />} />
        <Route path="/graphic" element={<GraphicDesignPage />} />
        <Route path="/seo" element={<SeoPage />} />
        <Route path="/digital" element={<DigitalMarketingPage />} />
        <Route path="/erp" element={<ErpSolutionsPage />} />
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
