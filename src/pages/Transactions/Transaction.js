import React from "react";
import { Box, Container, Text, Button } from "@chakra-ui/react";
import { Badge, useDisclosure, Input } from "@chakra-ui/react";
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
                        <Text>Account Name</Text>
                        <Input type='text' placeholder='Roland Enola'/>
                        <Text mt={2}>Account Number</Text>
                        <Input type='text' placeholder='012345678'/>
                        <Text mt={2}>Bank</Text>
                        <Input type='text' placeholder='GTB'/>
                       
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
