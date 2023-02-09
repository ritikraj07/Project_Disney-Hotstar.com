import {
  Container,
    ChakraProvider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    ModalFooter,
    Button,
    useDisclosure,Stack,
    HStack,
    VStack,
    Center, Text, Divider
  } from "@chakra-ui/react";
  import * as React from "react";
  import { render } from "react-dom";
 import OtpHandler from "./otp";
 import SignInContainer from "./SignUp";
 import UserDetails from "./Details";
 import LoginSuccessful from "./LoginSuccessful";

  function Signup() {
   
  localStorage.setItem("state","register")
    let st= localStorage.getItem("state");


    const [state,setState]= React.useState("");
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen}>Open</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="#111827.0" color="white" borderRadius="0">
            <ModalHeader>
              <ModalCloseButton />
            </ModalHeader>
         
            <ModalBody>
            
            </ModalBody>
  
            <ModalFooter>
             
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default Signup;