import { Box, Text, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import ReactPlayer from "react-player/lazy";

const Signals = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
       
            <Flex direction={isNotSmallerScreen ? "row" : "column"}>
                <Box w="100%" mb={isNotSmallerScreen ? "0" : "5"}>
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        width="auto"
                        height="auto"
                        style={{ borderRadius: "20px" }}
                        controls="true"
                    />

                    <Text>Strategy 1</Text>
                </Box>

                <Box
                    ml={isNotSmallerScreen ? "5" : "0"}
                    mb={isNotSmallerScreen ? "0" : "5"}
                    w="100%"
                >
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        width="auto"
                        height="auto"
                        style={{ borderRadius: "20px" }}
                        controls="true"
                    />

                    <Text>Strategy 1</Text>
                </Box>

                <Box ml={isNotSmallerScreen ? "5" : "0"} w="100%">
                    <ReactPlayer
                        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                        width="auto"
                        height="auto"
                        style={{ borderRadius: "20px" }}
                        controls="true"
                    />

                    <Text>Strategy 1</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Signals;
