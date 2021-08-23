import React from "react";
import Header from "../../components/Header";
import { Box, Container, Text, Stack } from "@chakra-ui/layout";

const Benefits = () => {
    return (
        <>
            <Stack>
                <Header />
                <section id="benefits" />
                <Box>
                    <Container maxW="container.lg">
                        <Text textAlign="center" fontWeight="bold" fontSize="1.5rem">
                            Why Choose Us
                        </Text>
                        <br/>
                        <Text textAlign="justify" fontSize="1rem" fontWeight="500">
                            Considering the current level of unemployment in Nigeria, compounded by
                            the adverse effect of Covid 19, it is important for not only young
                            people but for the general public not to rely solely on the Nigerian
                            government to provide jobs. Unfortunately, there are further predictions
                            of unemployment cases among youths especially to continue to rise.
                            <br />
                            <br />
                            Just to have an idea of this enormous problem in question, for example,
                            there are statistics indicating that, if you walk down a street in
                            Lagos, almost three in every ten young people you see are unemployed
                            <br />
                            <br />
                            At HTS we understand the effects of being unemployed or having only a
                            single string of income and as such our services are been dedicated
                            towards providing successful platforms which should in turn increase
                            your cash flow and assets as an individual or as a group.
                        </Text>

                        <Text>Acquire a skill set</Text>
                    </Container>
                </Box>
            </Stack>
        </>
    );
};
export default Benefits;
