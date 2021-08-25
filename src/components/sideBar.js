import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import logout from '../assets/Logout.svg';
import ReactSideBar from 'react-sidebar';
import { PROTECTED_PATHS } from '../app/constants';
import { NAV } from './constants';
import { PROTECTED_ROUTES } from '../app/routes';
import { Flex, useMediaQuery, Text, Stack, Image } from '@chakra-ui/react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import NavBar from './NavBar';
import logo from '../assets/logo.png';
import firebase from '../firebase';
import './Header.css'

const { DASHBOARD } = PROTECTED_PATHS;

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobile] = useMediaQuery('(min-width: 800px)');

  const logoutUser = async () => {
    await firebase.auth().signOut();
    window.location.href = '/';
  };
  return (
    <ReactSideBar
      sidebar={
        <>
          <Flex flexDirection='column' paddingY={15}>
            <Stack ml={4} mt={4} mb={15}>
              <Image src={logo} style={{ height: '40px', width: '60px' }} />
            </Stack>
            {NAV.map((item) => (
              <Flex
                flex={1}
                bottom={0}
                padding={4}
                as={Link}
                key={nanoid()}
                to={item.to}
                _hover={{ background: '#6C5ECE', cursor: 'pointer' }}
              >
                <p size={25} color='white' >{item.icon} </p>
                <Text ml={4} color='white' alignSelf='center'>
                  {item.name}
                </Text>
              </Flex>
            ))}
            <Flex
              onClick={logoutUser}
              bottom={0}
              padding={4}
              _hover={{ background: '#6C5ECE', cursor: 'pointer' }}
            >
              <img src={logout} loading='lazy' alt='' />
              <Text ml={4} color='white' alignSelf='center'>
                Logout
              </Text>
            </Flex>
          </Flex>
        </>
      }
      open={isOpen}
      onSetOpen={() => setIsOpen(false)}
      docked={mobile}
      shadow={false}
      styles={{
        sidebar: {
          background: '#433976',
          width: 240,
        },
        root: { height: '100vh' },
      }}
    >
      <div className='padding-0 background-color-4' style={{ height: '100vh' }}>
        <NavBar showSideBar={() => setIsOpen(true)} />
        <Switch>
          {PROTECTED_ROUTES.map(({ page: Component, path: route, exact }) => (
            <Route exact={exact} key={nanoid()} path={route}>
              <Component showSideBar={() => setIsOpen(true)} />
            </Route>
          ))}

          <Route exact path='/*'>
            <Redirect to={DASHBOARD} />
          </Route>
        </Switch>
      </div>
    </ReactSideBar>
  );
};

export default SideBar;
