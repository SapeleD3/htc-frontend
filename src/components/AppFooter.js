import React from "react";
import { Box, Stack, Flex, Text, Container, Center, Spacer, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { useMediaQuery } from "@chakra-ui/media-query";

export default function AppFooter() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Stack
            position="relative"
            width="100%"
            bottom="0"
            left="0"
            bg="linear-gradient(93.67deg, #463A80 -2.82%, #303030 98.75%)"
            color="white"
            padding="3"
        >
            <Box>
                <Center>
                    <Image src={logo} />
                </Center>
                <Text textAlign="center" fontSize="1rem" fontWeight="bold" mt={5}>
                    HOLLOGRAPH TECHNOLOGIES SERVICES
                </Text>
                <Container maxW="container.lg">
                    <Center mt={5}>
                        <Flex flexWrap="wrap" direction={isNotSmallerScreen ? "row" : "column"}>
                            <Text fontSize={isNotSmallerScreen ? "0.9rem" : "0.7rem"}>
                                Address: Mercy Plaza, #573, Melford Okilo Road, <br /> Yenizue-Gene, Yenagoa, Bayelsa State.
                            </Text>
                            <Spacer />
                            <Box>
                                <Text
                                 mt={isNotSmallerScreen ? "0" : "2"}
                                    ml={isNotSmallerScreen ? "5" : "0"}
                                    fontSize={isNotSmallerScreen ? "0.9rem" : "0.7rem"}
                                >
                                    {" "}
                                    Email: Hollographtecnologiesservice@gmail.com
                                </Text>
                                <Text
                                    fontSize={isNotSmallerScreen ? "0.9rem" : "0.7rem"}
                                    mt={isNotSmallerScreen ? "0" : "2"}
                                    textAlign="left"
                                    ml={isNotSmallerScreen ? "5" : "0"}
                                >
                                    {" "}
                                    Phone: +234-8037682526, 08171159496{" "}
                                </Text>
                            </Box>
                        </Flex>
                    </Center>
                </Container>
                <Flex flexWrap="wrap" direction={["column", "row"]}>
                    <Text margin="0,5" fontSize="10" fontWeight="light">
                        Powered by &copy; {new Date().getFullYear()} HTC | All rights reserved
                    </Text>
                    <Flex flex="1" flexWrap="wrap" justify={["flex-start", "flex-end"]}>
                        <Text margin="0.5" fontSize="10" fontWeight="light">
                            <span>Terms and Conditions</span> | <span>Privacy Policy</span>
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Stack>
    );
}
