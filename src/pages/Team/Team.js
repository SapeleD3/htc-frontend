import React from "react";
import { Container, Box, Text, Grid, Center, Avatar } from "@chakra-ui/react";
import Header from "../../components/Header";

const Team = () => {
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

export default Team;
