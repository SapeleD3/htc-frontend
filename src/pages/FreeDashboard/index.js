import { Box, Button, Divider, Flex, Text, useToast } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { usePaystackPayment } from 'react-paystack';
import { NotifyHandler } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import http, { PAY_ROUTES, AUTH_ROUTES } from '../../services/api';
// import appImg from '../../assets/appimg.png';
import './dash.css';
import { authSetUser } from '../../store/actions/authAction';

export default function FreeDashboard() {
  const dispatch = useDispatch();
  const toast = useToast();
  const [amount, setAmount] = useState(0);
  const [reference, setReference] = useState('');
  const [transId, setTransactionId] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const config = {
    reference,
    email: user.email,
    amount: amount * 100,
    publicKey: process.env.REACT_APP_PAYSTACK_KEY,
  };

  const initializePayment = usePaystackPayment(config);

  const startPayment = async (am) => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await http.post(PAY_ROUTES.PAY, {
        amount: am,
        full_name: user.fullName,
        email: user.email,
      });
      setAmount(am);
      setReference(data.reference);
      setTransactionId(data.transId);
      onOpen();
    } catch (error) {
      setLoading(false);
      const message = error.response.data.message || 'something went wrong';
      return NotifyHandler(toast, 'error', message);
    }
  };

  const pay = () => {
    initializePayment(onSuccess, onClose);
  };

  const { isOpen, onOpen, onClose: closeModal } = useDisclosure();

  // you can call this function anything
  const onSuccess = (info) => {
    // Implementation for whatever you want to do with reference and after success call.
    verifyPayment(info.reference);
  };

  const onClose = () => {
    setLoading(false);
    closeModal();
  };

  const getAuthData = async () => {
    const {
      data: { data },
    } = await http.get(AUTH_ROUTES.USER);
    const userInfo = data.userData;
    dispatch(authSetUser(userInfo));
  };

  const verifyPayment = async (refere) => {
    try {
      setLoading(true);
      const {
        data: { message },
      } = await http.post(PAY_ROUTES.VERIFY, {
        reference: refere,
        transId,
      });
      closeModal();
      setLoading(false);
      getAuthData();
      return NotifyHandler(toast, 'success', message);
    } catch (error) {
      setLoading(false);
      const message = error.response.data.message || 'something went wrong';
      return NotifyHandler(toast, 'error', message);
    }
  };

  return (
    <Flex flexDir='column' pb={10}>
      <Flex justifyContent='center' alignItems='center'>
        <Flex flexDir='column'>
          <Text textAlign='center' fontWeight='700' fontSize='22px'>
            Simple Plans for Everybody
          </Text>
          <Text textAlign='center' fontWeight='200' fontSize='16px'>
            one time payment
          </Text>
          <Text textAlign='center' fontWeight='200' fontSize='16px'>
            No side charges, No surprise fees
          </Text>
          <Text textAlign='center' fontWeight='200' fontSize='12px'>
            Notice: Registration for the standard plan opens up higher plans
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexWrap='wrap'
        m={['none', 30]}
        px={[2, 20]}
        justifyContent='center'
      >
        <Flex
          m={[8, 30]}
          className='card card-1'
          flexDir='column'
          textAlign='center'
        >
          <Box flex={1}>
            <Text fontWeight='700' fontSize='22px' mb={2}>
              Standard
            </Text>
            <Text fontWeight='700' mb={4} fontSize='22px'>
              $20
            </Text>
            {[0, 1, 2, 3].map((val) => (
              <Flex key={nanoid()} flexDir='column' paddingx={5} py={2}>
                <Divider />
                <Flex mt={3} pl={3}>
                  <FcCheckmark size={16} />
                  <Text
                    textAlign='center'
                    ml={4}
                    fontWeight='200'
                    fontSize='15px'
                  >
                    access to HTS tv
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Box>
          <Button
            borderRadius='3xl'
            _hover={{
              border: '2px solid #e54242',
              background: 'white',
              color: '#e54242',
            }}
            isLoading={loading}
            onClick={() => {
              startPayment(10000);
            }}
          >
            Get Started
          </Button>
        </Flex>
        <Flex
          m={[10, 30]}
          className='card card-2'
          flexDir='column'
          textAlign='center'
        >
          <Box flex={1}>
            <Text fontWeight='700' fontSize='22px' mb={2}>
              Premium
            </Text>
            <Text fontWeight='700' mb={4} fontSize='22px'>
              $204
            </Text>
            {[0, 1, 2, 3, 4, 5, 6].map((val) => (
              <Flex key={nanoid()} flexDir='column' paddingx={5} py={2}>
                <Divider />
                <Flex mt={3} pl={3}>
                  <FcCheckmark size={16} />
                  <Text
                    textAlign='center'
                    ml={4}
                    fontWeight='200'
                    fontSize='15px'
                  >
                    access to HTS tv
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Box>
          <Button
            borderRadius='3xl'
            disabled={!user.activateduser}
            bg='#433976'
            _hover={{
              border: '2px solid #433976',
              background: 'white',
              color: '#433976',
            }}
            onClick={() => {
              startPayment(100000);
            }}
          >
            Choose Plan
          </Button>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Confirmation</ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: 'none' }} />
          <ModalBody>
            Are you sure you want the{' '}
            {amount.toLocaleString('en-NG', {
              style: 'currency',
              currency: 'NGN',
              maximumFractionDigits: 2,
            })}{' '}
            package
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='secondary' mr={3} onClick={closeModal}>
              no
            </Button>
            <Button variant='ghost' onClick={pay}>
              Yes.
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
