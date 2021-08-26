import { Box, Container } from "@chakra-ui/react";
import ReactPlayer from "react-player/lazy";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";
import TradingStrategies from "./TradingStrategies";
import Signals from "./Signals";
import Setup from "./Setup";

const HtsTv = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");
  

    return (
        <>
            <Box marginTop="20px" paddingBottom="20px">
                <Container maxW="container.lg">
                    <Box w="100%">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                            style={{ borderRadius: "20px" }}
                            controls="true"
                            width="100%"
                            height="auto"
                        />
                    </Box>

                    <Box marginTop="5%">
                        <Tabs size={isNotSmallerScreen ? "md" : "sm"} isFitted>
                            <TabList>
                                <Tab>Strategies</Tab>
                                <Tab>Signals</Tab>
                                <Tab>Mt4/Mt5 Setup</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <TradingStrategies />
                                </TabPanel>
                                <TabPanel>
                                    <Signals/>
                                </TabPanel>
                                <TabPanel>
                                   <Setup/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default HtsTv;
