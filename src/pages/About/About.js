import React, {useEffect} from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../../components/Header";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack } from "@chakra-ui/react";
import CompanyProfile from "./CompanyProfile";
import Strategy from "./Strategy";
import Human from "./Human";
import Management from "./Management";
import { useMediaQuery } from "@chakra-ui/media-query";
import './index.css'


const About = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    useEffect(() => {
        window.scrollTo(0, 0);
       }, [])

    return (
        <>
        <Stack >
        <Header />
        <Box className='jumbot'/>
            <Box>
                <Container maxW="container.lg">
                    <Tabs size={isNotSmallerScreen ? "md" : "sm"} isFitted >
                        <TabList>
                            <Tab fontWeight='bold' fontSize={isNotSmallerScreen ? "1rem" : "0.7rem"}> Profile</Tab>
                            <Tab fontSize={isNotSmallerScreen ? "1rem" : "0.7rem"}>Strategy</Tab>
                            <Tab fontSize={isNotSmallerScreen ? "1rem" : "0.7rem"}>Human Resources</Tab>
                            <Tab fontSize={isNotSmallerScreen ? "1rem" : "0.7rem"}>Management</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <CompanyProfile />
                            </TabPanel>
                            <TabPanel>
                               <Strategy/>
                            </TabPanel>
                            <TabPanel>
                           <Human/>
                            </TabPanel>
                            <TabPanel>
                           <Management/>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Container>
            </Box>
        </Stack>
          
        </>
    );
};

export default About;
