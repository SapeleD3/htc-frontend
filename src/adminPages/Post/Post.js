/* eslint-disable react-hooks/exhaustive-deps */
import {
    Box,
    Container,
    Text,
    Button,
    Input,
    Select,
    Center,
    Flex,
    useToast,
    Grid,
    IconButton,
    Spacer
} from "@chakra-ui/react";
import { IoCreateOutline } from "react-icons/io5";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useEffect, useState } from "react";
import { adminCreate, adminGet, videoDelete } from "./post.api";
import ReactPlayer from "react-player/lazy";
import { AiFillDelete } from "react-icons/ai";

const Post = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const [name, setName] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [category, setCategory] = useState("");
    const [channel, setChannel] = useState("");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const fetchData = () => {
        adminGet(setLoading, toast, setVideos);
    };

    const handleDelete = async (id) => {
        await videoDelete(setLoading, id);
        await adminGet(setLoading, toast, setVideos);
    };
    const handleForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        adminCreate(
            setLoading,
            {
                name,
                videoUrl,
                category,
                channel,
            },
            toast
        );
        setName('')
        setVideoUrl('')
        await adminGet(setLoading, toast, setVideos);
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                        <Flex>
                            <Box w="100%">
                                <Text mt={3} mb={2}>
                                    Title{" "}
                                </Text>
                                <Input type="text" onChange={(e) => setName(e.target.value)} />
                            </Box>
                            <Box w="100%" ml={4}>
                                <Text mt={3} mb={2}>
                                    Video Url
                                </Text>
                                <Input type="text" onChange={(e) => setVideoUrl(e.target.value)} />
                            </Box>
                        </Flex>
                        <Flex>
                            <Box w="100%">
                                <Text mt={3} mb={2}>
                                    Category
                                </Text>
                                <Select
                                    placeholder="Select Category..."
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="trading-strategies">Trading Strategies</option>
                                    <option value="signal">Signal</option>
                                </Select>
                            </Box>
                            <Box w="100%" ml={4}>
                                <Text mt={3} mb={2}>
                                    Channel
                                </Text>
                                <Select
                                    placeholder="Select Channel..."
                                    onChange={(e) => setChannel(e.target.value)}
                                >
                                    <option value="hts-tv">HTS TV</option>
                                    <option value="hts-academy">HTS Academy</option>
                                </Select>
                            </Box>
                        </Flex>

                        <Button mt={3} isDisabled={loading} onClick={handleForm}>
                            {" "}
                            Save{" "}
                        </Button>
                    </Box>
                </Box>
            </Center>

            <Box mt={9}>
                <Text mb={5}>Videos </Text>
                <Grid templateColumns={isNotSmallerScreen ? "repeat(4, 1fr)" : "repeat(1, 1fr)"} gap={6}>
                    {videos.slice().reverse().map((data) => (
                        <Box w="100%" mb={8} key={data._id}>
                            <ReactPlayer
                                url={data.videoUrl}
                                width="auto"
                                height="auto"
                                style={{ borderRadius: "20px" }}
                                controls="true"
                            />
                            <Text>Name: {data.name}</Text>
                            <Text>Category: {data.category}</Text>
                            <Text>Channel: {data.channel}</Text>
                            <Flex>
                                <Button>Edit</Button>
                                <Spacer/>
                                <IconButton
                            bg='transparent'
                            color='black'
                                onClick={(e) => handleDelete(data._id)}
                                isLoading={loading}
                                aria-label="Search database"
                                icon={<AiFillDelete />}
                            />
                                </Flex>
                        
                        </Box>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Post;
