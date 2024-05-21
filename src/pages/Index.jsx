import { Container, VStack, HStack, Box, Text, Heading, Image, IconButton, Link, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="center">
        <Box boxSize="150px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTYzMTkyMjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
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
            <Heading as="h3" size="md">
              Project One
            </Heading>
            <Text mt={2}>A brief description of the project goes here. It can be a few sentences long.</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
            <Heading as="h3" size="md">
              Project Two
            </Heading>
            <Text mt={2}>A brief description of the project goes here. It can be a few sentences long.</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
            <Heading as="h3" size="md">
              Project Three
            </Heading>
            <Text mt={2}>A brief description of the project goes here. It can be a few sentences long.</Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
