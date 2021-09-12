import { Box, Flex, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Grid, Center } from "@chakra-ui/react";

const obj = [
    {
        id: 1,
        text: "Provide Skill Set Acquisition ",
    },
    {
        id: 2,
        text: "Reduce Unemployement",
    },
    {
        id: 3,
        text: "Promote Financial Freedom ",
    },
    {
        id: 4,
        text: " Enable Financial Freedom ",
    },
];

const Objectives = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box marginTop="50px">
            <Grid
                templateColumns={isNotSmallerScreen ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
                gap={6}
            >
                <Fade bottom>
                    {obj.map((data) => (
                        <Box
                            key={data.id}
                            className='members-box'
                            p={6}
                            mt={isNotSmallerScreen ? "0" : "3"}
                            borderTop="4px solid #463A80"
                            borderBottom="4px solid #463A80"
                            boxShadow="0px 0px 25px 0px #00000026"
                            bg="white"
                        >
                            <Center>
                                <Box
                                    w="50px"
                                    h="50px"
                                    borderRadius="50%"
                                    border="1px solid #463A80"
                                    mb={5}
                                >
                                    <Text textAlign="center" fontSize='1.5rem' mt={1}> {data.id} </Text>
                                </Box>
                            </Center>
                            <Text textAlign="center" textTransform="uppercase">
                                {" "}
                                {data.text}
                            </Text>
                        </Box>
                    ))}
                </Fade>
            </Grid>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}></Flex>
        </Box>
    );
};

export default Objectives;
