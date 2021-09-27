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
} from "@chakra-ui/react";
import { IoCreateOutline } from "react-icons/io5";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useState, useEffect } from "react";
import {  videoEdit } from "../Post/post.api";
import { useParams } from 'react-router'
import { postEdit } from "../Post/post.api";


const EditContent = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const [name, setName] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [category, setCategory] = useState("");
    const [channel, setChannel] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const [edit, setEdit] = useState({});
    const { id } = useParams()

    const handleForm = async (id) => {
     
        setLoading(true);
        postEdit(
            setLoading,
            {
                name,
                videoUrl,
                category,
                channel,
            },
            toast,
            id
        );
        setName("");
        setVideoUrl("");
    };

    useEffect(() => {
    videoEdit(setLoading, id, setEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                            <Input type="text" defaultValue={edit.name} onChange={(e) => setName(e.target.value)} />
                        </Box>
                        <Box w="100%" ml={4}>
                            <Text mt={3} mb={2}>
                                Video Url
                            </Text>
                            <Input type="text" defaultValue={edit.videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
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

                    <Button mt={3} isDisabled={loading} onClick={(e) => handleForm(edit._id)}>
                        {" "}
                        Save{" "}
                    </Button>
                </Box>
            </Box>
        </Center>
    </Container>
    )
}

export default EditContent