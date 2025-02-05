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
import ThreadModal from "../components/ThreadModal";

const Thread = () => {
  const [comment, setComment] = useState("");
  const [threads, setThreads] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCreateThread = (newThreadContent) => {
    const newThread = {
      id: threads.length + 1,
      user: "Grey West",
      role: "Collaborator on GUARDZERO",
      avatar: "https://via.placeholder.com/40",
      content: newThreadContent,
      timestamp: new Date().toLocaleString(),
      upvotes: 0,
      replies: [],
    };
    setThreads([...threads, newThread]);
  };

  const handleSendComment = () => {
    if (!comment.trim()) return;
    setThreads((prevThreads) =>
      prevThreads.map((thread, index) =>
        index === prevThreads.length - 1
          ? { ...thread, replies: [...thread.replies, { text: comment, timestamp: new Date().toLocaleString() }] }
          : thread
      )
    );
    setComment("");
  };

  return (
    <Layout>
      <Box p={6} w="100%" maxW="800px" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" mb={4}>Threads</Text>

        {threads.length === 0 ? (
          <Flex direction="column" align="center" mt={20}>
            <FaPlus size={40} color="gray" />
            <Text fontSize="lg" mt={4}>Start a Thread</Text>
            <Text fontSize="sm" color="gray.500">You currently have no open threads</Text>
            <Button mt={4} color="white" bg="#1A1A1A" onClick={onOpen}>Start a Thread</Button>
            <ThreadModal isOpen={isOpen} onClose={onClose} onCreateThread={handleCreateThread} />
          </Flex>
        ) : (
          <VStack spacing={6} align="stretch" mt={6}>
            {threads.map((thread) => (
              <Box key={thread.id} p={4} borderRadius="md" boxShadow="sm" bg="white">
                <Flex align="center" gap={3}>
                  <Avatar src={thread.avatar} size="sm" />
                  <Box>
                    <Text fontWeight="bold" fontSize="sm">{thread.user}</Text>
                    <Text fontSize="xs" color="gray.500">{thread.role}</Text>
                  </Box>
                </Flex>
                <Text mt={3} fontSize="sm" color="gray.800">{thread.content}</Text>
                <Text fontSize="xs" color="gray.500" mt={2}>{thread.timestamp}</Text>

                <Flex mt={4} justify="space-between" align="center">
                  <Button size="sm" variant="ghost" leftIcon={<FaArrowUp />}>Upvote</Button>
                  <Button variant="outline" size="sm" leftIcon={<FaRegComment />}>Reply</Button>
                </Flex>

                {thread.replies.length > 0 && (
                  <VStack mt={3} align="start" spacing={2} pl={4} borderLeft="2px solid #E2E8F0">
                    {thread.replies.map((reply, idx) => (
                      <Box key={idx}>
                        <Text fontSize="sm">{reply.text}</Text>
                        <Text fontSize="xs" color="gray.500">{reply.timestamp}</Text>
                      </Box>
                    ))}
                  </VStack>
                )}
              </Box>
            ))}
          </VStack>
        )}

        {threads.length > 0 && (
          <>
            <Divider my={6} />
            <Flex mt={4} align="center" gap={3} p={4} bg="white" borderRadius="md" boxShadow="sm">
              <Avatar src="https://via.placeholder.com/40" size="sm" />
              <Textarea
                placeholder="Send a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                size="sm"
                borderRadius="md"
              />
              <Button colorScheme="blackAlpha" onClick={handleSendComment}>Send</Button>
            </Flex>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Thread;