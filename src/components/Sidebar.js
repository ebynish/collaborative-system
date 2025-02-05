import { Box, VStack, Input, Button, HStack, IconButton, Divider, Text } from "@chakra-ui/react";
import { FiHome, FiFileText, FiInbox, FiUsers, FiSettings, FiHelpCircle, FiPlus, FiBook } from "react-icons/fi";
import { useLocation, Link } from "react-router-dom";

/* Sidebar Component */
const Sidebar = () => {
  const location = useLocation(); // Get current path

  return (
    <Box p="4" bg="white">
      <VStack align="stretch" spacing="4" mt={5}>
        {/* <Input placeholder="Search..." size="sm" /> */}
        <Button fontSize={"14px"} mt={5} leftIcon={<FiPlus />} bg={"#1A1A1A"} color={"white"}>
          Add New
        </Button>

        <VStack align="stretch" spacing="2" mt={35}>
          <NavItem icon={FiHome} label="Home" path="/dashboard" active={location.pathname === "/dashboard"} />
          <NavItem icon={FiFileText} label="Documents" path="/documents" active={location.pathname === "/documents"} />
          <NavItem icon={FiInbox} label="Inbox" path="/inbox" active={location.pathname === "/inbox"} />
          <NavItem icon={FiUsers} label="Collaborations" path="/collaborations" active={location.pathname === "/collaborations"} hasIndicator />
          <NavItem icon={FiUsers} label="Threads" path="/threads" active={location.pathname === "/threads"} />
        </VStack>

        <Divider />

      <Box mt={40}>
        <VStack align="stretch" spacing="2">
          <NavItem icon={FiSettings} label="Settings" path="/settings" active={location.pathname === "/settings"} />
          <NavItem icon={FiHelpCircle} label="Help" path="/help" active={location.pathname === "/help"} />
        </VStack>

        <Divider my={5}/>
        <VStack align="stretch" spacing="2">
          <NavItem icon={FiBook} label="Documentation" path="/documentation" active={location.pathname === "/documentation"} />
          
        </VStack>
      
        <Box p="3" borderRadius="md" bgGradient="linear(to-r, pink.500, purple.500)">
          <Text fontSize="sm" color="white">Kurosawa</Text>
        </Box>
      </Box>
      </VStack>
      </Box>
    
  );
};

/* Navigation Item Component */
const NavItem = ({ icon: Icon, label, path, active = false, hasIndicator = false }) => (
  <Link to={path}>
    <HStack
      // p="1"
      borderRadius="lg"
      bg={active ? "#EFEFEF" : "transparent"}
      _hover={{ bg: "#EFEFEF" }}
      cursor="pointer"
    >
      <IconButton icon={<Icon />} variant="ghost" size="sm" />
      <Text fontSize="sm">{label}</Text>
      {hasIndicator && <Box w="2" h="2" bg="green.400" borderRadius="full" />}
    </HStack>
  </Link>
);

export default Sidebar;
