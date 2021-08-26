import styled from '@emotion/styled';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { IoNotifications } from 'react-icons/io5'
import PropTypes from 'prop-types';
import { Flex, Spinner, Text, Avatar, IconButton, Input } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useMediaQuery  } from "@chakra-ui/media-query";


const NavBar = (props) => {
  const [nameload, setNameLoad] = useState(true);
  const [userData, setUserData] = useState({});
  const user = useSelector((state) => state.auth.user);
  const [isNotSmallerScreen ] = useMediaQuery("(min-width: 600px)") 
  const { showSideBar } = props;

  useEffect(() => {
    user && setUserData(user);
    setNameLoad(false);
  }, [user]);

  return (
    <NavBar.Wrapper>
      <button onClick={() => showSideBar()}>
        {' '}
        <HiOutlineMenuAlt2 size={30}/>{' '}
      </button>
      <div className='holder'>
        <Text textTransform='uppercase' fontWeight='bold' fontSize='26px'>
          {' '}
          {window.location.pathname.split('/')[1]}{' '}
        </Text>
      </div>
      {nameload ? (
        <Spinner />
      ) : (
        <Flex minWidth='520px' fontWeight='bold' fontSize='12px' display={isNotSmallerScreen ? 'flex' : 'none'}>
           <Input variant="filled" placeholder="Search..." mr={3}/>
          <IconButton isRound='true' icon={<IoNotifications/>} bg='white' marginTop='-3px'/>
          <Avatar size='sm' mr={3}/>
          <Text fontSize='12px' fontWeight='700' mr={4}>{userData.fullName}</Text>
        </Flex>
      )}
    </NavBar.Wrapper>
  );
};
NavBar.Wrapper = styled.nav`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding-top: 26px;
  padding-bottom: 26px;
  padding-left: 40px;
  position: sticky;
  top: 0;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    padding-left: 12px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  .holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .logos {
      display: flex;
      margin-right: 1rem;
      svg {
        color: #8a94a6;
        font-size: 1.3rem;
        margin-left: 1rem;
      }
    }
  }
  h2 {
    font-size: 17px;
    line-height: 0;
    text-transform: capitalize;
  }
  button {
    margin-right: 1rem;
    outline: none;
    svg {
      font-size: 1.3rem;
      color: #304762;
    }
  }
  .active {
    display: none !important;
  }
`;

NavBar.propTypes = {
  showSideBar: PropTypes.any,
};

export default NavBar;
