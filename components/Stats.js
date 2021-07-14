import React from "react";
import { Box, Text, Flex, Stack, Heading, Icon } from "@chakra-ui/react";

const Detail = ({ icon, text }) => {
  return (
    <Flex alignItems="center" mb={2}>
      <Box as="span" mr={2}>
        {icon}
      </Box>
      <Text>{text}</Text>
    </Flex>
  );
};

const Stats = () => {
  return (
    <Flex w="100%" py={4}>
      <Box w="25%">
        <Detail icon={<CalendarIcon />} text="Joined December, 2021" />
        <Detail icon={<BriefcaseIcon />} text="e-Government Authority" />
        <Detail icon={<ShieldIcon />} text="Available for hire" />
        <Detail icon={<LocationIcon />} text="Tanzania" />
      </Box>
      <Box w="75%">
        <Stack direction={["column", "row"]} spacing={8}>
          <Box
            textAlign="center"
            w="25%"
            py={6}
            px={5}
            shadow="md"
            borderWidth="1px"
          >
            <Heading mb={2} fontSize="xl">
              5
            </Heading>
            <Text>Following</Text>
          </Box>
          <Box
            textAlign="center"
            w="25%"
            py={6}
            px={5}
            shadow="md"
            borderWidth="1px"
          >
            <Heading mb={2} fontSize="xl">
              23
            </Heading>
            <Text>Followers</Text>
          </Box>
          <Box
            textAlign="center"
            w="25%"
            py={6}
            px={5}
            shadow="md"
            borderWidth="1px"
          >
            <Heading mb={2} fontSize="xl">
              23
            </Heading>
            <Text>Followers</Text>
          </Box>
          <Box
            textAlign="center"
            w="25%"
            py={6}
            px={5}
            shadow="md"
            borderWidth="1px"
          >
            <Heading mb={2} fontSize="xl">
              23
            </Heading>
            <Text>Followers</Text>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Stats;

const BriefcaseIcon = () => {
  return (
    <Icon
      color="brand.600"
      boxSize={5}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M464 128h-80V80c0-26.51-21.49-48-48-48H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM176 80h160v48H176V80zM54 176h404c3.31 0 6 2.69 6 6v74H48v-74c0-3.31 2.69-6 6-6zm404 256H54c-3.31 0-6-2.69-6-6V304h144v24c0 13.25 10.75 24 24 24h80c13.25 0 24-10.75 24-24v-24h144v122c0 3.31-2.69 6-6 6z"
      />
    </Icon>
  );
};

const LocationIcon = () => {
  return (
    <Icon
      color="brand.600"
      boxSize={5}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M192 0C85.903 0 0 86.014 0 192c0 71.117 23.991 93.341 151.271 297.424 18.785 30.119 62.694 30.083 81.457 0C360.075 285.234 384 263.103 384 192 384 85.903 297.986 0 192 0zm0 464C64.576 259.686 48 246.788 48 192c0-79.529 64.471-144 144-144s144 64.471 144 144c0 54.553-15.166 65.425-144 272zm-80-272c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80z"
      />
    </Icon>
  );
};

const CalendarIcon = () => {
  return (
    <Icon
      color="brand.600"
      boxSize={5}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M112 368h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V160h352v298z"
      />
    </Icon>
  );
};

const ShieldIcon = () => {
  return (
    <Icon
      color="brand.600"
      boxSize={5}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M163.2 230.5c-4.7-4.7-12.3-4.7-17-.1l-22.7 22.5c-4.7 4.7-4.7 12.3-.1 17l90.8 91.5c4.7 4.7 12.3 4.7 17 .1l172.6-171.2c4.7-4.7 4.7-12.3.1-17l-22.5-22.7c-4.7-4.7-12.3-4.7-17-.1L223 290.7zM466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256 464C158.5 423.4 64 297.3 64 128l192-80 192 80c0 173.8-98.4 297-192 336z"
      />
    </Icon>
  );
};
