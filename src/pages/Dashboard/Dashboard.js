import React from "react";
import { Container, Text, Box, Spacer, Spinner, Flex, Progress, Badge } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GiWallet } from "react-icons/gi";
import { RiBankFill } from 'react-icons/ri'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
import { FaNetworkWired } from "react-icons/fa";

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    const [nameload, setNameLoad] = useState(true);
    const [userData, setUserData] = useState({});
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    useEffect(() => {
        user && setUserData(user);
        console.log(user);
        setNameLoad(false);
    }, [user]);

    return (
        <Box pb={5} mt={5}>
            <Container maxW="container.lg">
                <Flex flexWrap="wrap" direction={["column", "row"]}>
                    <Box>
                        {nameload ? (
                            <Spinner />
                        ) : (
                            <>
                                <Text fontSize="24px" fontWeight="700">
                                    Hi {userData.fullName},
                                </Text>

                                <Text color="#433976" fontSize="15px" fontStyle="bold">
                                    @ {userData.userName}
                                </Text>
                            </>
                        )}
                        <Text fontSize="18px" fontWeight="bold">
                            {" "}
                            Current Level: 1
                        </Text>
                        <Progress colorScheme="blue" height="21px" value={50} />
                    </Box>
                </Flex>

                <Box w="100%" >
                    <Flex
                        mt={5}
                        direction={isNotSmallerScreen ? "row" : "column"}
                     
                    >
                        <Box p={3} bg="#433976" borderRadius="10px"   w={isNotSmallerScreen ? '100%' : '100%'}>
                            <Flex>
                                <Box marginTop="25px">
                                    <Text fontSize="18px" fontWeight="700" color="#fff">
                                        Invite our friends
                                    </Text>
                                    <Text fontSize="14px" fontWeight="700" color="#fff">
                                        Copy referral link
                                    </Text>
                                    <Text as={Link} fontSize="14px" fontWeight="700" color="#fff">
                                        {userData.myLink}
                                    </Text>
                                </Box>
                                <Spacer />
                                <FaNetworkWired
                                    style={{
                                        fontSize: "90px",
                                        marginLeft: "20px",
                                        marginTop: "20px",
                                    }}
                                    color="white"
                                />
                            </Flex>
                        </Box>

                        <Box
                            p={3}
                            bg="#F6F6F8"
                            borderRadius="10px"
                            w={isNotSmallerScreen ? '100%' : '100%'}
                            ml={isNotSmallerScreen ? "5" : "0"}
                            mt={isNotSmallerScreen ? "0" : "4"}
                        >
                           
                            <RiBankFill style={{ fontSize: "59px", color: "#0D0D0F" }} />
                            <Text fontStyle="bold" fontSize="2.5rem" ml={3} color="#0D0D0F">
                                3
                            </Text>
                            <Text
                                fontStyle="bold"
                                fontWeight="bold"
                                fontSize="0.9rem"
                                color="#9A9A9C"
                            >
                                Transactions
                            </Text>
                        </Box>

                        <Box
                            bg="#6C5ECE"
                            borderRadius="10px"
                            w={isNotSmallerScreen ? '100%' : '100%'}
                            p={4}
                            ml={isNotSmallerScreen ? "5" : "0"}
                            mt={isNotSmallerScreen ? "0" : "4"}
                        >
                            <GiWallet style={{ color: "#fff", fontSize: "29px" }} />
                            <Text fontSize="24px" fontStyle="bold" color="#fff " ml={3}>
                                Wallet Balance
                            </Text>
                            <Spacer />
                            <Text fontStyle="bold" color="#55FF2B" fontSize="48px" ml={3}>
                                $40
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                <Box
                    bg="#F6F6F8"
                    p={3}
                    borderRadius="5px"
                    mt={5}
                >
                    <Text color="#262626" fontSize="24px" fontStyle="bold">
                        History
                    </Text>
                    <Text color="#9C9C9C" fontSize="18px" fontStyle="bold">
                        Your payment history
                    </Text>

                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Withdrawal
                                    </TableCell>
                                    <TableCell align="right">28th Agu, 2021</TableCell>
                                    <TableCell align="right">$40</TableCell>
                                    <TableCell align="right">
                                        <Badge colorScheme="green">Completed</Badge>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Withdrawal
                                    </TableCell>
                                    <TableCell align="right">28th Agu, 2021</TableCell>
                                    <TableCell align="right">$40</TableCell>
                                    <TableCell align="right">
                                        <Badge colorScheme="red">Uncompleted</Badge>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    );
};

export default Dashboard;
