import React from "react";
import { Box, Image } from "@chakra-ui/react";

const UserImage = () => {
  const user = {
    imageUrl: "https://avatars.githubusercontent.com/u/75541922?v=4",
    imageAlt: "User profile",
  };
  return (
    <Box borderWidth="1px" borderColor="white" mt={-24} mx={6}>
      <Image
        borderRadius="full"
        boxSize={48}
        src={user.imageUrl}
        alt={user.imageAlt}
      />
    </Box>
  );
};

export default UserImage;
