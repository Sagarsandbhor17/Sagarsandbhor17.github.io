import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
  } from '@chakra-ui/react';
import { Contact } from '../Allroute/Contact';

  function ContactModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button bg='none' variant='link' color='white' mb='0.3rem' onClick={onOpen}>
            <Text fontWeight='bold' >Contact</Text>
            </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg='gray' padding='2rem'>
            {/* <ModalHeader textAlign='center' >Contact Me</ModalHeader> */}
            <ModalCloseButton />
            <ModalBody>
              <Contact/>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default ContactModal;