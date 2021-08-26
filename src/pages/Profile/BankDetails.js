import { Box, Container, Text, Flex, Input, Button } from "@chakra-ui/react";
import { AiFillBank } from "react-icons/ai";

const BankDetails = () => {
    return (
        <>
            <Box marginTop="100px">
                <Container maxW="container.md">
                    <Flex justifyContent="center" height="100%" flexDirection="column">
                        <Flex>
                            <AiFillBank size={30} />
                            <Text ml={5} mt={1} fontSize="1.2rem" fontWeight="bold">
                                Fill in your bank details
                            </Text>
                        </Flex>
                        <Box marginTop="20px">
                            <Text fontSize="1rem" mb={2} fontWeight="bold">
                                Account Name
                            </Text>
                            <Input type="text" mb={5} />

                            <Text fontSize="1rem" mb={2} fontWeight="bold">
                                Account Number
                            </Text>
                            <Input type="text" mb={5} />

                            <Text fontSize="1rem" mb={2} fontWeight="bold">
                                Bank Name
                            </Text>
                            <Input type="text" mb={5} />

                            <Button> Save </Button>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    );
};
export default BankDetails;
