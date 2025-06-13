import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./containers/Home";
import Layout from "./components/Layout";
import WebDevelopmentPage from "./pages/WebDevelopment";
import GraphicDesignPage from "./pages/GraphicDesign";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;
