import { Flex, Box, Container, Text, Spacer, Avatar, Image } from "@chakra-ui/react";
import Basic from "./Basic";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/arrowRight.png";
import arrowLeft from "../../assets/arrowLeft.png";
import { users, transactions } from "./Objects";

const AdminDashboard = () => {
    return (
        <Container maxW="container.xl">
            <Basic />

            <Box mt={8}>
                <Flex>
                    <Box p={6} w="100%" borderRadius="10px">
                        <Text>Latest Transactions </Text>
                        {transactions.map((data) => (
                            <Box mt={2} key={data.id}>
                                <Flex>
                                    {data.category === "withdraw" ? (
                                        <>
                                            <Image src={arrowRight} boxSize='50px'/>
                                            <Text fontSize='1rem' mt={3} ml={3}>{data.name} withdraws</Text>
                                            <Spacer />
                                            <Text fontSize='1rem' fontWeight='bold' mt={3} >${data.amount}</Text>
                                        </>
                                    ) : (
                                        <>
                                            <Image src={arrowLeft} boxSize='50px'/>
                                            <Text fontSize='1rem' mt={3} ml={3}>{data.name} earns</Text>
                                            <Spacer />
                                            <Text fontSize='1rem' fontWeight='bold' mt={3}>${data.amount}</Text>
                                        </>
                                    )}
                                </Flex>
                            </Box>
                        ))}
                    </Box>

                    <Box w="50%" bg="#FCFBFC" borderLeft="7px solid #F1F1F1" ml={3} p={6}>
                        <Text>New Users</Text>
                        {users.map((data) => (
                            <Box key={data.id} mt={3}>
                                <Flex>
                                    <Avatar size="md" />
                                    <Text mt={3} ml={5}>
                                        {data.name}
                                    </Text>
                                </Flex>
                            </Box>
                        ))}

                        <Link to="/admin/people">
                            <Text mt={2}>View more</Text>
                        </Link>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};

export default AdminDashboard;
