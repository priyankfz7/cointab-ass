import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Heading,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

const intUser = {
  email: "",
  password: "",
};

const SignUp = () => {
  const [user, setUser] = useState(intUser);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const signUp = async (user) => {
    try {
      let res = await fetch(`http://localhost:8080/users/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const status = res.status;
      res = await res.json();
      if (status >= 300) {
        alert(res.msg);
      } else {
        alert(res.msg);
        navigate("/login");
      }
    } catch (err) {
      alert("something went wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signUp(user);
  };
  return (
    <Box>
      <Box
        className="signup-form"
        my={9}
        m="auto"
        textAlign="left"
        color="white"
        w={["85%", "50%", "30%"]}
      >
        <Heading size="lg" mb="12px" textAlign="center">
          SignUp
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={user.email}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <Stack isInline justifyContent="space-between" mt={4}>
            <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box>
          </Stack>

          <Button width="full" mt={4} type="submit" backgroundColor={"#73A580"}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
