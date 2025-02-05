import { 
    Box, Button, Input, InputGroup, Modal, ModalBody, ModalCloseButton, 
    ModalContent, ModalHeader, ModalOverlay, VStack, HStack, IconButton, Text, Flex
  } from "@chakra-ui/react";
  import { FaGoogle, FaApple, FaGithub, FaXTwitter, FaDiscord, FaArrowRight, FaArrowLeft, FaChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
  import { useState } from "react";
import { Link } from "react-router-dom";
  
  // Wallet options
  const wallets = [
    { name: "MetaMask", icon: "/image/metamask.svg" },
    { name: "Phantom", icon: "/image/phantom.svg" },
    { name: "Coinbase Wallet", icon: "/image/coinbase.svg" },
    { name: "Other Wallets", icon: "#" },
  ];
  
  const LoginModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState("email"); // Manage steps
    const [email, setEmail] = useState("");
    const [code, setCode] = useState(["", "", "", "", ""]); // 5-digit code
  
    const handleEmailSubmit = () => {
      if (email) setStep("code");
    };
  
    const handleWalletConnect = () => {
      setStep("wallets");
    };
  
    const handleCodeChange = (index, value) => {
      if (/^\d?$/.test(value)) { // Allow only digits
        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
      }
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered width={"320px"}>
        <ModalOverlay />
        <ModalContent p={4} borderRadius="25px" bg="white" width={"320px"}>
          <ModalCloseButton />
  
          {/* Login with Email Step */}
          {step === "email" && (
            <>
              <ModalHeader fontSize={"15px"} mt={"-10px"}>Sign In</ModalHeader>
              <ModalBody >
                <VStack  spacing={4}>
                  {/* Social Login Icons */}
                  <HStack spacing={3}>
                    <IconButton aria-label="Google" icon={<FaGoogle />} borderRadius="md" color="#6F6E6D" bg="#EEEEEE"/>
                    <IconButton aria-label="Apple" icon={<FaApple />} borderRadius="md" color="#6F6E6D" bg="#EEEEEE" />
                    <IconButton aria-label="GitHub" icon={<FaGithub />} borderRadius="md" color="#6F6E6D" bg="#EEEEEE" />
                    <IconButton aria-label="Twitter" icon={<FaXTwitter />} borderRadius="md" color="#6F6E6D" bg="#EEEEEE" />
                    <IconButton aria-label="Discord" icon={<FaDiscord />} borderRadius="md" color="#6F6E6D" bg="#EEEEEE"/>
                  </HStack>
  
                  {/* Email Input */}
                  <Box w="full" mt={2}>
                    <Text fontSize={"13px"} fontWeight="semibold">Email</Text>
                    <InputGroup mt={1} bg="#EEEEEE"  borderRadius="md">
                      <Input 
                        placeholder="email@gmail.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        bg="transparent"
                        fontSize={12}
                       
                      />
                      <IconButton 
                        aria-label="Submit email" 
                        icon={<FaArrowRight />} 
                        width="30px"
                        bg="#EFEFEF"
                        color="#5F6368"
                        onClick={handleEmailSubmit}
                      />
                    </InputGroup>
                  </Box>
  
                  {/* Divider */}
                  <Text fontSize="12PX"  color="gray.400" my="3">OR</Text>
  
                  {/* Wallet Connect Button */}
                  <Button w="full" bg="#60B7FE" color="white"  
                  borderRadius={'15px'} _hover={{ bg: "blue.500" }} 
                  fontSize={"13px"}
                  onClick={handleWalletConnect}>
                    Connect Wallet
                  </Button>
                </VStack>
              </ModalBody>
            </>
          )}
  
          {/* Confirm Email Step */}
          {step === "code" && (
            <>
              <ModalHeader  mt={"-15px"}>
                <Flex>
              <IconButton 
                    aria-label="Back" 
                    icon={<FaCircleChevronLeft />} 
                    size="12px"
                    p={2}
                    borderRadius={"25px"}
                    onClick={() => setStep("email")}
                    alignSelf="flex-start"
                    ml={"-27px"}
                    mr={4}
                    
                  />
                <Text fontSize={"18px"} ml={10}>
                Confirm Email
                </Text>
                </Flex>
                
                </ModalHeader>
              <ModalBody>
                <VStack spacing={4}>
                  {/* Back Button */}
               
                  <Text fontSize="md" color={"#6F6E6D"} width={250} textAlign={'center'}>Enter confirmation code sent to <br/><Text as="b" color={"black"}>{email}</Text></Text>
  
                  {/* OTP Input */}
                  <HStack spacing={2}>
                    {code.map((digit, index) => (
                      <Input 
                        key={index}
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        textAlign="center"
                        fontSize="xl"
                        w="50px"
                        h="50px"
                        bg="gray.100"
                      />
                    ))}
                  </HStack>
  
                  {/* Verify Button */}
                  <Button w="full" bg="#1A1A11"  
                  borderRadius={"15px"}
                  fontSize={12} color="white" _hover={{ bg: "#1A1A11" }}>
                    Verify
                  </Button>
                </VStack>
              </ModalBody>
            </>
          )}
  
          {/* Wallet Selection Step */}
          {step === "wallets" && (
            <>
                 <Flex>
              <IconButton 
                    aria-label="Back" 
                    icon={<FaCircleChevronLeft />} 
                    size="12px"
                    p={2}
                    borderRadius={"25px"}
                    onClick={() => setStep("email")}
                    alignSelf="flex-start"
                    
                    mr={4}
                    
                  />
                <Text fontSize={"16px"} ml={10} fontWeight={600}>
                Select Wallet
                </Text>
                </Flex>
                
              <ModalBody>
              <VStack spacing={4} mt={3}>
  {/* Wallet Options */}
  {wallets.map((wallet, index) => (
    <Button 
      key={index} 
      w="full" 
      h="50px" 
      fontSize="14px"
      bg="#EEEEEE" 
      borderRadius="15px" 
      justifyContent="space-between"
      px={4} // Adds padding to prevent content from touching the edges
      onClick={() => console.log(`Connecting to ${wallet.name}`)}
    >
      <Flex w="full" align="center" justify="space-between">
        <Text>{wallet.name}</Text>
        {wallet.icon != "#" && (
        <img src={wallet.icon} alt={wallet.name} width="24px" />)}
      </Flex>
    </Button>
  ))}
</VStack>

<Button 
      bg="transparent"
      w="full" 
      h="50px" 
      fontSize="14px"
      mt="5"
      borderRadius="15px" 
      justifyContent="center"
      alignItems={'center'}
      color="gray.400"
      px={4} // Adds padding to prevent content from touching the edges
      onClick={() => console.log(`Connecting to`)}
    >
                I Don’t Have a Wallet
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    );
  };
  
  export default LoginModal;
  