import styled from '@emotion/styled';
import { FaBars } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Flex, Spinner, Text } from '@chakra-ui/react';
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
        <FaBars />{' '}
      </button>
      <div className='holder'>
        <Text textTransform='uppercase' fontWeight='bold'>
          {' '}
          {window.location.pathname.split('/')[1]}{' '}
        </Text>
      </div>
      {nameload ? (
        <Spinner />
      ) : (
        <Flex minWidth='220px' fontWeight='bold' fontSize='16px'>
          <Text>welcome, {userData.fullName}</Text>
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
