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
  Flex,
  Select,
  Checkbox,
  useDisclosure,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { FiGlobe } from "react-icons/fi";
import { FaFilePdf } from "react-icons/fa";

const CollaborationModal = ({ isOpen, onClose, onInvite, documents = [] }) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Researcher");

  const handleInvite = () => {
    if (email) {
      onInvite({ email, role });
      setEmail("");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="lg" p={4}>
        <ModalHeader>Invite</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="sm" color="gray.600" mb={3}>
            Invite Collaborators as Validators, Researchers, or Co-writers on Documents.
          </Text>

          <Flex gap={2}>
            <Input
              placeholder="Email or wallet"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Select value={role} onChange={(e) => setRole(e.target.value)} w="40%">
              <option value="Researcher">Researcher</option>
              <option value="Validator">Validator</option>
              <option value="Co-writer">Co-writer</option>
            </Select>
            <Button colorScheme="blackAlpha" onClick={handleInvite}>
              Share
            </Button>
          </Flex>

          <Text mt={4} fontWeight="bold">
            People on this project
          </Text>

          <VStack align="start" spacing={3} mt={3}>
            <Flex align="center" gap={3}>
              <Avatar name="Samuel Sancho" size="sm" />
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">Samuel Sancho (You)</Text>
                <Text fontSize="sm" color="gray.500">samuelsancho@gmail.com</Text>
              </VStack>
              <Text fontSize="xs" color="gray.500" ml="auto">Owner</Text>
            </Flex>
          </VStack>

          <Text mt={4} fontWeight="bold">
            Documents
          </Text>

          <VStack align="start" spacing={4} mt={3}>
            {documents.map((document, index) => (
              <Flex key={index} align="center" bg="#F6F6F6" p={2} borderRadius="md" w="full">
                <IconButton
                  icon={<FaFilePdf size={20} />}
                  aria-label={`Document ${index + 1}`}
                  variant="outline"
                  colorScheme="gray"
                  mr={3}
                />
                <Text flex="1">{document.name}</Text>
                <Badge bg="#E7E7E7" color="#9C9C9C">{document.label}</Badge>
              </Flex>
            ))}
          </VStack>

          <Flex align="center" mt={4}>
            <IconButton
              icon={<FiGlobe />}
              aria-label="Anyone with the link"
              variant="ghost"
              size="sm"
            />
            <Checkbox colorScheme="blackAlpha">Anyone with the link</Checkbox>
            <Button
              size="sm"
              variant="outline"
              ml="auto"
              onClick={() => navigator.clipboard.writeText("Copied link!")}
            >
              Copy Link
            </Button>
            <Select size="sm" value={role} onChange={(e) => setRole(e.target.value)} w="auto" ml={2}>
              <option value="Researcher">Researcher</option>
              <option value="Validator">Validator</option>
              <option value="Co-writer">Co-writer</option>
            </Select>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blackAlpha" onClick={onClose}>
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default CollaborationModal;
