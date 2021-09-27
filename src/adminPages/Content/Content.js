import {
    Box,
    Container,
    Text,
    Button,
    Flex,
    useToast,
    Grid,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useEffect, useState } from "react";
import { adminGet, videoDelete } from "../Post/post.api";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Content = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const history = useHistory();

    const fetchData = () => {
        adminGet(setLoading, toast, setVideos);
    };

    const handleDelete = async (id) => {
        await videoDelete(setLoading, id);
        await adminGet(setLoading, toast, setVideos);
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container maxW="container.xl">
            <Box mt={9} loading={loading}>
                <Text mb={5}>Videos </Text>
                <Grid
                    templateColumns={isNotSmallerScreen ? "repeat(4, 1fr)" : "repeat(1, 1fr)"}
                    gap={6}
                >
                    {videos
                        .slice()
                        .reverse()
                        .map((data) => (
                            <Box w="100%" mb={8} key={data._id} boxSize="350px">
                                <ReactPlayer
                                    url={data.videoUrl}
                                    width="auto"
                                    height="auto"
                                    style={{ borderRadius: "20px" }}
                                    controls="true"
                                />
                                <Link to={`/admin/watch/${data._id}`}>
                                    <Text fontWeight="bold" mt="3">
                                        {data.name}
                                    </Text>
                                    <Text mt="1">Category: {data.category}</Text>
                                    <Text mt="1" mb="2">
                                        Channel: {data.channel}
                                    </Text>
                                </Link>
                                <Flex>
                                    <Button
                                        onClick={(e) => history.push(`/admin/edit/${data._id}`)}
                                        bg="transparent"
                                        color="black"
                                        colorScheme='blue'
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={(e) => handleDelete(data._id)}
                                        bg="transparent"
                                        color="black"
                                    >
                                        Delete
                                    </Button>
                                </Flex>
                            </Box>
                        ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Content;
