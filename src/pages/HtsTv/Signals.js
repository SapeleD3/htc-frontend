/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, Grid, useToast } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import ReactPlayer from "react-player/lazy";
import { useState, useEffect } from "react";
import { getVideos } from "./hts.api";
import { Link } from "react-router-dom";

const Signals = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    const category = "signal";

    const fetchData = async () => {
        getVideos(setLoading, toast, setVideos);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Box loading={loading}>
            <Grid
                templateColumns={isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
                gap={6}
            >
                {videos
                    .filter((v) => v.category === category)
                    .slice()
                    .reverse()
                    .map((data) => (
                        <Link to={`/watch/${data._id}`}>
                            <Box w="100%" mb={isNotSmallerScreen ? "0" : "5"} key={data._id}>
                                <ReactPlayer
                                    url={data.videoUrl}
                                    width="auto"
                                    height="auto"
                                    style={{ borderRadius: "20px" }}
                                    controls="true"
                                />

                                <Text>{data.name}</Text>
                            </Box>
                        </Link>
                    ))}
            </Grid>
        </Box>
    );
};

export default Signals;
