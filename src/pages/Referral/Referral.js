import React from 'react';
import {
  Box,
  Container,
  useToast,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import http, { AUTH_ROUTES } from '../../services/api';
import { NotifyHandler } from '../constants';
import FullPageLoader from '../../components/full-page-loader';
import ReferralTable from './components/Table';
import { nanoid } from 'nanoid';
import ReferralTree from './components/Tree';

const Referral = () => {
  const toast = useToast();
  const [loading, setLoading] = React.useState(true);
  const [network, setNetwork] = React.useState(true);
  React.useEffect(() => {
    const getNetworkMembers = async () => {
      try {
        const {
          data: { data },
        } = await http.get(AUTH_ROUTES.NETWORK);
        setNetwork(data.Network);
        setLoading(false);
      } catch (e) {
        NotifyHandler(toast, 'error', 'something went wrong');
        setLoading(false);
      }
    };
    getNetworkMembers();
  }, [toast]);

  const navItems = [{ name: 'Tree' }, { name: 'Table' }];
  return loading ? (
    <FullPageLoader />
  ) : (
    <Referral.Wrapper>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <TabList className='nav'>
          {navItems.map((menu) => (
            <Tab className='tab' key={nanoid()}>
              {menu.name}
            </Tab>
          ))}
        </TabList>
        <Container maxW='container.lg'>
          <TabPanels>
            <TabPanel className='tab-panel'>
              <ReferralTree net={network} />
            </TabPanel>
            <TabPanel className='tab-panel'>
              <ReferralTable net={network.children} />
            </TabPanel>
          </TabPanels>
        </Container>
      </Tabs>
    </Referral.Wrapper>
  );
};

Referral.Wrapper = styled.div`
  .nav {
    background-color: #fff;
    border-top: 1px solid #e2e2ea;
    border-bottom: 1px solid #e2e2ea;
    padding: 1rem 0;
    padding-left: 32px;

    @media only screen and (max-width: 600px) {
      font-size: 12px;
      padding-left: 12px;
      overflow: scroll;
    }

    .tab {
      all: unset;
      border-bottom: 3px solid transparent;
      margin-right: 28px;
      color: #6d6f75;
      opacity: 0.8;
      font-weight: bold;

      :hover {
        cursor: pointer;
      }
    }

    .tab[aria-selected='true'],
    .tab[data-selected] {
      width: 100px;
      border-bottom: 3px solid #6c5ece;
      color: #6c5ece;
      opacity: 1;
    }
  }

  .tab-panel {
    margin: 1rem -1rem;
  }
`;

export default Referral;
