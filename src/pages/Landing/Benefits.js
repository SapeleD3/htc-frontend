import { Box, Grid, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "@chakra-ui/media-query";

const data = [
    {
        id: 1,
        title: "ACQUIRE A SKILL SET",
        body: " We are obligated to giving our customers the required skill set to trade successfully in the forex market.",
    },
    {
        id: 2,
        title: "BE A PARTNER AND OWN A HOME YOURSELF",
        body: " It is our believe that it is possible for every of our partner to own a home of their own, and as such we are saying join us in building a brand that is capable of providing a better future for our partners.",
    },
    {
        id: 3,
        title: "BE FINANCIALLY INDEPENDENT",
        body: " With our unique trading strategies & Cycle-out programme you too can be financially independent.",
    },
];

const Benefits = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
            <Grid
                templateColumns={isNotSmallerScreen ? "repeat(3, 1fr)" : "repeat(1, 1fr)"}
                gap={isNotSmallerScreen ? 6 : ' '}
            >
                <Fade bottom>
                    {data.map((data) => (
                        <Box
                            p={6}
                            key={data.id}
                            boxShadow="0px 0px 25px 0px #00000026"
                            bg="white"
                            borderRadius="5px"
                            marginTop="50px"
                            h={isNotSmallerScreen ? '300px' : ' '}
                        >
                            <Text color='#463A80' fontSize='1rem' fontWeight='bold' mb={3}>{data.title}</Text>
                            <Text fontSize='1rem'>{data.body}</Text>
                        </Box>
                    ))}
                </Fade>
            </Grid>
        </Box>
    );
};

export default Benefits;
