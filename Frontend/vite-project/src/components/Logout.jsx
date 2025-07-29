import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      setTimeout(() => {
        toast.success("Logout successfully", { duration: 3000 });
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        toast.error("error:" + error.message);
      }, 3000);
    }
    window.location.reload();
  };
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
