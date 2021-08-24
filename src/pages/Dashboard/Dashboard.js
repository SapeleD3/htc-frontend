import React from "react";
import { Container, Text, Box, Spacer, Spinner, Flex, Progress } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GiWallet } from "react-icons/gi";
import { Table, Thead, Tbody, Tr, Th, Td, } from "@chakra-ui/react";
import { MdPayment } from 'react-icons/md'

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const [nameload, setNameLoad] = useState(true);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        user && setUserData(user);
        setNameLoad(false);
    }, [user]);

    return (
        <Box pb={5} mt={5}>
            <Container maxW="container.lg">
                <Flex flexWrap='wrap' direction={["column", "row"]}>
                    <Box>
                        {nameload ? (
                            <Spinner />
                        ) : (
                            <Text fontSize="24px" fontWeight="700">
                                Hi {userData.fullName},
                            </Text>
                        )}
                        <Text fontSize="24px" fontWeight="bold">
                            {" "}
                            Current Level: 1
                        </Text>
                        <Progress colorScheme="#6C5ECE" height="21px" value={50} />
                    </Box>
                    <Spacer />
                    <Box bg="#6C5ECE" borderRadius="10px" p={4}  ml={5}>
                        <Flex>
                            <GiWallet style={{ color: "#fff", fontSize: "59px" }} />
                            <Text fontSize="24px" fontStyle="bold" color="#fff " ml={3}>
                                Wallet <br /> Balance
                            </Text>
                            <Spacer />
                            <Text fontStyle="bold" color="#55FF2B" fontSize="48px" ml={3}>
                                $40
                            </Text>
                        </Flex>
                    </Box>
                </Flex>

                <Flex mt={5} >
                    <Box p={3} bg="#433976" borderRadius="10px" h="319px" w="150%">
                        <Flex>
                            <Box marginTop='120px'>
                                <Text fontSize='18px' fontWeight='700' color='#fff'>Invite our friends</Text>
                                <Text fontSize='14px' fontWeight='700' color='#fff'>Copy referral link</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box p={3} bg="#6C5ECE" borderRadius="10px" w="100%" ml={5}>
                        <MdPayment style={{ fontSize:'150px', color:'#fff'}}/>
                        <Text fontStyle='bold' fontWeight='bold' fontSize='24px' ml={3} color='#fff'>Transactions</Text>
                        <Text fontStyle='bold' fontSize='60px' ml={3} color='#fff'>3</Text>
                    </Box>
                </Flex>

                <Box
                    w="100%"
                    bg="#fff"
                    p={3}
                    boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
                    borderRadius="5px"
                    mt={5}
                >
                    <Text color="#262626" fontSize="24px" fontStyle="bold">
                        History
                    </Text>
                    <Text color="#9C9C9C" fontSize="18px" fontStyle="bold">
                        Your payment history
                    </Text>

                    <Table variant="striped" style={{ fontFamily:'Comfortaa', fontSize:'18px'}}>
                        <Thead>
                            <Tr>
                                <Th>Date</Th>
                                <Th>Amount</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>28th Aug, 2021</Td>
                                <Td>$40</Td>
                                <Td >Completed</Td>
                            </Tr>
                            <Tr>
                                <Td>28th July, 2021</Td>
                                <Td>$40</Td>
                                <Td >Completed</Td>
                            </Tr>
                            <Tr>
                                <Td>28th June, 2021</Td>
                                <Td>$40</Td>
                                <Td>Uncompleted</Td>
                            </Tr>
                        </Tbody>
                     
                    </Table>
                </Box>
            </Container>
        </Box>
    );
};

export default Dashboard;
