import React from "react";
import { Box, Container, Text, Badge } from "@chakra-ui/layout";
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
                <Box bg="#F6F6F8"  p={3} mt={5}>
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

export default Referral;
