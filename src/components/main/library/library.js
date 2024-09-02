import React, { useState } from "react";
import { Box, Button, Text, Heading, Container } from "@chakra-ui/react";
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
  const [books, setBooks] = useState([]);

  const AreBooksEmpty = () => {
    if (books.length === 0) {
      return true;
    }
    return false;
  };

  const AddBook = () => {
    setBooks([
      ...books,
      {
        author: "Colette",
        title: "Green Sealing Wax",
        form: ["Fiction", "Short Story"],
        topics: ["Bildungsroman", "Coming of age"],
        historicalEra: "Modern",
      },
    ]);
  };

  const RemoveLastBook = () => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.slice(0, -1);
      return updatedBooks;
    });
  };

  if (AreBooksEmpty()) {
    return (
      <Box>
        <Heading>Library</Heading>
        <Text>You haven&apos;t added any books! Click below to add a book</Text>
        <Button onClick={AddBook}>Add a book!</Button>
      </Box>
    );
  }
  return (
    <Box>
      Library
      <Button onClick={AddBook}>Add a book!</Button>
      <Button onClick={RemoveLastBook}>Remove last book!</Button>
      <Container maxW="90%">
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
              {books.map((book, index) => {
                return (
                  <Tr
                    key={index}
                    _hover={{ fontWeight: "bold" }}
                    _pressed={{ background: "gray.400" }}
                  >
                    <Td>{book.author}</Td>
                    <Td>{book.title}</Td>
                    <Td>{book.form}</Td>
                    <Td>{book.topics}</Td>
                    <Td>{book.historicalEra}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Library;
