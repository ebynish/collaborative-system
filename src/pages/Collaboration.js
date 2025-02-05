import { useState } from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Flex,
  Avatar,
  Textarea,
  Divider,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowUp, FaRegComment, FaPlus } from "react-icons/fa";
import Layout from "../components/Layout";
import CollaborationModal from "../components/CollaborationModal";

const Collaboration = () => {
  const [comment, setComment] = useState("");
  const [collaborations, setCollaborations] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateCollaboration = (newContent) => {
    const newThread = {
      id: collaborations.length + 1,
      user: "Grey West",
      role: "Collaborator on GUARDZERO",
      avatar: "https://via.placeholder.com/40",
      content: newContent,
      timestamp: new Date().toLocaleString(),
      upvotes: 0,
      replies: [],
    };
    setCollaborations([...collaborations, newThread]);
  };

  return (
    <Layout>
      <Box p={6} w="100%" maxW="900px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold">Collaboration</Text>

        {collaborations.length === 0 ? (
          <Flex direction="column" align="center" mt={20}>
            <FaPlus size={40} color="gray" />
            <Text fontSize="lg" mt={4}>Start a Collaboration</Text>
            <Text fontSize="sm" color="gray.500">You currently have no open collaborations</Text>
            <Button mt={4} color="white" bg="#1A1A1A" onClick={onOpen}>Start Collaboration</Button>
            <CollaborationModal isOpen={isOpen} onClose={onClose} onCreate={handleCreateCollaboration} />
          </Flex>
        ) : (
          <VStack spacing={6} align="stretch" mt={6}>
            {collaborations.map((thread) => (
              <Box key={thread.id} p={4} border="1px solid #E2E8F0" borderRadius="md">
                <Flex align="center" gap={3}>
                  <Avatar src={thread.avatar} size="sm" />
                  <Box>
                    <Text fontWeight="bold">{thread.user}</Text>
                    <Text fontSize="sm" color="gray.500">{thread.role}</Text>
                  </Box>
                </Flex>
                <Text mt={3}>{thread.content}</Text>
                <Text fontSize="xs" color="gray.500" mt={2}>{thread.timestamp}</Text>
                <Flex mt={4} justify="space-between" align="center">
                  <IconButton aria-label="Upvote" icon={<FaArrowUp />} size="sm" />
                  <Button variant="ghost" size="sm" leftIcon={<FaRegComment />}>Reply</Button>
                </Flex>
              </Box>
            ))}
          </VStack>
        )}

        {collaborations.length > 0 && (
          <>
            <Divider my={6} />
            <Flex mt={4} align="center" gap={3}>
              <Avatar src="https://via.placeholder.com/40" size="sm" />
              <Textarea
                placeholder="Send a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                size="sm"
              />
              <Button colorScheme="blackAlpha" onClick={() => {}}>Send</Button>
            </Flex>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Collaboration;
