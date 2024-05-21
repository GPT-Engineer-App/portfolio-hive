import { Container, VStack, HStack, Box, Text, Heading, Image, IconButton, Link, Button, Flex } from "@chakra-ui/react";
import ColorModeToggle from "../components/ColorModeToggle";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Flex justify="flex-end" width="100%">
        <ColorModeToggle />
      </Flex>
      <VStack spacing={8} align="center" mt={4}>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Full Stack Developer with a passion for creating interactive applications and experiences on the web.
        </Text>
        <HStack spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </Link>
          <Link href="https://twitter.com/johndoe" isExternal>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </Link>
          <Link href="mailto:johndoe@example.com" isExternal>
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" />
          </Link>
        </HStack>
        <Button colorScheme="teal" size="lg">
          Download Resume
        </Button>
        <VStack spacing={4} align="start" width="100%">
          <Heading as="h2" size="lg">
            Projects
          </Heading>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
            <Image src="https://via.placeholder.com/150" alt="Project One" mb={4} />
            <Heading as="h3" size="md">
              Project One
            </Heading>
            <Text mt={2}>A brief description of the project goes here. It can be a few sentences long.</Text>
            <HStack mt={4} spacing={4}>
              <Link href="https://github.com/johndoe/project-one" isExternal>
                <Button colorScheme="teal" variant="outline">
                  GitHub
                </Button>
              </Link>
              <Link href="https://project-one-live.com" isExternal>
                <Button colorScheme="teal" variant="outline">
                  Live
                </Button>
              </Link>
            </HStack>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
            <Image src="https://via.placeholder.com/150" alt="Project Two" mb={4} />
            <Heading as="h3" size="md">
              Project Two
            </Heading>
            <Text mt={2}>A brief description of the project goes here. It can be a few sentences long.</Text>
            <HStack mt={4} spacing={4}>
              <Link href="https://github.com/johndoe/project-two" isExternal>
                <Button colorScheme="teal" variant="outline">
                  GitHub
                </Button>
              </Link>
              <Link href="https://project-two-live.com" isExternal>
                <Button colorScheme="teal" variant="outline">
                  Live
                </Button>
              </Link>
            </HStack>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
            <Image src="https://via.placeholder.com/150" alt="Project Three" mb={4} />
            <Heading as="h3" size="md">
              Project Three
            </Heading>
            <Text mt={2}>A brief description of the project goes here. It can be a few sentences long.</Text>
            <HStack mt={4} spacing={4}>
              <Link href="https://github.com/johndoe/project-three" isExternal>
                <Button colorScheme="teal" variant="outline">
                  GitHub
                </Button>
              </Link>
              <Link href="https://project-three-live.com" isExternal>
                <Button colorScheme="teal" variant="outline">
                  Live
                </Button>
              </Link>
            </HStack>
          </Box>
          <Heading as="h2" size="lg">
            Contact Me
          </Heading>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
            <Text mt={2}>Feel free to reach out to me for any inquiries or collaborations.</Text>
            <Button colorScheme="teal" size="lg" mt={4} as="a" href="mailto:johndoe@example.com">
              Send Me an Email
            </Button>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
