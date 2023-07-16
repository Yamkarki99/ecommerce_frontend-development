import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signin from "./pages/signin-signup/Signin";
import Signup from "./pages/signin-signup/Signup";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Signin />} />

        {/* private Router */}
        <Route path="/new-admin" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
