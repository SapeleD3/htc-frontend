import React from "react";
import Page from "./Page";
import Header from '../../components/Header'
import { Stack } from "@chakra-ui/react";
import AppFooter from "../../components/AppFooter";

const Landing = () => {
    return (
        <>
            <Stack>
                <Header/>
                <Page />
                <AppFooter />
            </Stack>
        </>
    );
};

export default Landing;
