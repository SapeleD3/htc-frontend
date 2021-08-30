import React, {useEffect} from "react";
import { Container, Box, Text, Center, Avatar, Flex } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useMediaQuery } from "@chakra-ui/media-query";

const Team = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    useEffect(() => {
        window.scrollTo(0, 0);
       }, [])

    return (
        <>
            <Header />
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
                        <Flex mt={5} direction={isNotSmallerScreen ? "row" : "column"}>
                            <Box
                                p={4}
                                w={isNotSmallerScreen ? "100%" : "100%"}
                                className="team-member"
                                mb={isNotSmallerScreen ? "0" : "5"}
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
                                w={isNotSmallerScreen ? "100%" : "100%"}
                                className="team-member"
                                ml={isNotSmallerScreen ? "5" : "0"}
                                mb={isNotSmallerScreen ? "0" : "5"}
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
                                w={isNotSmallerScreen ? "100%" : "100%"}
                                className="team-member"
                                ml={isNotSmallerScreen ? "5" : "0"}
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
                        </Flex>
                    </Container>
                </Box>
            </section>
        </>
    );
};

export default Team;
