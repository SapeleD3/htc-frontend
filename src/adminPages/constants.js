export const NotifyHandler = (toast, type, info) => {
  if (type === 'error') {
    return toast({
      title: 'Error',
      description: typeof info === 'string' ? info : 'SOMETHING WENT WRONG',
      status: 'error',
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    });
  } else {
    return toast({
      title: 'Success',
      description: info,
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top',
    });
  }
};
