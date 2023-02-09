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

    const SignInContainer=()=>{
       return( <Container bg="#111827.0" height="sm" px="15"  py="10">
              <form
                id="new-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  
                  console.log(state);
                  localStorage.setItem("Phone", state);
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
                 value={state}
                 onChange={(e) => setState(e.target.value)} />
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
       );
    }

    export default SignInContainer;