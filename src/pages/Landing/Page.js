import React from "react";
import { Box, Center, Text, Container, Flex, Image, Spacer } from "@chakra-ui/react";
import "./index.css";
import hero from "../../assets/social.png";
import benefit from "../../assets/benefits.png";
import hand from "../../assets/do.png";
import phone from "../../assets/phone.png";
import Bounce from "react-reveal/Bounce";
import { PUBLIC_PATHS } from "../../app/constants";
import { useHistory } from "react-router";

const Page = () => {
    const history = useHistory();

    return (
        <>
            <Box className="jumbotron">
                <Container maxW="container.xl">
                    <Flex flexWrap="wrap" direction={["column", "row"]}>
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
                                    history.push(PUBLIC_PATHS.LOGIN);
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
                                width="650px"
                                height="auto"
                                position="relative"
                                Left="30px"
                                border="1px soild red"
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box w="100%" h="auto">
                <Container maxW="container.lg">
                    <Flex flexWrap="wrap" direction={["column", "row"]}>
                        <Box w="50%">
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
                                style={{
                                    color: "#747474",
                                    fontSize: "1.2rem",
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
                                style={{
                                    color: "#747474",
                                    fontSize: "1.2rem",
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

            <Box w="100%" h="auto" paddingTop="150px" paddingBottom="150px">
                <Container maxW="container.lg">
                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: "18px",
                            fontWeight: "700",
                            fontFamily: "poppins",
                            color: "#463A80",
                            textTransform: "uppercase",
                        }}
                    >
                        Objectives
                    </Text>
                    <Flex flexWrap="wrap" direction={["column", "row"]}>
                        <Image
                            src={phone}
                            objectFit="cover"
                            width="650px"
                            height="auto"
                            marginLeft="50px"
                        />
                        <Spacer />
                        <Box marginTop="150px">
                            <ol
                                style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "400",
                                    lineHeight: "40px",
                                }}
                            >
                                <li> Provide Skill Set Acquisition</li>
                                <li> Reduce Unemployement</li>
                                <li> Promote Financial Freedom</li>
                                <li> Enable Financial Freedom</li>
                            </ol>
                        </Box>
                    </Flex>
                </Container>
            </Box>

            <Box w="100%" h="100vh">
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
                        <Image src={benefit} objectFit="contain" />
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
