import React, { useState } from "react";
import { Box, Button, Text, Heading, Container, Flex } from "@chakra-ui/react";
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
import { DeleteIcon } from "@chakra-ui/icons";
import { v4 as uuidv4 } from "uuid";

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
        key: uuidv4(),
        author: "Colette",
        title: "Green Sealing Wax",
        form: ["Fiction", "Short Story"],
        topics: ["Bildungsroman", "Coming of age"],
        historicalEra: "Modern",
      },
    ]);
  };

  const DeleteLastBook = () => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.slice(0, -1);
      return updatedBooks;
    });
  };

  const DeleteSpecificBook = (id) => {
    const updatedBooks = books.filter((book) => book.key !== id);
    setBooks(updatedBooks);
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
      <Button onClick={DeleteLastBook}>Remove last book!</Button>
      <Container maxW="90%">
        <TableContainer>
          <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
            <TableCaption>Your main library</TableCaption>
            <Thead>
              <Tr>
                <Th>Author</Th>
                <Th>Title</Th>
                <Th display={{ base: "none", md: "table-cell" }}>Form</Th>
                <Th display={{ base: "none", md: "table-cell" }}>Topics</Th>
                <Th display={{ base: "none", md: "table-cell" }}>
                  Historical Era
                </Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {books.map((book) => {
                return (
                  <Tr key={book.key} _hover={{ background: "blue.200" }}>
                    <Td>{book.author}</Td>
                    <Td>{book.title}</Td>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      {book.form}
                    </Td>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      {" "}
                      {book.topics}
                    </Td>
                    <Td display={{ base: "none", md: "table-cell" }}>
                      {book.historicalEra}
                    </Td>
                    <Td>
                      <Flex justify="center">
                        <DeleteIcon
                          onClick={() => DeleteSpecificBook(book.key)}
                          _hover={{ cursor: "pointer" }}
                        />
                      </Flex>
                    </Td>
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
