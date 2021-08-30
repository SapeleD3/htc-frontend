import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";


const Human = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
            <Container maxW="container.lg">
                <Text textAlign={isNotSmallerScreen ? "justify" : "left"} fontSize='1rem' fontWeight='500'>
                    We offer an opportunity to those who are eager to be involved in our success
                    and, at the same time, wish to obtain unique professional experience/exposure.
                    By inference, we offer jobs to creative and enterprising people that would build
                    their careers within the operational preview of our services.
                    <br />
                    <br/>
                    We offers the following to our employees:
                    <br />
                    <ul style={{ lineHeight:'40px'}}>
                        <li>
                            {" "}
                            permanent professional growth through further education and training,
                            participation in conferences and professional seminars.
                        </li>

                        <li>
                            {" "}
                            excellent working conditions with first-class technical equipment.{" "}
                        </li>
                        <li>
                            broad social programme – standard medical care, recreational at own
                            recreation facilities, reconditioning health resorts, individual care
                            for employees, organization of cultural, sports and social events,
                            provision of quality catering services at the workplace with highest
                            possible contribution from the employer.{" "}
                        </li>

                        <li>
                            {" "}
                            contribution of the employer to the pension system (PENCOM initiative),{" "}
                        </li>
                        <li>
                            {" "}
                            financial contribution towards employees' leisure (vacations).
                            •sponsors holiday trips for employees and families. In return, we
                            expect thus from our employees:{" "}
                        </li>
                        <li> flexibility and goal orientedness, </li>

                        <li>reliability and responsibility, </li>

                        <li> integrity and honesty, </li>

                        <li> independence and activity, </li>

                        <li> team work, and </li>

                        <li> accountability. </li>
                    </ul>
                </Text>
            </Container>
        </Box>
    );
};

export default Human;
