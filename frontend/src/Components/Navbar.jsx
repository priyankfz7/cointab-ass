import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      justify="space-between"
      p="10px 20px 10px 20px"
      borderBottom={"1px solid gainsboro"}
    >
      <Box fontSize="28px" fontWeight="bold" color="#73A580">
        <Link to="/">
          <Text className="logo">Cointab Assignment</Text>
        </Link>
      </Box>
      <Box>
        <Button
          backgroundColor="white"
          className="btn-hover"
          color="#3E363F"
          mr="12px"
        >
          <Link to="/login">Login</Link>
        </Button>

        <Button
          backgroundColor="#3E363F"
          className="btn-hover"
          color="white"
          mr="12px"
        >
          <Link to="/signup">Signup</Link>
        </Button>
      </Box>
    </HStack>
  );
};

export default Navbar;
