/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideos } from "./hts.api";
import { Flex, Box, Text, useToast, Container } from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy";
import { useMediaQuery } from "@chakra-ui/media-query";
import { BiArrowBack } from "react-icons/bi";
import { PROTECTED_PATHS } from "../../app/constants";
import { useHistory } from "react-router";

const Watch = () => {
    const { id } = useParams();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const history = useHistory();

    const fetchData = async () => {
        getVideos(setLoading, toast, setVideos);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Container maxW="container.lg">
            <Box loading={loading}>
                <Box
                   _hover={{ cursor: "pointer" }}
                    onClick={() => {
                        history.push(PROTECTED_PATHS.HTSTV);
                    }}
                >
                    <Flex mb={4}>
                        <Box mt={1}>
                            <BiArrowBack size={25} />
                        </Box>
                        <Text fontSize="1.2rem" mt={1}>
                            Back
                        </Text>
                    </Flex>
                </Box>

                {videos
                    .filter((v) => v._id === id)
                    .map((data) => (
                        <Box h={isNotSmallerScreen ? "80vh" : "50vh"}>
                            <ReactPlayer
                                url={data.videoUrl}
                                width="auto"
                                height="100%"
                                style={{ borderRadius: "20px" }}
                                controls="true"
                            />
                            {data.name}
                        </Box>
                    ))}
            </Box>
        </Container>
    );
};

export default Watch;
