import React from "react";
import { Box, Text, Container } from "@chakra-ui/react";

const CompanyProfile = () => {
    return (
        <>
            <Box>
                <Container maxW="container.lg">
                    <Text textAlign="justify" fontSize="1rem" fontWeight="500">
                        Holograph Technology Services Ltd is an indigenous Nigerian company
                        registered under the Companies and Allied Matters Act 1990. <br /> <br />
                        Holograph Technology Services Ltd is both a construction and Forex Training
                        institute that performs both Civil, Mechanical, Electrical, General
                        Procurement and Forex Trading services. The company is also into Civil/Water
                        Activities (Building Construction, Building Rehabilitation/Renovations,
                        Drainages, Culverts, Flood/Irrigation Control, Fencing, Road
                        Construction/Maintenance, Landscaping, Water Boreholes/Reticulations, Solar
                        Powered Borehole, etc.).
                        <br /> <br />
                        The main essence of establishing Holograph Technology Services Ltd is to
                        carry out genuine businesses within and outside the shores of Nigeria. It
                        has in its membership experienced and tested Project Manager, Civil
                        Engineers, Mechanical Engineers, Electrical Engineers, Land Surveyors,
                        Quantity Surveyors, and Accountants/Financial Managers and well experienced
                        contingent of successful Forex Traders.
                        <br /> <br />
                        The current scope of Holograph Technology Services Ltd operations is wide
                        and it includes all activities related to Construction and Forex Trading.
                    </Text>
                    <br /> <br />
                    <Text fontWeight="bold" fontSize="1.2rem">
                        AREAS OF SPECILIZATION ON CONSTRUCTION:{" "}
                    </Text>{" "}
                    <br />
                    <ol style={{ fontWeight: "500", fontSize: "1rem" }}>
                        <li> Youths Development through Training</li>
                        <li> Business Management (Entrepreneurship)</li>
                        <li> The sales and suppliers of Petroleum Products;</li>
                        <li> Services in Engineering;</li>
                        <li> Procurement;</li>
                        <li> Labour Supply; </li>
                        <li>
                            Building and Civil engineering works (haulage of sand, supplies of
                            chippings, slabs etc.){" "}
                        </li>
                        <li> The Civil/Structural Engineering works include: </li>
                        <ul>
                            <li> Road construction / Repair Drainages / Storm Discharge </li>
                            <li> Construction and technical services,</li>
                            <li> Construction of Flare Stack and Bond Wall,</li>
                            <li> Piling Jobs,</li>
                            <li> Shoreline Protection Works, Etc,,</li>
                        </ul>
                    </ol>
                    <Box marginTop="50px" pb={5}>
                        <Text fontWeight="bold" fontSize="1.2rem">
                            {" "}
                            Risk Management System{" "}
                        </Text>
                        <br />
                        <Text textAlign="justify" fontSize="1rem">
                            At HTS, it’s our believe that in order for an individual to become a
                            successful trader, he or she must have a good understanding on the most
                            effective risk management strategies and as such, this system is
                            developed to streamline and standardize the operational processes,
                            resulting in reducing loses, improving efficiency and increasing
                            customer retention.
                        </Text>
                        <br />
                        <Text fontWeight="bold" fontSize="1.2rem">
                            Buyer/Seller Integration System
                        </Text>
                        <br />
                        <Text fontSize="1rem" textAlign="justify">
                            BSI system is an automated system that matches buy and sell orders from
                            different market participants. It connects individual traders, major
                            brokerages and tier-1 liquidity providers in the centralized order book
                            so that they can trade directly among themselves without having to go
                            through a middleman. This trading model enables the participants to
                            enjoy transparent pricing, ultra-tight spreads and fast execution.
                        </Text>
                        <br />
                        <Text fontWeight="bold" fontSize="1.2rem">
                            Social media Platform
                        </Text>
                        <br />
                        <Text textAlign="justify" fontSize="1rem">
                            Our SMP platform (which includes, Youtube I.G, FB, Telgram, WhatsApp
                            etc.), is designed to create an interactive room between the
                            organization and its customers. This means every customer automatically
                            receives updates and messages from the organization and they too can as
                            well contribute or join whatever discussion that is ongoing.
                        </Text>

                        <br />
                        <Text fontWeight="bold" fontSize="1.2rem">
                            Value-Added Services
                        </Text>
                        <br />
                        <Text textAlign="justify" fontSize="1rem">
                            HTS is dedicated to providing the fastest and most updated global
                            financial information and analysis services, including professional
                            strategy analysis, economic calendar, instant news, real-time quotes and
                            data feed.
                        </Text>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default CompanyProfile;
