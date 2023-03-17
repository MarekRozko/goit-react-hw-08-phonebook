import { NavLink } from "react-router-dom";

import styles from "./navbarAuth.module.scss";

import React from "react";
import { Box, Flex} from "rebass";

const NavbarAuth = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, #3a6186, #89253e)`,
        color: "white",
        px: [2, 3, 4],
        py: 2,
      }}
    >
          <Flex
            alignItems="center"
              justifyContent="flex-end"
            marginTop={30}
            sx={{ maxWidth: "1200px", mx: "auto" }}>
        <NavLink to="/register" className={styles.link} sx={{ fontSize: [2, 3, 4], mr: 3 }}>
          Register
        </NavLink>
        <NavLink to="/login" className={styles.link} sx={{ fontSize: [2, 3, 4] }}>
          Login
        </NavLink>
      </Flex>
    </Box>
  );
};

export default NavbarAuth;
