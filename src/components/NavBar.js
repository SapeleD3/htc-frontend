import styled from '@emotion/styled';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoNotifications } from 'react-icons/io5';
import PropTypes from 'prop-types';
import {
  Flex,
  Spinner,
  Text,
  Avatar,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { BiSearchAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const NavBar = (props) => {
  const [nameload, setNameLoad] = useState(true);
  const [userData, setUserData] = useState({});
  const user = useSelector((state) => state.auth.user);
  const { showSideBar } = props;

  useEffect(() => {
    user && setUserData(user);
    setNameLoad(false);
  }, [user]);

  return (
    <NavBar.Wrapper>
      <button onClick={() => showSideBar()}>
        {' '}
        <HiOutlineMenuAlt2 size={25} />{' '}
      </button>
      <div className='holder'>
        <Text textTransform='uppercase' fontWeight='bold' fontSize='19px'>
          {' '}
          {window.location.pathname.split('/')[1]}{' '}
        </Text>
      </div>
      {nameload ? (
        <Spinner />
      ) : (
        <Flex
          minWidth='530px'
          fontWeight='bold'
          fontSize='12px'
          display={['none', 'none', 'none', 'flex']}
        >
          <InputGroup
            variant='filled'
            size='sm'
            width='300px'
            borderRadius='2xl'
            placeholder='Search...'
            mr={3}
          >
            <Input borderRadius='2xl' placeholder='Enter amount' />
            <InputRightElement children={<BiSearchAlt size={20} />} />
          </InputGroup>
          <IconButton
            isRound='true'
            icon={<IoNotifications />}
            bg='white'
            marginTop='-3px'
          />
          <Avatar size='sm' mr={3} />
          <Text fontSize='13px' alignSelf='center' fontWeight='500' mr={4}>
            {userData.fullName}
          </Text>
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
  padding-left: 15px;
  position: sticky;
  top: 0;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    padding-left: 8px;
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
