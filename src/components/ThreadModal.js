import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  Text,
  VStack,
  Avatar,
  Checkbox,
  Flex,
  Select
} from "@chakra-ui/react";

const ThreadModal = ({ isOpen, onClose, onCreateThread }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Researcher");

  const handleInvite = () => {
    console.log(`Invited: ${email} as ${role}`);
  };

  const handleCreateThread = () => {
    onCreateThread(); // Callback to create a thread in the main component
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="lg" p={4}>
        <ModalHeader>Threads</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb={2}>
            Start a thread with fellow collaborators and researchers
          </Text>

          <Flex gap={2}>
            <Input
              placeholder="Email or wallet"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button colorScheme="blackAlpha" onClick={handleInvite}>
              Invite
            </Button>
          </Flex>

          <Text mt={4} fontWeight="bold">
            People on this project
          </Text>

          <VStack align="start" spacing={2} mt={2}>
            <Flex align="center" gap={2}>
              <Avatar name="Sarwati Sawicka" size="sm" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">Sarwati Sawicka</Text>
                <Text fontSize="sm" color="gray.500">Owner</Text>
              </VStack>
            </Flex>
          </VStack>

          <Checkbox mt={4}>Anyone with the link</Checkbox>

          <Flex mt={4} justify="space-between">
            <Button variant="outline" onClick={() => navigator.clipboard.writeText("Thread link copied!")}>
              Copy Link
            </Button>
            <Select value={role} onChange={(e) => setRole(e.target.value)} w="auto">
              <option value="Researcher">Researcher</option>
              <option value="Collaborator">Collaborator</option>
            </Select>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blackAlpha" onClick={handleCreateThread}>
            Start Thread
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ThreadModal;
