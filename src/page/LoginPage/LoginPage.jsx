import React from "react";
import { Box, Flex, Heading } from "rebass";
import { useDispatch } from "react-redux";
import LoginForm from "../../components/LoginForm/LoginForm";
import { login } from "../../redux/Auth/auth-operations";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(login(data));
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, #3a6186, #89253e)`,
        color: "white",
        py: [4, 5, 6],
        minHeight: "100vh",
      }}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        sx={{ maxWidth: "400px", mx: "auto" }}
      >
        <Heading mb={3} sx={{ textAlign: 'center', fontSize: [4, 5, 6], }}>
          Login
        </Heading>
        <LoginForm onSubmit={handleLogin} />
      </Flex>
    </Box>
  );
};

export default LoginPage;
