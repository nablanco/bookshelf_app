import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const ExplainerModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mr={2}>
      <Button onClick={onOpen}>Help</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Welcome to Bibliofiles! You can use the searchbar to search the
            entire Google Books catalogue and add your favorite books. You can
            click on books in your library to add notes. Enjoy!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ExplainerModal;
