import { Box, Container, Text, Button, Input, Select, Center, Flex } from "@chakra-ui/react";
import { IoCreateOutline } from "react-icons/io5";
import { useMediaQuery  } from "@chakra-ui/media-query";

const Post = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Container maxW="container.xl">
            <Center>
                <Box border="1px solid #C7C7C7" w={isNotSmallerScreen ? "50%" : "100%"} marginTop={isNotSmallerScreen ? "5%" : "15%"}>
                    <Box p={6} borderBottom="1px solid #C7C7C7">
                        <Flex>
                            <IoCreateOutline size={25}/>
                            <Text ml={2}> Create </Text>
                        </Flex>
                    </Box>

                    <Box p={6}>
                        <Text mt={3} mb={2}>
                            Title{" "}
                        </Text>
                        <Input type="text" />

                        <Text mt={3} mb={2}>
                            Category
                        </Text>
                        <Select placeholder="Select Category..."></Select>

                        <Text mt={3} mb={2}>
                            Channel
                        </Text>
                        <Select placeholder="Select Channel..." />

                        <Button mt={3}> Save </Button>
                    </Box>
                </Box>
            </Center>
        </Container>
    );
};

export default Post;
