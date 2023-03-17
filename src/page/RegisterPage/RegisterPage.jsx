
import { Box, Heading } from 'rebass';
import { useDispatch } from 'react-redux';
import RegisterForm from '../../components/RegisrerForm/RegisterForm';
import { signup } from 'redux/Auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = (data) => {
    dispatch(signup(data));
  };

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, #3a6186, #89253e)`,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
              alignItems: 'center',
       
      }}
    >
      <Box
        sx={{
            color: "white",
            py: [4, 5, 6],
            borderColor: "white",
             marginBottom: 150,
        }}
      >
        <Heading mb={3} sx={{ textAlign: 'center', fontSize: [4, 5, 6], }}>
          Registration
        </Heading>
        <RegisterForm onSubmit={handleSignup} />
      </Box>
    </Box>
  );
};

export default RegisterPage;
