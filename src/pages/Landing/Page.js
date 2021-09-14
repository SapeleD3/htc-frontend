import React from "react";
import { Box, Center, Text, Container, Flex, Image, Spacer } from "@chakra-ui/react";
import "./index.css";
import hero from "../../assets/social.png";
import hand from "../../assets/do.png";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { PUBLIC_PATHS } from "../../app/constants";
import { useHistory } from "react-router";
import { useMediaQuery } from "@chakra-ui/media-query";
import Objectives from "./Objectives";
import Benefits from "./Benefits";

const Page = () => {
    const history = useHistory();
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <>
            <Box className="jumbotron">
                <Container maxW="container.xl">
                    <Flex flexWrap="wrap" direction={isNotSmallerScreen ? "row" : "column"}>
                        <Box pr={3}>
                            <Bounce>
                                <Text
                                    style={{
                                        fontSize: "30px",
                                        fontFamily: "poppins",
                                        fontWeight: "700",
                                        color: "#fff",
                                        textAlign: "left",
                                        marginTop: "250px",
                                    }}
                                >
                                    Welcome to <br /> Hollograph Technologies <br /> Services{" "}
                                    <Text className="word">
                                        (Learn a skill set, Build cash flow and own a Home)
                                    </Text>
                                </Text>
                            </Bounce>
                            <Slide left>
                            <Text
                                textAlign="left"
                                textStyle="italic"
                                color="#9AA49B"
                                mt={5}
                                mb={5}
                                style={{ textStyle: "italic" }}
                            >
                                Forex Education,  Forex Trading Sessions, <br/> CryptoCurrency Trading & Real-Estate
                            </Text>
                            <button
                                className="j-btn"
                                onClick={() => {
                                    history.push(PUBLIC_PATHS.REGISTER);
                                }}
                            >
                                Sign up
                            </button>
                            <Text
                                textAlign="left"
                                textStyle="italic"
                                color="#9AA49B"
                                mt={5}
                                mb={2}
                                style={{ textStyle: "italic" }}
                            >
                                Building a better future...
                            </Text>
                            </Slide>
                        </Box>
                        <Spacer />
                        <Box>
                            <Image
                                src={hand}
                                objectFit="contain"
                                width="550px"
                                height="auto"
                                position="relative"
                                Left="30px"
                                top={isNotSmallerScreen ? "150px" : " "}
                                className='animated'
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box w="100%" paddingBottom="45px" h={isNotSmallerScreen ? "70vh" : "100vh"}>
                <Container maxW="container.lg">
                    <Slide bottom>
                        <Flex flexWrap="wrap" direction={isNotSmallerScreen ? "row" : "column"}>
                            <Box w={isNotSmallerScreen ? "50%" : "100%"}>
                                <Text
                                    style={{
                                        color: "#463A80",
                                        fontWeight: "bold",
                                        fontSize: "2rem",
                                    }}
                                >
                                    Our Mission
                                </Text>
                                <Text
                                    fontSize={isNotSmallerScreen ? "1.2rem" : "1rem"}
                                    style={{
                                        color: "#747474",
                                        textAlign: "left",
                                    }}
                                >
                                    To inspire productivity and economic growth among Africans
                                    through our unique trading strategies and bring about
                                    acquisition of skill set(s) with lifelong earning potential.
                                </Text>

                                <Text
                                    style={{
                                        color: "#463A80",
                                        fontWeight: "700",
                                        fontSize: "2rem",
                                        marginTop: "50px",
                                    }}
                                >
                                    Our Vision
                                </Text>
                                <Text
                                    fontSize={isNotSmallerScreen ? "1.2rem" : "1rem"}
                                    style={{
                                        color: "#747474",
                                        textAlign: "left",
                                    }}
                                >
                                    To become a leading brand in Construction of Unique Modern Day
                                    Structures and the Provision of Innovative Strategies used in
                                    Forex Trading.
                                </Text>
                            </Box>
                            <Spacer />
                            <Image
                                src={hero}
                                objectFit="cover"
                                marginTop="7px"
                                marginLeft="10px"
                                style={{ width: "400px", height: "auto" }}
                            />
                        </Flex>
                    </Slide>
                </Container>
            </Box>

            <Box
                w="100%"
                h={isNotSmallerScreen ? "70vh" : "auto"}
                bg="#F6F7FB"
                paddingBottom={isNotSmallerScreen ? "140px" : "50px"}
            >
                <Container maxW="container.lg">
                    <Text
                        textAlign="center"
                        marginTop={isNotSmallerScreen ? "40px" : "20px"}
                        fontSize="2rem"
                        fontWeight="bold"
                        color="#463A80"
                    >
                        OBJECTIVES{" "}
                    </Text>
                    <Center>
                        <Box borderBottom="3px solid #463A80" w="50px" />
                    </Center>
                    <Objectives />
                </Container>
            </Box>

            <Box
                w="100%"
                h={isNotSmallerScreen ? "90vh" : "auto"}
                bg="white"
                paddingBottom={isNotSmallerScreen ? "140px" : "50px"}
            >
                <Container maxW="container.lg">
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: "18px",
                            fontWeight: "700",
                            fontFamily: "poppins",
                            color: "#463A80",
                            marginTop: "90px",
                        }}
                    >
                        Benefits
                    </Text>
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: "24px",
                            fontWeight: "700",
                            fontFamily: "poppins",
                            color: "#303030",
                        }}
                    >
                        Why Choose Us?
                    </Text>
                    <Center>
                        <Box borderBottom="3px solid #463A80" w="50px" />
                    </Center>
                    <Benefits />
                </Container>
            </Box>
        </>
    );
};

export default Page;
