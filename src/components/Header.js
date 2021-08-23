import React, { useState } from "react";
import { useHistory } from "react-router";
import { Box, Container, Flex, Image, Text, Spacer, Button } from "@chakra-ui/react";
import { PUBLIC_PATHS } from "../app/constants";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const history = useHistory();
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <>
            <Box
                className="header"
                w="100%"
                background="rgba(208, 216, 205, 1);"
                p={3}
                position="sticky"
                zIndex="999"
                top="0"
                h="70px"
                borderBottom="2px solid  #C9D0C9"
            >
                <Container maxW="container.xl">
                    <Flex>
                        <Image src={logo} style={{ height: "40px" }} />
                        <div className="menu-icon" onClick={handleClick}>
                            <i>
                                {clicked ? (
                                    <FaTimes className="fabars" style={{ color: "#0F1422" }} />
                                ) : (
                                    <FaBars className="times" style={{ color: "#0F1422" }} />
                                )}{" "}
                            </i>
                        </div>
                        <Spacer />
                        <Box mt={3}>
                            <Flex pl={3} className={clicked ? "nav-area active" : "nav-area"}>
                                <Text
                                    _hover={{ cursor: "pointer" }}
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.LANDING);
                                    }}
                                    className="nav-links"
                                    ml={5}
                                >
                                    Home
                                </Text>
                                <Text
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.ABOUT);
                                    }}
                                    className="nav-links"
                                    ml={5}
                                >
                                    About
                                </Text>
                                <Text
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.BENEFITS);
                                    }}
                                    className="nav-links"
                                    ml={5}
                                >
                                    Why Choose Us
                                </Text>

                                <Text
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.TEAM);
                                    }}
                                    className="nav-links"
                                    ml={5}
                                >
                                    Team
                                </Text>
                                <Text
                                    className="nav-links-mobile"
                                    _hover={{ cursor: "pointer" }}
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.LOGIN);
                                    }}
                                    ml={5}
                                >
                                    Log in
                                </Text>
                                <Text
                                    className="nav-links-mobile"
                                    _hover={{ cursor: "pointer" }}
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.REGISTER);
                                    }}
                                    ml={5}
                                >
                                    Sign up
                                </Text>
                            </Flex>
                        </Box>

                        <Spacer />
                        <div className="btn-area">
                            <Flex>
                                <Text
                                    mt={3}
                                    _hover={{ cursor: "pointer" }}
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.LOGIN);
                                    }}
                                >
                                    Log in
                                </Text>
                                <Button
                                    mt={1}
                                    fontWeight="700"
                                    fontSize="1.1rem"
                                    marginLeft="15px"
                                    onClick={() => {
                                        history.push(PUBLIC_PATHS.REGISTER);
                                    }}
                                >
                                    Sign up
                                </Button>
                            </Flex>
                        </div>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};
export default Header;
