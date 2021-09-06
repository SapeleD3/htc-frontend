import React from 'react';
import {
  Text,
  Box,
  Spacer,
  Spinner,
  Button,
  Flex,
  Badge,
  useToast,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GiWallet } from 'react-icons/gi';
import { RiBankFill } from 'react-icons/ri';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FaNetworkWired } from 'react-icons/fa';
import ProgressChart from '../../components/progress-chart';
import { NotifyHandler } from '../constants';
import { nanoid } from 'nanoid';

const Dashboard = () => {
  const toast = useToast();
  const user = useSelector((state) => state.auth.user);
  const [nameload, setNameLoad] = useState(true);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    user && setUserData(user);
    setNameLoad(false);
  }, [user]);

  const copyLink = async (link) => {
    await navigator.clipboard?.writeText(link);
    return NotifyHandler(toast, 'success', 'Link Copied');
  };

  return (
    <Box pb={5} mt={5}>
      <Flex px={['10px', '60px']} flexDirection='column'>
        <Flex flexWrap='wrap' direction={['column', 'row']}>
          <Box>
            {nameload ? (
              <Spinner />
            ) : (
              <>
                <Text fontSize='20px' fontWeight='700'>
                  Hi {userData.fullName},
                </Text>

                <Text color='#433976' fontSize='14px' fontStyle='bold'>
                  @ {userData.userName}
                </Text>
              </>
            )}
            <Text color='#433976' fontSize='14px' fontStyle='bold' mb={5}>
              {' '}
              Current Level: 1
            </Text>
            <ProgressChart size={50} range1={20} range2={60} range3={100} />
          </Box>
        </Flex>

        <Box w='100%' mt={8}>
          <Flex mt={5} flexWrap='wrap'>
            <Box
              p={3}
              bg='#433976'
              mr={['none', '20px']}
              mb='20px'
              borderRadius='10px'
              w='330px'
            >
              {user?.sNetworks?.networkLink ? (
                <Flex key={nanoid()}>
                  <Box marginTop='25px'>
                    <Text
                      ml={1}
                      fontSize='16px'
                      mb={2}
                      fontWeight='500'
                      color='#fff'
                    >
                      Invite our friends
                    </Text>
                    <Button
                      title='Send this link to your customers so they can order from your store online'
                      onClick={() => copyLink(user?.sNetworks?.networkLink)}
                      color='white'
                      px={4}
                    >
                      Copy referral link
                    </Button>
                  </Box>
                  <Spacer />
                  <FaNetworkWired
                    style={{
                      fontSize: '70px',
                      marginLeft: '20px',
                      marginTop: '20px',
                    }}
                    color='white'
                  />
                </Flex>
              ) : (
                ''
              )}
            </Box>

            <Box
              p={3}
              bg='#F6F6F8'
              mr={['none', '20px']}
              mb='20px'
              borderRadius='10px'
              w='260px'
            >
              <Flex mt={5}>
                <RiBankFill style={{ fontSize: '59px', color: '#0D0D0F' }} />
                <Flex flexDir='column' ml={4}>
                  <Text
                    fontStyle='bold'
                    fontWeight='bold'
                    fontSize='0.9rem'
                    color='#0D0D0F'
                  >
                    Transactions
                  </Text>
                  <Spacer />
                  <Text
                    fontStyle='bold'
                    fontSize='2rem'
                    alignSelf='left'
                    mr={3}
                    color='#0D0D0F'
                  >
                    3
                  </Text>
                </Flex>
              </Flex>
            </Box>

            <Box
              bg='#6C5ECE'
              borderRadius='10px'
              mr={['none', '20px']}
              mb='20px'
              p={4}
              w='260px'
            >
              <Flex mt={5}>
                <GiWallet style={{ color: '#fff', fontSize: '59px' }} />
                <Flex flexDir='column' ml={4}>
                  <Text
                    fontStyle='bold'
                    fontWeight='bold'
                    fontSize='0.9rem'
                    color='#fff'
                  >
                    Wallet Balance
                  </Text>
                  <Spacer />
                  <Text
                    fontStyle='bold'
                    color='#55FF2B'
                    alignSelf='left'
                    fontSize='1.5rem'
                  >
                    $40
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box bg='#F6F6F8' p={3} borderRadius='5px' mt={5}>
          <Box ml={4}>
            <Text color='#262626' fontSize='18px' fontStyle='bold'>
              History
            </Text>
            <Text color='#9C9C9C' fontSize='14px' fontStyle='bold'>
              Your payment history
            </Text>
          </Box>

          <TableContainer>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell align='right'>Date</TableCell>
                  <TableCell align='right'>Amount</TableCell>
                  <TableCell align='right'>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component='th' scope='row'>
                    Withdrawal
                  </TableCell>
                  <TableCell align='right'>28th Agu, 2021</TableCell>
                  <TableCell align='right'>$40</TableCell>
                  <TableCell align='right'>
                    <Badge colorScheme='green'>Completed</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component='th' scope='row'>
                    Withdrawal
                  </TableCell>
                  <TableCell align='right'>28th Agu, 2021</TableCell>
                  <TableCell align='right'>$40</TableCell>
                  <TableCell align='right'>
                    <Badge colorScheme='red'>Uncompleted</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
