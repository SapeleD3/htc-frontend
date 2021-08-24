import React from "react";
import { Box, Container, Text } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Referral = () => {
    return (
        <Box mt={5}>
            <Container maxW="container.lg">
                <Box>
                    <Text color="#262626" fontSize="24px" fontStyle="bold">Your referral link</Text>
                </Box>

                <Box marginTop="50px">
                    <Text color="#262626" fontSize="24px" fontStyle="bold">
                        People
                    </Text>
                    <Text color="#9C9C9C" fontSize="18px" fontStyle="bold">
                        Users Registered under you
                    </Text>
                </Box>
                <Box bg="#fff" boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)" p={3} mt={5}>
                    <Table variant="striped">
                        <Thead>
                            <Tr style={{ fontFamily: "Comfartaa" }}>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th isNumeric>Phone Number</Th>
                                <Th>Referral Link</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Oyinkuro Moses</Td>
                                <Td>mosalah@mail.com</Td>
                                <Td isNumeric>09087654332</Td>
                                <Td>mosalah@mail.com</Td>
                            </Tr>
                            <Tr>
                                <Td>Oyinkuro Moses</Td>
                                <Td>mosalah@mail.com</Td>
                                <Td isNumeric>09087654332</Td>
                                <Td>mosalah@mail.com</Td>
                            </Tr>
                            <Tr>
                                <Td>Oyinkuro Moses</Td>
                                <Td>mosalah@mail.com</Td>
                                <Td isNumeric>09087654332</Td>
                                <Td>mosalah@mail.com</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Container>
        </Box>
    );
};

export default Referral;
