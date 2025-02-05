import React, { useState } from 'react';
import { Box, Text, Flex, VStack, HStack, Button, Input, Icon, IconButton, Badge, useToast } from '@chakra-ui/react';
import CustomQuill from '../components/CustomQuill'; // Import the custom Quill component
import Layout from '../components/Layout';
import FileUploadComponent from '../components/FileUploadComponent';
import { FaFilePdf } from "react-icons/fa";

const documents = [
  { name: "Guardzero_2024-01-23", label: "Record" },
  { name: "ProjectReport_2024-01-15", label: "Report" },
  { name: "Invoice_2024-02-01", label: "Invoice" }
];
function Documents() {
  const [content, setContent] = useState(''); // State for text editor content
    const [tags, setTags] = useState([]); // State for tags
  const [newTag, setNewTag] = useState(''); // State for new tag input
  const [files, setFiles] = useState([]); // State for uploaded files
  const toast = useToast(); // For showing notifications
  const [isPrivate, setIsPrivate] = useState(false); // Manage private setting
  const [allowDownloads, setAllowDownloads] = useState(true); // Manage download setting

  // Functions to handle state changes
  const handleSetIsPrivate = (value) => {
    setIsPrivate(value);
  };

  const handleSetAllowDownloads = (value) => {
    setAllowDownloads(value);
  };

  // Function to handle tag addition
  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };
  // function to handle submit
  const handleSubmit = () =>{

  }

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // Function to handle file upload via input
  const handleFileInput = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
    toast({
      title: 'Files uploaded successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // Function to handle file drop
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
    toast({
      title: 'Files dropped successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  // Function to prevent default behavior for drag over
  const handleDragOver = (event) => {
    event.preventDefault();
  };


  return (
    <Layout>
      <Box p={4} >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          Documents
        </Text>
      <Box p={4} justifyContent={'center'} justifyItems={'center'} width={"100%"}>
       
       
        {/* Text Editor for Content Creation */}
        <Box mb={6} width={800}>
          <Text fontWeight="bold" mb={2}>
            Create Content
          </Text>
          <Input name="title" placeholder="Enter document title" mb={2} />
          <CustomQuill value={content} onChange={setContent} />
        </Box>
        <FileUploadComponent
          handleDrop={handleDrop} // Handle drop logic
          handleDragOver={handleDragOver} // Handle drag logic
          handleFileInput={handleFileInput} // Handle file upload
          tags={tags}
          newTag={newTag}
          setNewTag={setNewTag}
          handleAddTag={handleAddTag}
          handleRemoveTag={handleRemoveTag}
          isPrivate={isPrivate}
          setIsPrivate={handleSetIsPrivate}
          allowDownloads={allowDownloads}
          setAllowDownloads={handleSetAllowDownloads}
        />

  {/* Display Uploaded Files */}
  {files.length > 0 && (
        <Box mt={4} width={349}>
          <Text fontWeight="bold">Uploaded Files:</Text>
          <VStack align="start" spacing={2} mt={2}>
            {files.map((file, index) => (
              <Text key={index} fontSize="sm">
                {file.name}
              </Text>
            ))}
          </VStack>
        </Box>
      )}
  

        {/* Action Buttons */}
        <HStack spacing={4} mt={4}>
        
          <Button bg="#D8FF80" color="#1A1A1A" onClick={handleSubmit}>Submit</Button>
        </HStack>

        {/* Previously Uploaded Files Section */}
        <Box mt={8} width={550}>
          <Text fontWeight="bold" mb={4}>
            PREVIOUSLY UPLOADED
          </Text>
          <VStack align="start" spacing={4}>
            {documents.map((document, index) => (
               <VStack key={index} align="start" spacing={1} bg="#F6F6F6" p={2} width={500}>
               <Flex justify="space-between" w="full" align="center">
                 <IconButton
                   icon={<Icon as={FaFilePdf} boxSize={5} />}
                   aria-label={`Document ${index + 1}`}
                   variant="outline"
                   colorScheme="gray"
                 />
                 <Text ml={3}>
                   {document.name}
                 </Text>
                 <Badge bg="#E7E7E7" color="#9C9C9C" ml="auto">{document.label}</Badge>
               </Flex>
             </VStack>
            ))}
          </VStack>
          <Button mt={4} variant="link" color="#9C9C9C" fontSize={12}>
            View All
          </Button>
        </Box>
      </Box>
      </Box>
    </Layout>
  );
}

export default Documents;