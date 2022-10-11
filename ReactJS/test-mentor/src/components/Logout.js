import React from "react";
import { Button } from "react-bootstrap";

export default function Logout({ setIsLogin }) {
  return (
    <>
      <h1 className="text-center">Silahkan Login</h1>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          type="submit"
          onClick={() => setIsLogin(true)}
        >
          Login
        </Button>
      </div>
    </>
  );
}
