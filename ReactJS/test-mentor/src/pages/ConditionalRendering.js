import React from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";

const ConditionalRendering = ({ isLogin, setIsLogin }) => {
  return (
    <div>
      {isLogin ? (
        <Login setIsLogin={setIsLogin} />
      ) : (
        <Logout setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default ConditionalRendering;
