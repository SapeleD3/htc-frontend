import { Flex, Text, Avatar, Progress, Box } from '@chakra-ui/react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
dayjs.extend(relativeTime);

export default function ReferralTable({ net }) {
  console.log('NET', net);
  return (
    <Flex flexDir='column'>
      <Box marginTop='10px'>
        <Text color='#262626' fontSize='24px' fontStyle='bold'>
          People
        </Text>
        <Text color='#9C9C9C' fontSize='18px' fontStyle='bold'>
          Users Registered under you
        </Text>
      </Box>
      <Box bg='#F6F6F8' p={3} mt={5}>
        <TableContainer>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Name</TableCell>
                <TableCell align='left'>Phone Number</TableCell>
                <TableCell align='left'>Level</TableCell>
                <TableCell align='left'>Members</TableCell>
                <TableCell align='left'>Referral link</TableCell>
                <TableCell align='left'>Last Active</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {net.map((val) => (
                <TableRow key={nanoid()}>
                  <TableCell align='left' component='th' scope='row'>
                    <Flex>
                      <Avatar size='sm' />
                      <Text ml={1} mt={1}>
                        {val.name}
                      </Text>
                    </Flex>
                  </TableCell>
                  <TableCell align='left'>{val.phoneNumber}</TableCell>
                  <TableCell align='left'>
                    <Progress
                      rounded={50}
                      value={
                        val.membersCount === 0
                          ? 0
                          : val.membersCount === 1
                          ? 50
                          : val.membersCount === 2
                          ? 100
                          : 0
                      }
                    />
                  </TableCell>
                  <TableCell align='left'>{val.membersCount}</TableCell>
                  <TableCell align='left'>
                    {' '}
                    {val?.sNetworks?.networkLink ||
                      'N/A - user yet to subscribe'}
                  </TableCell>
                  <TableCell align='left'>
                    {dayjs(val.lastActive).fromNow()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
}
