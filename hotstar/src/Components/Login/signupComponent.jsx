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
    Center, Text, Divider, Radio, RadioGroup, Grid, GridItem
  } from "@chakra-ui/react";
  import * as React from "react";
  //import { render } from "react-dom";
 //import OtpHandler from "./otp";
 //import SignInContainer from "./SignUp";
 //import UserDetails from "./Details";
 //import LoginSuccessful from "./LoginSuccessful";
 import { useState } from "react";

  function Signup() {
   
  const [logincomp,SetloginComp]= React.useState(true);
  const [otpcomp,SetOtpComp]= React.useState(false);
  const [detailscomp,SetdetailsComp]= React.useState(false);
  const [logsucesscomp,SetlogSuceesComp]= React.useState(false);
const [phone, setPhone]=React.useState("");
const [name,setname]=React.useState("");
const [gender, setgender]=React.useState("");
const [Age,setAge]=React.useState("");

 
    
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
              {
                logincomp===true ? 
                 <>
                 <Container bg="#111827.0" height="sm" px="15"  py="10">
              <form
                id="new-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  
                  
                  localStorage.setItem("Phone", phone);
                  SetloginComp(false);
                  SetOtpComp(true);
                }}
              >
                 <VStack>
                 <FormControl>
                 
                <FormLabel fontSize="xl" py="10">Login to Continue</FormLabel>
                 
                 <Button width="full" variant='outline' colorScheme="blue" bg="#111827.0" p="1.5">
                 Have a facebook/Email Account?
             </Button>
                 <Center><Text  padding="5" fontSize="xl">or</Text></Center>
                 <HStack><Text>+91|</Text>
                 <Input variant='flushed' placeholder="Enter your mobile number"  border="none"
                 value={phone}
                 onChange={(e) => setPhone(e.target.value)} />
                 </HStack>
                 <Divider color="blue.400" />
                 <br></br>
                 
                
                 <Button type="submit" form="new-note" width="full" colorScheme="blue" borderRadius="0">
                CONTINUE
              </Button>
              
              
                
                 
              </FormControl>
              </VStack>
              </form>
              <VStack> <Text color="gray" fontSize="xs"><HStack><Text>By Proceeding you agree to the</Text><Text color="blue">Terms of use</Text><Text>and</Text>  <Text color="blue">Privacy policy</Text></HStack></Text></VStack>
              </Container>
                 </>
                :null
              }

              {
                otpcomp===true?
                <>
                 <Container bg="#111827.0"  height="sm" px="15"  py="10">
                <form
                id="new-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  SetOtpComp(false);
                  SetdetailsComp(true);
                  
                  //localStorage.setItem("Phone");
                }}
              >
                 <VStack>
                 <FormControl>
                 
                <FormLabel color="white" fontSize="lg"><b>Enter the 4-digit code Sent to +91******9304</b></FormLabel>
                 
                <Stack spacing={3} padding="5" paddingBottom="20">
                     <HStack >
                  <Input variant='flushed' width="16" />
                 <Input variant='flushed'  width="16" />
                 <Input variant='flushed'  width="16" />
                 <Input variant='flushed'  width="16" />
                  
                </HStack>
                <Text color="blue.300" fontSize="sm"> <a href="">RESEND CODE</a></Text>
                </Stack>
                
                
                 <Button type="submit" form="new-note" width="full" colorScheme="blue" borderRadius="0" >
                CONTINUE
              </Button>
              
               </FormControl>
                 </VStack>

                 
                 </form>
                 </Container>
                </>:null
              }

              {
                   detailscomp===true?
                   <>
                   <Container bg="#111827.0" height="sm" px="15"  py="10">
    <form
                id="new-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  localStorage.setItem("userName", name);
                  localStorage.setItem("userAge", Age);
                  localStorage.setItem("userGender", gender);
                  
                  SetdetailsComp(false)
                  SetlogSuceesComp(true);
                 // localStorage.setItem("Phone");
                }}
              >
                 <VStack>
                 <FormControl>
                 
                <FormLabel color="white" fontSize="xl"><b>Tell us about you</b></FormLabel>
                 
                <Stack spacing={3}>
                     <VStack padding="5">
                 
                 <Input variant='flushed' placeholder="Your name"  value={name} onChange={(e) =>setname(e.target.value)}/>
                 <br></br>
                 <Input variant='flushed' placeholder="Age"  value={Age} onChange={(e) =>setAge(e.target.value)}/>
                <br></br>
                 <Grid templateColumns='repeat(2, 1fr)'  gap='40' color="whiteAlpha.400">
                 <GridItem>
                 <FormHelperText fontSize="lg">Gender</FormHelperText></GridItem>
                <GridItem marginTop="3">  <RadioGroup onChange={setgender} value={gender}>
      <Stack direction='row'>
        <Radio value='male'>Male</Radio>
        <Radio value='female'>Female</Radio>
       
      </Stack>
    </RadioGroup>
    </GridItem>
    </Grid>
                  </VStack>
                </Stack>
                 <br></br>
                 
                 <Button type="submit" form="new-note" width="full" colorScheme="blue" borderRadius="0">
                Done
              </Button>
              
               </FormControl>
                 </VStack>
                 
                 </form>
                 </Container>
                   </>:null
              }
            {
              logsucesscomp===true ? 
              <>
<Container bg="#111827.0" height="sm" px="15"  py="10">

<VStack>
   <div style={{width:"100%", height:"0", paddingTop:"5%", paddingBottom:"30%",}}><VStack><iframe src="https://giphy.com/embed/YlSR3n9yZrxfgVzagm" width="10%" height="10%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></VStack></div>
   
   
   <Text color="white" fontSize="lg" ><b>Account Created with +91{phone} </b></Text>
   </VStack>
   </Container>
              </>:null

            }
            </ModalBody>
  
            <ModalFooter>
             
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  export default Signup;