import ComingSoon from "../components/comingSoon";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Landing from "../pages/Landing";
import { PUBLIC_PATHS, PROTECTED_PATHS } from "./constants";
import About from "../pages/About/About";
import Benefits from "../pages/Benefits/Benefits";

const { LOGIN, REGISTER, FORGOT_PASS, LANDING, ABOUT, BENEFITS } = PUBLIC_PATHS;
const { HOME } = PROTECTED_PATHS;
export const PUBLIC_ROUTES = [
    {
        path: LANDING,
        page: Landing,
        exact: true,
    },
    {
        path: LOGIN,
        page: Login,
        exact: true,
    },
    {
        path: ABOUT,
        page: About,
        exact: true,
    },
    {
        path: BENEFITS,
        page: Benefits,
        exact: true,
    },
    {
        path: REGISTER,
        page: Register,
    },
    {
        path: FORGOT_PASS,
        page: ComingSoon,
    },
];

export const PROTECTED_ROUTES = [
    {
        path: HOME,
        page: ComingSoon,
    },
];
