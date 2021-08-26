import React from "react";
import { Box, Container, Text,  Avatar } from "@chakra-ui/react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const Referral = () => {
    return (
        <Box mt={5}>
            <Container maxW="container.lg">
                <Box>
                    <Text color="#262626" fontSize="24px" fontStyle="bold">
                        Your referral link
                    </Text>
                </Box>

                <Box marginTop="50px">
                    <Text color="#262626" fontSize="24px" fontStyle="bold">
                        People
                    </Text>
                    <Text color="#9C9C9C" fontSize="18px" fontStyle="bold">
                        Users Registered under you
                    </Text>
                </Box>
                <Box bg="#F6F6F8" p={3} mt={5}>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Phone Number</TableCell>
                                    <TableCell align="left">Level</TableCell>
                                    <TableCell align="left">Referral link</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Avatar size="sm" />
                                    </TableCell>
                                    <TableCell align="left">Sapele Moses</TableCell>
                                    <TableCell align="left">09083456781</TableCell>
                                    <TableCell align="left">Basic</TableCell>
                                    <TableCell align="left"> https://localhost:3000/moses</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        <Avatar size="sm" />
                                    </TableCell>
                                    <TableCell align="left">Sapele Moses</TableCell>
                                    <TableCell align="left">09083456781</TableCell>
                                    <TableCell align="left">Basic</TableCell>
                                    <TableCell align="left"> https://localhost:3000/moses</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Box>
    );
};

export default Referral;
