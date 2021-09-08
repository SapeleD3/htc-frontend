import { Box, Container, Input, Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const People = () => {
    return (
        <Container maxW="container.xl">
            <Box w="100%" marginTop="50px">
                <Flex>
                    <Box w="30%">
                        <Input type="text" placeholder="Search..." />
                    </Box>

                    <Spacer />
                    <Button bg="transparent" border="1px solid #00000026" color="#000000">
                        {" "}
                        Download{" "}
                    </Button>
                </Flex>

                <Box mt={9}>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Phone No.</TableCell>
                                    <TableCell align="right">Username</TableCell>
                                    <TableCell align="right">Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Roland Enola
                                    </TableCell>
                                    <TableCell align="right">aloneroland@gmail.com</TableCell>
                                    <TableCell align="right">07059606487</TableCell>
                                    <TableCell align="right">alone</TableCell>
                                    <TableCell align="right">1</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container>
    );
};

export default People;
