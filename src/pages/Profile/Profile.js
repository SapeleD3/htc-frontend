import { Box, Container, Text, Avatar, Flex, Spinner, Input, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/media-query";

const Profile = () => {
    const user = useSelector((state) => state.auth.user);
    const [nameload, setNameLoad] = useState(true);
    const [userData, setUserData] = useState({});
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    useEffect(() => {
        user && setUserData(user);
        console.log(user);
        setNameLoad(false);
    }, [user]);
    return (
        <Box>
            <Container maxW="container.md">
                {nameload ? (
                    <Spinner />
                ) : (
                    <>
                        <Flex marginTop="20px" direction={isNotSmallerScreen ? "row" : "column"}>
                            <Avatar size="2xl" />
                            <Box marginLeft={isNotSmallerScreen ? "25px" : "10px"} w={isNotSmallerScreen ? "50%" : "100%"}>
                                <Text mt={3} color="#9C9C9C" fontSize="0.9rem" fontStyle="bold">
                                    Name
                                </Text>
                                <Input variant="flushed" value={userData.fullName} type="text" />

                                <Text mt={3} color="#9C9C9C" fontSize="0.9rem" fontStyle="bold">
                                    Phone
                                </Text>
                                <Input variant="flushed" value={userData.phoneNumber} type="text" />

                                <Text mt={3} color="#9C9C9C" fontSize="0.9rem" fontStyle="bold">
                                    Email
                                </Text>
                                <Input variant="flushed" value={userData.email} type="text" />

                                <Text mt={3} color="#9C9C9C" fontSize="0.9rem" fontStyle="bold">
                                    Username
                                </Text>
                                <Input variant="flushed" value={userData.userName} type="text" />

                                <Text mt={3} color="#9C9C9C" fontSize="0.9rem" fontStyle="bold">
                                    Your Link
                                </Text>
                                <Input variant="flushed" value={userData.myLink} type="text" />

                                <Button mt={3}>Save Changes</Button>
                            </Box>
                        </Flex>
                    </>
                )}
            </Container>
        </Box>
    );
};

export default Profile;
