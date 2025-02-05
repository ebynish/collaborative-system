import { Box, Button, Container, Flex, Heading, Link, Text, VStack, useDisclosure } from "@chakra-ui/react";
import LoginModal from "../components/LoginModal"; // Import the LoginModal component
import Footer from "../components/Footer";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Handle modal state

  return (
    <Box bg="white"  minH="100vh"  justifyContent="center" alignItems="center">
      <Box p={8} >
        
        <Flex justify="space-between" align="center" mb={12}>
          <Box w="30px" h="30px" bg="black" />
          <Flex gap={6}>
            <Link href="#" fontSize="md" color="gray.600">Home</Link>
            <Link href="#" fontSize="md" color="gray.600">About</Link>
            <Link href="#" fontSize="md" color="gray.600">Docs</Link>
          </Flex>
          <Flex gap={4}>
            <Button variant="outline" fontSize={"12px"} onClick={onOpen}>Log In</Button>
            <Button bg="#1A1A1A" color="white" fontSize={"12px"}>Sign Up</Button>
          </Flex>
        </Flex>

        
        <Flex height="50vh" justify="center" align="center">
            <VStack spacing={4} textAlign="center">
              <Text 
                fontSize="xs" 
                fontWeight="bold" 
                color="gray.500" 
                bg="gray.200" 
                px={3} 
                borderRadius="md"
              >
                PRIVATE ACCESS
              </Text>
              <Heading fontSize="2xl" fontWeight="bold">
                Knowledge Bank on the Blockchain
              </Heading>
              <Text fontSize="md" color="gray.600">
                Secure, private, and seamless collaboration starts here.
              </Text>
            </VStack>
      </Flex>

        
        <Footer />
      </Box>

      {/* Login Modal */}
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Home;
