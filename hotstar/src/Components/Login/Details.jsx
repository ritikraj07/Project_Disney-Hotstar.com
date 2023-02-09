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
      Center, Text, Divider,
      Radio, RadioGroup, Grid, GridItem
    } from "@chakra-ui/react";
    import { useState } from "react";


const UserDetails=()=>{
    const [name, setname] = useState("");
    const [Age, setAge] = useState("");
    const [gender, setgender] = useState('Male')
   
return (
   

    <>
    <Container bg="#111827.0" height="sm" px="15"  py="10">
    <form
                id="new-note"
                onSubmit={(event) => {
                  event.preventDefault();
                  localStorage.setItem("userName", name);
                  localStorage.setItem("userAge", Age);
                  localStorage.setItem("userGender", gender);
                  
     
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
    </>
)

}

export default UserDetails;