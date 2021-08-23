import React, { useState } from "react";
import { useHistory } from "react-router";
import { Box, Container, Flex, Image, Text, Spacer } from "@chakra-ui/react";
import { PUBLIC_PATHS } from "../app/constants";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
    const history = useHistory();
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener("scroll", changeBackground);
    return (
        <>
            <Box w="100%" className={navbar ? "navbar active " : "navbar"} p={3}>
                <Container maxW="container.lg">
                    <Flex>
                        <Image src={logo} style={{ height: "40px" }} />
                        <Spacer />
                        <Box mt={3}>
                            <Flex>
                                <Text
                                    _hover={{ cursor: "pointer" }}
                                    fontWeight="semibold"
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.LANDING);
                                    }}
                                >
                                    Home
                                </Text>
                                <Text
                                    marginLeft="20px"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.ABOUT);
                                    }}
                                >
                                    About
                                </Text>
                                <Text
                                    marginLeft="20px"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.BENEFITS);
                                    }}
                                >
                                    Why Choose Us
                                </Text>

                                <Text marginLeft="20px" _hover={{ cursor: "pointer" }}>
                                    Team
                                </Text>
                            </Flex>
                        </Box>

                        <Spacer />
                        <Text
                            mt={3}
                            _hover={{ cursor: "pointer" }}
                            onClick={() => {
                                history.push(PUBLIC_PATHS.LOGIN);
                            }}
                        >
                            Log in
                        </Text>
                        <Text
                            mt={3}
                            _hover={{ cursor: "pointer" }}
                            marginLeft="15px"
                            onClick={() => {
                                history.push(PUBLIC_PATHS.REGISTER);
                            }}
                        >
                            Sign up
                        </Text>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};
export default Header;
