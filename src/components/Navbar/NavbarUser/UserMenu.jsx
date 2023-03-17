import { useSelector, useDispatch } from "react-redux";
import { logout } from "redux/Auth/auth-operations";
import { getUser } from "redux/Auth/auth-selectors";
import styles from "../NavbarUser/navbar-user.module.scss"
import { Box, Button } from 'rebass';

export const UserMenu = () => {
  const { email } = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, #3a6186, #89253e)`,
        color: "white",
        px: [2, 3, 4],
        py: 2,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "baseline",
        
      }}
    >
      <Box fontWeight="bold">{email}</Box>
      <Button
        className={styles.btn}
        variant="secondary"
        mr={2}
        onClick={handleLogout}
        marginLeft={30}
        backgroundColor="rgb(33, 92, 182)"
      >
        Logout
      </Button>
    </Box>
  );
};
