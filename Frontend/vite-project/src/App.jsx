import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Course from "./components/Course";
import Home from "./home/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const [authUser, setAuthUser] = useAuth();
  // const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={authUser ? <Course /> : <Navigate to="/signup" />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<Navigate to="/signup" />} /> */}
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
