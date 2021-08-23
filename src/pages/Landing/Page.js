import React from "react";
import { Box, Center, Text, Container, Flex, Image, Spacer, Grid, Avatar } from "@chakra-ui/react";
import "./index.css";
import hero from "../../assets/social.png";
import benefit from "../../assets/benefits.png";
import Bounce from "react-reveal/Bounce";
import { PUBLIC_PATHS } from "../../app/constants";
import { useHistory } from "react-router";

const Page = () => {
    const history = useHistory();

    return (
        <>
            <Box className="jumbotron">
                <Container maxW="container.lg">
                    <Center>
                        <Bounce>
                            <Text
                                className="word"
                                style={{
                                    fontSize: "50px",
                                    fontFamily: "poppins",
                                    fontWeight: "700",
                                    color: "#fff",
                                    textAlign: "center",
                                    marginTop: "250px",
                                }}
                            >
                                <br /> Hollograph Technologies Services{" "}
                                <p style={{ fontSize: "20px", fontWeight: "400" }}>
                                    (Learn a skill set, Build cash flow and own a Home)
                                </p>
                            </Text>
                        </Bounce>
                    </Center>
                    <Center>
                        <button
                            className="j-btn"
                            onClick={() => {
                                history.push(PUBLIC_PATHS.LOGIN);
                            }}
                        >
                            Sign up
                        </button>
                    </Center>

                    <Text
                        textAlign="center"
                        textStyle="italic"
                        color="#fff"
                        marginTop="190px"
                        mb={2}
                        style={{ textStyle: "italic" }}
                    >
                        Building a better future...
                    </Text>
                    <Center>
                        <div
                            style={{
                                width: "50px",
                                height: "5px",
                                border: "1px solid #fff",
                                background: "none",
                                justifyContent: "center",
                            }}
                        />
                    </Center>
                </Container>
            </Box>

            <Box w="100%" h="100vh">
                <Container maxW="container.lg">
                    <Flex>
                        <Box w="80%">
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
                                    fontSize: "1.5rem",
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
                                    fontSize: "1.5rem",
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
                            marginTop="40px"
                            marginLeft="40px"
                            style={{ width: "300px", height: "300px" }}
                        />
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
                            _hover={{ cursor: 'pointer'}}
                            onClick={() => {
                                history.push(PUBLIC_PATHS.BENEFITS);
                            }}
                        >
                            Learn more
                        </Text>
                    </Container>
                </Box>

            <section id="team">
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: "700",
                        fontFamily: "poppins",
                        color: "#463A80",
                    }}
                >
                    Team
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
                    Meet Our Executives
                </Text>
                <Box className="team-box">
                    <Container maxW="container.lg">
                        <Grid templateColumns="repeat(3, 1fr)" gap={1}>
                            <Box
                                p={4}
                                w="70%"
                                className="team-member"
                                marginTop="100px"
                                style={{
                                    borderRadius: "20px",
                                    background: "#fff",
                                }}
                            >
                                <Center>
                                    <Avatar size="2xl" />
                                </Center>
                                <Text
                                    textAlign="center"
                                    mt={4}
                                    mb={4}
                                    style={{ fontSize: "14px", color: "#303030" }}
                                >
                                    {" "}
                                    Engr. Daniel Ekadi
                                </Text>
                                <Text
                                    textAlign="center"
                                    style={{ color: "#8A8B8C", fontSize: "13px" }}
                                >
                                    Lead
                                </Text>
                            </Box>

                            <Box
                                p={4}
                                w="70%"
                                className="team-member"
                                marginTop="100px"
                                style={{
                                    borderRadius: "20px",
                                    background: "#fff",
                                }}
                            >
                                <Center>
                                    <Avatar size="2xl" />
                                </Center>
                                <Text
                                    textAlign="center"
                                    mt={4}
                                    mb={4}
                                    style={{ fontSize: "14px", color: "#303030" }}
                                >
                                    {" "}
                                    Engr. Daniel Ekadi
                                </Text>
                                <Text
                                    textAlign="center"
                                    style={{ color: "#8A8B8C", fontSize: "13px" }}
                                >
                                    Lead
                                </Text>
                            </Box>

                            <Box
                                p={4}
                                w="70%"
                                className="team-member"
                                marginTop="100px"
                                style={{
                                    borderRadius: "20px",
                                    background: "#fff",
                                }}
                            >
                                <Center>
                                    <Avatar size="2xl" />
                                </Center>
                                <Text
                                    textAlign="center"
                                    mt={4}
                                    mb={4}
                                    style={{ fontSize: "14px", color: "#303030" }}
                                >
                                    {" "}
                                    Engr. Daniel Ekadi
                                </Text>
                                <Text
                                    textAlign="center"
                                    style={{ color: "#8A8B8C", fontSize: "13px" }}
                                >
                                    Lead
                                </Text>
                            </Box>
                        </Grid>
                    </Container>
                </Box>
            </section>
        </>
    );
};

export default Page;
