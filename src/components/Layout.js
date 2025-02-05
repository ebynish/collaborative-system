import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from './Sidebar'; // Make sure the Sidebar is correctly imported

const Layout = ({ children }) => {
  return (
    <Flex minHeight="100vh">
      {/* Sidebar */}
      <Box
        width="250px"
        borderRight="1px solid #eaeaea"
        // p="4"
      >
        <Sidebar />
      </Box>

      {/* Main Content */}
      <Box flex="1" ml={10} bg="white">
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
