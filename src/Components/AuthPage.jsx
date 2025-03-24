import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isRegister ? (
        <Register onToggle={toggleForm} />
      ) : (
        <Login onToggle={toggleForm} />
      )}
    </div>
  );
};

export default AuthPage;
