import "./App.css";

import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Signin from "./Components/pages/signin-signup/Signin.js";
import Signup from "./Components/pages/signin-signup/Signup.js";

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
