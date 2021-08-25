import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Profile from "./Profile";

const Index = () => {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Profile</Tab>
                    <Tab>Bank Details</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                      <Profile/>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default Index;
