import React from 'react';
import {  Box,Flex, HStack, Text, Button, Grid, Divider, VStack, Textarea, Input } from '@chakra-ui/react';
import StatCard from '../components/StatCard';
import { Link } from 'react-router-dom';
import OverviewChart from '../components/OverviewChart';
import Layout from '../components/Layout';
import { FiPaperclip } from 'react-icons/fi';
function Dashboard() {
  return (

      <Layout>
      <Box  p={4}>
        {/* Header */}
        <HStack justify="space-between">
          <Text fontSize="18px" fontWeight="600">
            Overview
          </Text>
          <HStack>
            
            <Link to={"/document"} p={2}>
            <Button fontSize="12px" bg={"#1A1A1A"} color={"white"} p={2}>
              Add document
            </Button>
            </Link>
          </HStack>
        </HStack>

        {/* Graph Section */}
        <Box p="6" bg="white" borderRadius="md" boxShadow="sm">
          {/* <LineChart /> */}
          <OverviewChart />
        </Box>

        {/* Stats Section */}
        <Grid templateColumns="repeat(5, 1fr)" gap={4} mt="6">
          <StatCard title="TOTAL DOCUMENTS" value="540" />
          <StatCard title="NEW DOCUMENTS" value="12" />
          <StatCard title="DOCUMENTS IN REVIEW" value="4" />
          <StatCard title="ALL NODES" value="19" badge badgeLabel="Active" badgeColor="green" extra="5" />
          <StatCard title="NODE SPEED" value="1029ms" />
    </Grid>

        {/* Divider */}
        <Divider my="6" />

        {/* Documents & Actions Section */}
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {/* File Upload */}
      <Box p="4" bg="white" borderRadius="md" boxShadow="sm" textAlign="center">
        <Text fontSize="sm" mb="2">
          DOCUMENTS
        </Text>
        <VStack border="2px dashed gray" p="6" borderRadius="md">
          <Text fontSize="xs" color="gray.600">
            Drag and drop any files or <u>click here to upload</u>
          </Text>
        </VStack>
      </Box>

      {/* Notes */}
      <Box p="4" bg="white" borderRadius="md" boxShadow="sm">
      <Flex justify="space-between" align="center">
        <Text fontSize="sm" mb="2">
          Notes
        </Text>
        <FiPaperclip />
      </Flex>
      <Textarea placeholder="You can write any notes here" fontSize={11} />
    </Box>

      {/* Chat Section */}
      <Box p="4" bg="white" borderRadius="md" boxShadow="sm">
        <Text fontSize="12px" mb="2">
          MICHAEL K.
        </Text>
        <Button bg="#F6F6F6" mb="2" p={2} fontSize={"11px"}>
          Send a message to a collaborator
        </Button>
        <Divider my={2}/>
        <Input placeholder="Type a message" fontSize={11} />
      </Box>
    </Grid>
      </Box>
      </Layout>
    
  );
}

export default Dashboard;