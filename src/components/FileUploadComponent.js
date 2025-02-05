import React from "react";
import { Box, Text, Input, Switch, Flex, Icon, Button, Tag, TagLabel, TagCloseButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaLock, FaDownload, FaPlus, FaInfoCircle } from "react-icons/fa";

const FileUploadComponent = ({ handleDrop, handleDragOver, handleFileInput, tags, newTag, setNewTag, handleAddTag, handleRemoveTag, isPrivate, setIsPrivate, allowDownloads, setAllowDownloads }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Handle opening and closing of the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddTagFromModal = () => {
    handleAddTag();
    closeModal();
  };

  return (
    <Box width={550}>
      {/* File Upload Box */}
      <Box
        borderWidth="1px"
        borderStyle="dashed"
        borderRadius="lg"
        p={6}
        textAlign="center"
        cursor="pointer"
        _hover={{ bg: "gray.50" }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => document.getElementById("file-upload").click()}
      >
        <Icon as={FaCloudUploadAlt} boxSize={6} color="#1A1A1A" />
        <Text fontSize="sm" color="#A3A3A3">
          Drag and drop any files related
        </Text>
        <Text fontSize="sm" color="#1A1A1A" fontWeight="bold">
          or click here to upload
        </Text>
        <Input type="file" multiple onChange={handleFileInput} display="none" id="file-upload" />
      </Box>

      {/* File Access Section */}
      <Box mt={4}>
        <Text fontWeight="bold" my={2}>FILE ACCESS</Text>
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Icon as={FaLock} boxSize={4} color="gray.600" mr={2} />
            <Text fontSize="sm" fontWeight="bold" color={'#1A1A1A'}>
              MAKE PRIVATE
            </Text>
          </Flex>
          <Switch 
          colorScheme="blackAlpha"
            isChecked={isPrivate} 
            onChange={() => setIsPrivate(prev => !prev)} 
            
          />
        </Flex>
        <Text fontSize="xs" color="#A3A3A3" ml={6}>
          Only close collaborators can access
        </Text>

        <Flex align="center" justify="space-between" mt={3}>
          <Flex align="center">
            <Icon as={FaDownload} boxSize={4} color="gray.600" mr={2} />
            <Text fontSize="sm" fontWeight="bold" color={'#1A1A1A'}>
              ALLOW DOWNLOADS
            </Text>
          </Flex>
          <Switch
          colorScheme="blackAlpha" 
            
            isChecked={allowDownloads} 
            onChange={() => setAllowDownloads(prev => !prev)} 
          />
        </Flex>
        <Text fontSize="xs" color="#A3A3A3" ml={6}>
          Anyone with access can download
        </Text>
      </Box>

      {/* Tags Section */}
      <Box mt={4}>
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          ASSIGN TAGS
        </Text>
        <Flex gap={2} flexWrap="wrap">
          <Button mr={2} size="sm" borderRadius="full" color="#1A1A1A" outlineColor={"#DCDCDC"}  leftIcon={<FaPlus />} onClick={openModal} p={2}>
            Assign Tag
          </Button>
          {tags?.map((tag) => (
            <Tag key={tag} size="md" borderRadius="full" color="#1A1A1A" outlineColor={"#DCDCDC"} bg="white">
              <Icon as={FaInfoCircle} boxSize={3} mr={1} />
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => handleRemoveTag(tag)} />
            </Tag>
          ))}
        </Flex>
      </Box>

      {/* Modal for Tag Input */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assign a New Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              size="sm"
              placeholder="Enter a tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddTagFromModal()}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={closeModal}>Cancel</Button>
            <Button colorScheme="blue" onClick={handleAddTagFromModal}>Add Tag</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default FileUploadComponent;
