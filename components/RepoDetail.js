import Link from 'next/link'
import { Box, Text, Icon, Heading, Flex, HStack } from "@chakra-ui/react";
import { langColors } from "../utils";


const RepoDetail = ({ name, forks, size, stars, language, languages, href }) => {
  return (
    <Link href={href}>
      <a target="_blank" rel="noopener noreferrer">
        <Box w="100%">
          <Flex alignItems="center" mb={6}>
            <Icon
              boxSize={4}
              color="gray.500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M128 152v-32c0-4.4 3.6-8 8-8h208c4.4 0 8 3.6 8 8v32c0 4.4-3.6 8-8 8H136c-4.4 0-8-3.6-8-8zm8 88h208c4.4 0 8-3.6 8-8v-32c0-4.4-3.6-8-8-8H136c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm299.1 159.7c-4.2 13-4.2 51.6 0 64.6 7.3 1.4 12.9 7.9 12.9 15.7v16c0 8.8-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V80C0 35.8 35.8 0 80 0h352c8.8 0 16 7.2 16 16v368c0 7.8-5.5 14.2-12.9 15.7zm-41.1.3H80c-17.6 0-32 14.4-32 32 0 17.7 14.3 32 32 32h314c-2.7-17.3-2.7-46.7 0-64zm6-352H80c-17.7 0-32 14.3-32 32v278.7c9.8-4.3 20.6-6.7 32-6.7h320V48z"
              />
            </Icon>
            <Heading
              fontSize="sm"
              fontWeight="medium"
              ml={2}
              textTransform="lowercase"
              color="gray.700"
            >
              {name}
            </Heading>
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            mb={4}
          >
            <HStack spacing={4}>
              <Flex alignItems="center">
                <StarIcon />
                <Text color="gray.500" as="span" ml={1} fontSize="sm">
                  {stars}
                </Text>
              </Flex>
              <Flex alignItems="center">
                <GitIcon />
                <Text color="gray.500" as="span" ml={1} fontSize="sm">
                  {forks}
                </Text>
              </Flex>
            </HStack>
            <Flex alignItems="center">
              <Text color="gray.500" as="span" ml={1} fontSize="xs">
                {size} KB
              </Text>
            </Flex>
          </Flex>
          <Flex alignItems="center">
            <Icon
              boxSize={2}
              color="brand.400"
              style={{ color: langColors[language] }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
              />
            </Icon>

            <Text
              ml={1}
              as="span"
              color="gray.600"
              fontSize="xs"
              fontWeight="hairline"
            >
              {language}
            </Text>
          </Flex>
        </Box>
      </a>
    </Link>
  );
};

export default RepoDetail;

const StarIcon = () => {
  return (
    <Icon
      boxSize={4}
      color="gray.500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="currentColor"
        d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"
      />
    </Icon>
  );
};

const GitIcon = () => {
  return (
    <Icon
      color="gray.500"
      boxSize={4}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path
        fill="currentColor"
        d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.5 14-17.4 21.1-39.8 21.6-67.9 31.6-10.7 54.4-40.6 54.4-75.8zM80 48c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm0 416c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm224-288c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"
      />
    </Icon>
  );
};
