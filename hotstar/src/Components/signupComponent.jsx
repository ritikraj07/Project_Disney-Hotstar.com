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
  useDisclosure,
  Stack,
  HStack,
  VStack,
  Center,
  Text,
  Divider,
  Radio,
  RadioGroup,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { auth,firebase } from '../firebase';
import { LOGIN } from "../Redux/Actions/actionType";
import { login} from "../Redux/Actions/myAction";
import { useDispatch } from "react-redux";

function Signup() {
 
    
  //const [overlay, setOverlay] = React.useState(<OverlayTwo />)

  const [logincomp, SetloginComp] = React.useState(true);
  const [otpcomp, SetOtpComp] = React.useState(false);
  const [detailscomp, SetdetailsComp] = React.useState(false);
  const [logsucesscomp, SetlogSuceesComp] = React.useState(false);
  const [phone, setPhone] = React.useState("+91");
  const [name, setname] = React.useState("");
  const [gender, setgender] = React.useState("");
  const [Age, setAge] = React.useState("");
	const [final, setfinal] = useState('');
  const dispatch=useDispatch();
let one,two,three,four,five,six, otp;

const otpgenerator=()=>{
  return otp= (one*10000)+(two*1000)+(three*100)+(four*10)+(five*1)+six;
}

  const { isOpen, onClose, onOpen } = useDisclosure();

  const signin = (e) => {
       e.preventDefault();
		if (phone === "" || phone.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(phone, verify).then((result) => {
			setfinal(result);
      localStorage.setItem("Phone", phone);

      SetloginComp(false);
			SetOtpComp(true);
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
	}

	// Validate OTP
	const ValidateOtp = (e) => {
    e.preventDefault();
    otpgenerator();
		console.log(typeof otp, otp);
    console.log(final);
		if (otp === null || final === null)
		   console.log("otp null");
			
		final.confirm(otp).then((result) => {
			
      SetOtpComp(false);
      SetdetailsComp(true);
		}).catch((err) => {
			alert("Wrong code");
		})
	}

  return (
    <div style={{ backgroundColor: "rgb(20,26,40)"}}>
      <Button onClick={onOpen}>Login</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay marginTop="10"/>
        <ModalContent bg="#111827.0" color="white" borderRadius="0">
          <ModalHeader>
            <ModalCloseButton marginTop='10' />
          </ModalHeader>

          <ModalBody>
            {logincomp === true ? (
              <>
                <Container bg="#111827.0" height="md" px="15" py="5" >
                  <form
                    id="new-note"
                    onSubmit={signin}
                  >
                    <VStack>
                      <FormControl>
                        <FormLabel fontSize="xl" py="7">
                          Login to Continue
                        </FormLabel>

                        <Button
                          width="full"
                          variant="outline"
                          colorScheme="blue"
                          bg="#111827.0"
                          p="1.5"
                        >
                          Have a facebook/Email Account?
                        </Button>
                        <Center>
                          <Text padding="5" fontSize="xl">
                            or
                          </Text>
                        </Center>
                        <HStack>
                          <Text>+91|</Text>
                          <Input
                            variant="flushed"
                            placeholder="Enter your mobile number"
                            border="none"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </HStack>
                        <Divider color="blue.400" />
                        <br></br>
                        <div id="recaptcha-container"></div>
                        <Button
                          type="submit"
                          form="new-note"
                          width="full"
                          colorScheme="blue"
                          borderRadius="0"
                        >
                          CONTINUE
                        </Button>
                      </FormControl>
                    </VStack>
                  </form>
                  <VStack>
                    {" "}
                    <Text color="gray" fontSize="xs">
                      <HStack>
                        <Text>By Proceeding you agree to the</Text>
                        <Text color="blue">Terms of use</Text>
                        <Text>and</Text>{" "}
                        <Text color="blue">Privacy policy</Text>
                      </HStack>
                    </Text>
                  </VStack>
                </Container>
              </>
            ) : null}

            {otpcomp === true ? (
              <>
                <Container bg="#111827.0" height="sm" px="15" py="10">
                  <form
                    id="new-note"
                    onSubmit={ValidateOtp}
                  >
                    <VStack>
                      <FormControl>
                        <FormLabel color="white" fontSize="lg">
                          <b>Enter the 4-digit code Sent to +91******9304</b>
                        </FormLabel>

                        <Stack spacing={3} padding="5" paddingBottom="20">
                          <HStack>
                            <Input variant="flushed" width="16" value={one} onChange={(e)=>one=e.target.value}/>
                            <Input variant="flushed" width="16" value={two} onChange={(e)=>two=e.target.value}/>
                            <Input variant="flushed" width="16"value={three} onChange={(e)=>three=e.target.value} />
                            <Input variant="flushed" width="16"value={four} onChange={(e)=>four=e.target.value} />
                            <Input variant="flushed" width="16"value={five} onChange={(e)=>five=e.target.value} />
                            <Input variant="flushed" width="16"value={six} onChange={(e)=>six=e.target.value} />
                          </HStack>
                          <Text color="blue.300" fontSize="sm">
                            {" "}
                            <a href="">RESEND CODE</a>
                          </Text>
                        </Stack>

                        <Button
                          type="submit"
                          form="new-note"
                          width="full"
                          colorScheme="blue"
                          borderRadius="0"
                        >
                          CONTINUE
                        </Button>
                      </FormControl>
                    </VStack>
                  </form>
                </Container>
                
                       
              </>
            ) : null}

            {detailscomp === true ? (
              <>
                <Container bg="#111827.0" height="sm" px="15" py="10">
                  <form
                    id="new-note"
                    onSubmit={(event) => {
                      event.preventDefault();
                      const user={
                        "name":name,
                        "Age":Age,
                        
                        "phone":phone
                      }
                      
                      localStorage.setItem("user", user);
                      localStorage.setItem("IsAuth", true);
                      dispatch(login());
                      

                      SetdetailsComp(false);
                      SetlogSuceesComp(true);
                      }
                    }
                  >
                    <VStack>
                      <FormControl>
                        <FormLabel color="white" fontSize="xl">
                          <b>Tell us about you</b>
                        </FormLabel>

                        <Stack spacing={3}>
                          <VStack padding="5">
                            <Input
                              variant="flushed"
                              placeholder="Your name"
                              value={name}
                              onChange={(e) => setname(e.target.value)}
                            />
                            <br></br>
                            <Input
                              variant="flushed"
                              placeholder="Age"
                              value={Age}
                              onChange={(e) => setAge(e.target.value)}
                            />
                            <br></br>
                            <Grid
                              templateColumns="repeat(2, 1fr)"
                              gap="40"
                              
                            >
                              <GridItem>
                                <FormHelperText fontSize="lg">
                                  Gender
                                </FormHelperText>
                              </GridItem>
                              <GridItem>
                              
                               <HStack>
                                 <input type="radio" id="css" name="Male" value="Male"/>
                                 <label for="html">Male</label>
                                 
                              <input type="radio" id="css" name="Female" value="Female"/>
                              <label for="css">Female</label>
                              </HStack>
                              </GridItem>
                               
                                {/*<RadioGroup onChange={setgender} value={gender}>
                                  <Stack direction="row">
                                    <Radio value="male">Male</Radio>
                                    <Radio value="female">Female</Radio>
                                  </Stack>
                                </RadioGroup>*/}
                              
                            </Grid>
                          </VStack>
                        </Stack>
                        <br></br>

                        <Button
                          type="submit"
                          form="new-note"
                          width="full"
                          colorScheme="blue"
                          borderRadius="0"
                        >
                          Done
                        </Button>
                      </FormControl>
                    </VStack>
                  </form>
                </Container>
              </>
            ) : null}
            {logsucesscomp === true ? (
              <>
                <Container bg="#111827.0" height="sm" px="15" py="10">
                  <VStack>
                    <div
                      style={{
                        width: "100%",
                        height: "0",
                        paddingTop: "5%",
                        paddingBottom: "30%",
                      }}
                    >
                      <VStack>
                        <iframe
                          src="https://giphy.com/embed/YlSR3n9yZrxfgVzagm"
                          width="10%"
                          height="10%"
                          style={{ position: "absolute" }}
                          frameBorder="0"
                          className="giphy-embed"
                          allowFullScreen
                        ></iframe>
                      </VStack>
                    </div>

                    <Text color="white" fontSize="lg">
                      <b>Account Created with {phone} </b>
                    </Text>
                  </VStack>
                </Container>
              </>
            ) : null}
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Signup;
