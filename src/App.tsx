// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./containers/Home";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/otp" element={<OTPVerification />} /> */}
      
    //   </Routes>
    <>
      <Home />
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
    </>
    // </Router>
  );
}

export default App;
