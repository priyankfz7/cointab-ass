import { Button, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  let email = localStorage.getItem("email") || "";
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <Heading align="center" mt="20px" mb="20px" size="lg">
        {`Hello 👋 ${email}`}
      </Heading>
      <Button
        backgroundColor="white"
        className="btn-hover"
        border="1px solid black"
        borderRadius={"0"}
        m="auto"
        display={"block"}
        onClick={logout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Home;
