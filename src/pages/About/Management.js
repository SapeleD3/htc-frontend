import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";

const Management = () => {
    return (
        <>
            <Box>
                <Container maxW="container.lg">
                    <Text fontSize="1rem" fontWeight="500" textAlign="justify">
                        The management organs of Holograph Technology Services Ltd is primarily
                        saddled with the responsibility of decision-making, headed by a chairman/CEO
                        and other departmental Managers.
                        <br />
                        <br />
                        <Text fontWeight="bold" fontSize="1.rem">
                            {" "}
                            THE BOARD OF DIRECTORS{" "}
                        </Text>
                        <br />
                        The board of directors is the statutory body of the company, which manages
                        the activities of Holograph Technology Services Ltd. It executes the
                        resolutions of: the general meeting.
                        <br />
                        <br />
                        <ul style={{ lineHeight:'40px'}}>
                            <li>Proposals of long-term development. </li>
                            <li>
                                {" "}
                                Drafts of the major guidelines for business activities including the
                                means to attainment of such targets.
                            </li>
                            <li> The business and assets report at least once a year, </li>
                            <li>
                                {" "}
                                Annual profit and loss account with a proposal for distribution of
                                the profit,
                            </li>
                            <li>
                                Proposals for amendment of the statutes as well as other documents,
                                which are in the competency of the general meeting.{" "}
                            </li>
                        </ul>
                        <br />
                        <br />
                        <Text fontWeight="bold" fontSize="1.rem">
                            {" "}
                            THE SUPERVISORY BOARD{" "}
                        </Text>
                        <br />
                        The supervisory board controls the performance of the powers of the board of
                        directors and realization of the company's business activities, it examines
                        the annual financial statement.
                    </Text>
                </Container>
            </Box>
        </>
    );
};

export default Management;
