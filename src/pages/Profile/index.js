import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import BankDetails from "./BankDetails";
import Profile from "./Profile";

const Index = () => {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab fontSize='1rem' fontWeight='bold'>Profile</Tab>
                    <Tab fontSize='1rem' fontWeight='bold'>Bank Details</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                      <Profile/>
                    </TabPanel>
                    <TabPanel>
                        <BankDetails/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default Index;
