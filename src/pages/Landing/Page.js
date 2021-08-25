import React from "react";
import { Box, Center, Text, Container, Flex, Image, Spacer } from "@chakra-ui/react";
import "./index.css";
import hero from "../../assets/social.png";
import benefit from "../../assets/benefits.png";
import hand from "../../assets/do.png";
import Bounce from "react-reveal/Bounce";
import { PUBLIC_PATHS } from "../../app/constants";
import { useHistory } from "react-router";
import { useMediaQuery } from "@chakra-ui/media-query";

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
                                        marginTop: "100px",
                                    }}
                                >
                                    Welcome to <br /> Hollograph Technologies <br /> Services{" "}
                                    <Text className="word">
                                        (Learn a skill set, Build cash flow and own a Home)
                                    </Text>
                                </Text>
                            </Bounce>
                            <Text
                                textAlign="left"
                                textStyle="italic"
                                color="#9AA49B"
                                mt={5}
                                mb={5}
                                style={{ textStyle: "italic" }}
                            >
                                Forex Education, Free Forex Training Sessions, <br /> Free Forex
                                Trading Sessions, CryptoCurrency Trading
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
                                border="1px soild red"
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box w="100%" paddingBottom="45px">
                <Container maxW="container.lg">
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
                                To inspire productivity and economic growth among Africans through
                                our unique trading strategies and bring about acquisition of skill
                                set(s) with lifelong earning potential.
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
                                Structures and the Provision of Innovative Strategies used in Forex
                                Trading.
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
                </Container>
            </Box>

            <Box w="100%" id="object" bg="#F6F6F8" marginTop="50px" marginBottom="20px">
                <Container maxW="container.lg">
                    <Center>
                        <Box p={5}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: "18px",
                                    fontWeight: "700",
                                    fontFamily: "poppins",
                                    color: "#fff",
                                    textTransform: "uppercase",
                                }}
                            >
                                Objectives
                            </Text>
                            <ol
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "400",
                                    lineHeight: "30px",
                                    color: "#fff",
                                }}
                            >
                                <li> Provide Skill Set Acquisition</li>
                                <li> Reduce Unemployement</li>
                                <li> Promote Financial Freedom</li>
                                <li> Enable Financial Freedom</li>
                            </ol>
                        </Box>
                    </Center>
                </Container>
            </Box>

            <Box w="100%" h={isNotSmallerScreen ? "90vh" : "50vh"} marginTop='30px'>
                <Container maxW="container.lg">
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: "18px",
                            fontWeight: "700",
                            fontFamily: "poppins",
                            color: "#463A80",
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
                        <Image
                            src={benefit}
                            boxSize="100%"
                            objectFit={isNotSmallerScreen ? "contain" : "contain"}
                        />
                    </Center>
                    <Text
                        textAlign="center"
                        marginTop="20px"
                        marginBottom="20px"
                        _hover={{ cursor: "pointer" }}
                        onClick={() => {
                            history.push(PUBLIC_PATHS.BENEFITS);
                        }}
                    >
                        Learn more
                    </Text>
                </Container>
            </Box>
        </>
    );
};

export default Page;
