/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text,  useToast, Grid } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import ReactPlayer from "react-player/lazy";
import { useState, useEffect } from "react";
import { getVideos } from "./hts.api";

const TradingStrategies = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const toast = useToast();

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
                    .slice()
                    .reverse()
                    .map((data) => (
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
                    ))}
            </Grid>
        </Box>
    );
};

export default TradingStrategies;
