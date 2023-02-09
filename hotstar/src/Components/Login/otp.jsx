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


const OtpHandler=()=>{
    
return (
   

    <>
   <Container bg="#111827.0"  height="sm" px="15"  py="10">
    <form
                id="new-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  
                  
                  //localStorage.setItem("Phone");
                }}
              >
                 <VStack>
                 <FormControl>
                 
                <FormLabel color="white" fontSize="lg"><b>Enter the 4-digit code Sent to +91******9304</b></FormLabel>
                 
                <Stack spacing={3} padding="5" paddingBottom="20">
                     <HStack >
                  <Input variant='flushed' width="16" value={one} onChange={(e) =>one=e.target.value}/>
                 <Input variant='flushed'  width="16" value={two} onChange={(e) =>two=e.target.value}/>
                 <Input variant='flushed'  width="16" value={three} onChange={(e) =>three=e.target.value}/>
                 <Input variant='flushed'  width="16" value={four} onChange={(e) =>four=e.target.value}/>
                  
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
    </>
)

}

export default OtpHandler;