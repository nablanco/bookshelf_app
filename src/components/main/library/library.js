import React, { useState } from "react";
import { Box, Button, Text, Heading } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Library = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const HandleEmptyStatus = () => {
    setIsEmpty(!isEmpty);
  };

  if (isEmpty) {
    return (
      <Box>
        <Heading>Library</Heading>
        <Text>You haven&apos;t added any books! Click below to add a book</Text>
        <Button onClick={HandleEmptyStatus}>Add a book!</Button>
      </Box>
    );
  }
  return (
    <Box>
      Library
      {console.log(isEmpty)}
      <Button onClick={HandleEmptyStatus}>Remove a book!</Button>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Your main library</TableCaption>
          <Thead>
            <Tr>
              <Th>Author</Th>
              <Th>Title</Th>
              <Th>Form</Th>
              <Th>Topics</Th>
              <Th>Historical Era</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Author 1</Td>
              <Td>Book 1</Td>
              <Td>Fiction</Td>
              <Td>Politics</Td>
              <Td>Ancient Greece</Td>
            </Tr>
            <Tr>
              <Td>Author 2</Td>
              <Td>Book 2</Td>
              <Td>Non-fiction</Td>
              <Td>Art</Td>
              <Td>South America</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Library;
