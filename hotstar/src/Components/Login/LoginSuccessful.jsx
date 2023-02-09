import { Text, Center, VStack, Container } from "@chakra-ui/react";

const LoginSuccessful=()=>{
 const phone= localStorage.getItem("Phone");
 console.log(phone);

    return(

<>
   <Container bg="#111827.0" height="sm" px="15"  py="10">

     <VStack>
        <div style={{width:"100%", height:"0", paddingTop:"5%", paddingBottom:"30%",}}><VStack><iframe src="https://giphy.com/embed/YlSR3n9yZrxfgVzagm" width="10%" height="10%" style={{position:"absolute"}} frameBorder="0" className="giphy-embed" allowFullScreen></iframe></VStack></div>
        
        
        <Text color="white" fontSize="lg" ><b>Account Created with +91{phone} </b></Text>
        </VStack>
        </Container>
        </>
    )
}

export default LoginSuccessful;