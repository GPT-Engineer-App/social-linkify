import { Container, Text, VStack, Link, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

// Custom theme to use Roboto Mono font
const theme = extendTheme({
  fonts: {
    heading: `'Roboto Mono', monospace`,
    body: `'Roboto Mono', monospace`,
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} align="start">
          <Heading as="h1" size="2xl">
            John Doe
          </Heading>
          <Text fontSize="lg">Full Stack Developer</Text>
          <Text fontSize="md">I build web applications with a focus on simplicity and performance. Passionate about open-source and community-driven projects.</Text>
          <VStack spacing={2} align="start">
            <Link href="https://github.com/johndoe" isExternal>
              <FaGithub /> GitHub
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <FaLinkedin /> LinkedIn
            </Link>
            <Link href="https://twitter.com/johndoe" isExternal>
              <FaTwitter /> Twitter
            </Link>
          </VStack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
