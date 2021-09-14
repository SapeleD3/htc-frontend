import { Box, Container, Text, Button, Input, Select, Center, Flex, useToast } from "@chakra-ui/react";
import { IoCreateOutline } from "react-icons/io5";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useState } from "react";
import { adminCreate } from "./post.api";

const Post = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const [name, setName] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [category, setCategory] = useState("");
    const [channel, setChannel] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const handleForm = (e) => {
        e.preventDefault()
        setLoading(true);
        adminCreate(
            setLoading,
            {
                name,
                videoUrl,
                category,
                channel
            },
            toast
        )
    }

    return (
        <Container maxW="container.xl">
            <Center>
                <Box
                    border="1px solid #C7C7C7"
                    w={isNotSmallerScreen ? "50%" : "100%"}
                    marginTop={isNotSmallerScreen ? "2%" : "15%"}
                >
                    <Box p={6} borderBottom="1px solid #C7C7C7">
                        <Flex>
                            <IoCreateOutline size={25} />
                            <Text ml={2}> Create </Text>
                        </Flex>
                    </Box>

                    <Box p={6}>
                        <Text mt={3} mb={2}>
                            Title{" "}
                        </Text>
                        <Input type="text" onChange={(e) => setName(e.target.value)} />

                        <Text mt={3} mb={2}>
                            Video Url
                        </Text>
                        <Input type="text" onChange={(e) => setVideoUrl(e.target.value)} />

                        <Text mt={3} mb={2}>
                            Category
                        </Text>
                        <Select
                            placeholder="Select Category..."
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value='trading-strategies'>Trading Strategies</option>
                        </Select>

                        <Text mt={3} mb={2}>
                            Channel
                        </Text>
                        <Select
                            placeholder="Select Channel..."
                            onChange={(e) => setChannel(e.target.value)}
                        >
                            <option value='hts-tv'>HTS TV</option>
                            <option value='hts-academy'>HTS Academy</option>
                        </Select>

                        <Button mt={3} isDisabled={loading} onClick={handleForm}> Save </Button>
                    </Box>
                </Box>
            </Center>
        </Container>
    );
};

export default Post;
