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

const Login = () => {
  const [user, setUser] = useState(intUser);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = async (user) => {
    try {
      let res = await fetch(`http://localhost:8080/users/login`, {
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
        localStorage.setItem("token", res.token);
        localStorage.setItem("email", user.email);
        navigate("/");
      }
    } catch (err) {
      alert("something went wrong");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <Box>
      <Box
        className="signup-form"
        my={8}
        m="auto"
        textAlign="left"
        color="white"
        w={["85%", "50%", "30%"]}
      >
        <Heading size="lg" mb="12px" textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Username or email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your email"
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
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
/**
 * email password
 */
