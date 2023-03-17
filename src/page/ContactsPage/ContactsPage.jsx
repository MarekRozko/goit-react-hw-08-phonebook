import { Box } from "rebass";
import Phonebook from "components/Phonebook/Phonebook";



const ContactsPage = () => {
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
      <Box
        sx={{
          p: 4,
          borderRadius: 8,
            width: "100%",
        backgroundImage: `linear-gradient(to right, #3a6186, #89253e)`,
          
        }}
      >
        <Phonebook />
      </Box>
    </Box>
  );
};

export default ContactsPage;
