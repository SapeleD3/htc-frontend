import React from "react";
import { Box, Container, Text, Button } from "@chakra-ui/react";
import { Badge, useDisclosure, Input, Flex } from "@chakra-ui/react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

const Transaction = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Withdraw</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex mb={1}>
                        <Text fontSize='1.2rem' fontWeight='bold'>Account Name:</Text>
                        <Text fontSize='1.2rem' fontWeight='bold' ml={3}>Roland Enola</Text>
                        </Flex>

                        <Flex  mb={1}>
                        <Text fontSize='1.2rem' fontWeight='bold'>Account Number:</Text>
                        <Text fontSize='1.2rem' fontWeight='bold' ml={3}>012345678</Text>
                        </Flex>

                        <Flex>
                        <Text fontSize='1.2rem' fontWeight='bold'>Bank:</Text>
                        <Text fontSize='1.2rem' fontWeight='bold' ml={3}>GTB</Text>
                        </Flex>

                        <Text mt={2}  fontSize='1.2rem' fontWeight='bold'>Amount</Text>
                        <Input type='text' placeholder='$50'/>
                       
                    </ModalBody>

                    <ModalFooter>
                        <Button>Confirm</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Container maxW="container.lg" marginTop='50px'>
                <Text fontSize='1rem' fontWeight='bold'>Availabe Balance: $40</Text>
                <Text fontSize='1rem' fontWeight='bold' mt={2}>Withdrawal Balance: $40</Text>
                <Button mt={5} onClick={onOpen}>Withdraw</Button>

                <Text mt={5} fontSize="1rem" fontWeight="bold">
                    {" "}
                    Transaction History{" "}
                </Text>
                <Text color="#9C9C9C" fontSize="0.9rem" fontStyle="bold">
                    View all your transactons below
                </Text>
                <Box
                    w="100%"
                    bg="#F6F6F8"
                    p={3}
                    mt={2}
                >
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

export default Transaction;
