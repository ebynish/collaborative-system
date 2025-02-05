import { Box, Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box 
      position="absolute" 
      bottom={0} 
      width="95%" 
      p={4} 
      fontSize="sm" 
      color="gray.500"
    >
      <Flex justify="space-between" align="center">
        {/* Left Side */}
        <Box>
          <Text>© 2024 • Unnamed Project</Text>
        </Box>

        {/* Right Side */}
        <Box display="flex" gap={4}>
          <Link href="#">X (Twitter)</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">Privacy</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
