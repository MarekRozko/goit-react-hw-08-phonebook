import React from "react";
import { Box, Heading } from "rebass";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, #3a6186, #89253e)`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading
        as="h1"
        fontSize={[4, 5, 6]}
        color="white"
        textAlign="center"
        px={[2, 3, 4]}
        py={[3, 4, 5]}
        bg="rgba(0,0,0,0.5)"
        borderRadius="default"
      >
        Welcome to the application Phonebook!
      </Heading>
    </Box>
  );
};

export default HomePage;
