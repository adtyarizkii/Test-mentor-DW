import React from "react";
import { Button } from "react-bootstrap";

export default function Login({ setIsLogin }) {
  return (
    <>
      <h1 className="text-center">Anda telah login</h1>
      <div className="d-flex justify-content-center">
        <Button
          variant="primary"
          type="submit"
          onClick={() => setIsLogin(false)}
        >
          Logout
        </Button>
      </div>
    </>
  );
}
