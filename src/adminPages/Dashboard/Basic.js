import { Grid, Box, Text } from "@chakra-ui/react";

const info = [
    {
        id: 1,
        text: "Registered Users",
        color: "#FEF8E6",
        mainColor: "#84794E",
        primaryColor: "#BFB383",
        total: 27,
    },
    {
        id: 1,
        text: "Paid Users",
        color: "#DCF7E9",
        mainColor: "#5D9179",
        primaryColor: "#A7C7B7",
        total: 10,
    },
    {
        id: 3,
        text: "Transactions",
        color: "#FFE1E2",
        mainColor: "#B48485",
        primaryColor: "#C39A9B",
        total: 30,
    },
];

const Basic = () => {
    return (
        <Box w="100%">
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                {info.map((data) => (
                    <Box key={data.id} w="100%" p={6} bg={data.color} borderRadius="5px">
                        <Text color={data.mainColor} fontWeight="bold" fontSize="1.2rem">
                            {data.text}
                        </Text>
                        <Text color={data.primaryColor} fontSize="2rem" mt={2}>
                            {data.total}
                        </Text>
                    </Box>
                ))}
            </Grid>{" "}
        </Box>
    );
};

export default Basic;
