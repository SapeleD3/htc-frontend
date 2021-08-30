import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/media-query";


const Strategy = () => {
    const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

    return (
        <Box>
            <Container maxW="container.lg">
                <Text textAlign={isNotSmallerScreen ? "justify" : "left"} fontSize="1rem" fontWeight="500">
                    Our strategy is prepared in accordance with the expected development in the
                    industry as time dictates. Holograph Technology Services Ltd has set its targets
                    in such a way as to fully cope with the competitive environment and satisfy the
                    needs of its clients ‘expectations as this informs the basis of our operations
                    and service delivery.
                    <br />
                    <br />
                    <Text fontWeight="bold" fontSize="1rem">
                        {" "}
                        STRATEGIC PRIORITIES{" "}
                    </Text>
                    <ul style={{ lineHeight: "30px" }}>
                        <li>
                            {" "}
                            Maintain the position of a significant company both in Forex Trading and
                            in the field of Construction in both domestic and foreign market
                        </li>
                        <li>Increase the value of the company. </li>
                        <li>
                            {" "}
                            Offer new technologies to its business partners with the objective to
                            increase their satisfaction and loyalty.{" "}
                        </li>

                        <li>
                            {" "}
                            Develop the qualifications of our employees and efficiently impart
                            information inside the company
                        </li>

                        <li>
                            {" "}
                            Contribute to environmental protection and development within and
                            outside Nigeria
                        </li>
                    </ul>
                    <br />
                    <p>
                        At this juncture, it is worthy to note that our company is benefiting from
                        traditional knowledge of the industry, environment and the client base. And
                        such, this has sharpened and aligned our holistic deployment resources
                        towards client-oriented service delivery. On this note, our objective is
                        predicated upon the capability to offer more sophisticated solutions to
                        client requirements; further, optimization of their service agenda and
                        identify the weak points in the offer of services to the clients.
                    </p>
                    <br />
                    Every previous result is only a break for us in the quest for knowledge. The
                    market demands quality and we know how to provide it. Objectively, we assess and
                    identify the weak points in the services that clients may demand, render
                    modifications, refine and deliver as a distinct model. In this regard, we are
                    second to none in ensuring uniqueness and ingenuity in our project presentation
                    and delivery.
                </Text>
            </Container>
        </Box>
    );
};

export default Strategy;
