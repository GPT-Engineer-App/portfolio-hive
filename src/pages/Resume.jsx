import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" width="100%" p={4}>
        <Heading as="h1" size="2xl" mb={4}>
          Resume
        </Heading>
        <iframe src="/sample_resume.pdf" width="100%" height="600px" />
        <Button colorScheme="teal" size="lg" mt={4} as={Link} to="/">
          Back to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Resume;
