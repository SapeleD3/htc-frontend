import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Header from "../../components/Header";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack } from "@chakra-ui/react";
import CompanyProfile from "./CompanyProfile";
import Strategy from "./Strategy";
import Human from "./Human";

const About = () => {
    return (
        <>
        <Stack >
        <Header />
            <section id="about"/>
            <Box>
                <Container maxW="container.lg">
                    <Tabs isFitted>
                        <TabList>
                            <Tab fontWeight='bold'>Comapny Profile</Tab>
                            <Tab>Company Strategy</Tab>
                            <Tab>Human Resources</Tab>
                            <Tab>Company Management</Tab>
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
                        </TabPanels>
                    </Tabs>
                </Container>
            </Box>
        </Stack>
          
        </>
    );
};

export default About;
