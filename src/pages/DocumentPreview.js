import { Box, Button, Flex, Switch, Text, VStack, Divider } from "@chakra-ui/react";
import Layout from "../components/Layout";

const DocumentPreview = () => {
  return (
    <Layout>
    <Flex p={6} w="100%" maxW="1200px" mx="auto">
      {/* Sidebar */}
      <Box w="300px" p={4} borderRight="1px solid #E2E8F0">
        <Text fontSize="xl" fontWeight="bold">Documents</Text>
        <VStack spacing={4} align="stretch" mt={6}>
          <Box>
            <Text fontSize="sm" color="gray.500">DOCUMENT</Text>
            <Text fontWeight="bold">AERODROME</Text>
            <Text fontSize="sm" color="gray.600">Understanding the aerodrome space</Text>
          </Box>
          <Divider />
          <Box>
            <Text fontSize="sm" color="gray.500">EDIT</Text>
            <Button w="full" size="sm">Invite Collaborators</Button>
            <Text mt={2} fontSize="sm">0</Text>
            <Button mt={2} w="full" size="sm">Add Note</Button>
          </Box>
          <Divider />
          <Box>
            <Text fontSize="sm" color="gray.500">DOCUMENT SETTINGS</Text>
            <Flex justify="space-between" align="center">
              <Text fontSize="sm">PRIVATE</Text>
              <Switch />
            </Flex>
            <Flex justify="space-between" align="center" mt={2}>
              <Text fontSize="sm">DOWNLOADS</Text>
              <Switch />
            </Flex>
          </Box>
          <Button colorScheme="blackAlpha" w="full">Publish Document</Button>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={6}>
        <Text fontSize="xl" fontWeight="bold">AERODROME</Text>
        <Text fontSize="sm" color="gray.600">Understanding the aerodrome space</Text>
        <Text fontSize="xs" color="gray.500">Uploaded 30s ago</Text>
        <Divider my={4} />

        {/* Document Content */}
        <Text fontSize="md" lineHeight="1.6">
          <b>Understanding Aerodromes in Crypto</b>
          <br />
          <b>Definition of a Crypto Aerodrome</b>
          <br />
          In the context of cryptocurrency, a "crypto aerodrome" can be thought of as a virtual hub where transactions, asset management, and blockchain interactions occur. These hubs facilitate secure, decentralized exchanges of value, fostering collaboration and innovation in the crypto ecosystem.
          <br /><br />
          <b>Types of Crypto Aerodromes</b>
          <br />
          Crypto aerodromes vary based on their purpose and scale. Key types include:
          <ol>
            <li>Decentralized Exchanges (DEXs): Platforms for peer-to-peer trading without intermediaries.</li>
            <li>Centralized Exchanges (CEXs): Traditional exchanges offering high liquidity and user-friendly interfaces.</li>
            <li>DeFi Platforms: Decentralized finance ecosystems for lending, staking, and yield farming.</li>
            <li>Crypto Wallets: Digital storage solutions for cryptocurrencies and private keys.</li>
            <li>Blockchain Nodes: Essential infrastructure for maintaining and validating blockchain networks.</li>
          </ol>
          <br />
          <b>Components of a Crypto Aerodrome</b>
          <br />
          A crypto aerodrome typically includes the following key components:
          <ul>
            <li>Smart Contracts: Automated agreements facilitating transactions.</li>
            <li>Liquidity Pools: Funds provided by users for seamless trading and lending.</li>
            <li>Wallet Integration: Securely connecting user wallets for transactions.</li>
            <li>Data Feeds (Oracles): Providing real-world information to smart contracts.</li>
            <li>Governance Mechanisms: Allowing users to vote on platform changes and updates.</li>
            <li>User Interfaces (UI): Simplified dashboards for monitoring and managing assets.</li>
            <li>Security Protocols: Ensuring the safety of funds and data.</li>
          </ul>
        </Text>
      </Box>
    </Flex>
    </Layout>
  );
};

export default DocumentPreview;
