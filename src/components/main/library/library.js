import React, { useState } from "react";
import { Box, Button, Text, Heading, Flex, Stack } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
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
        author: ["Colette"],
        title: "Green Sealing Wax",
        form: ["Fiction", "Short Story"],
        topics: ["Bildungsroman", "Coming of age"],
        historicalEra: ["Modern"],
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
      <Stack spacing={4}>
        <Heading size="md">Your Library</Heading>
        <Text>You haven&apos;t added any books! Click below to add a book</Text>
        <Box>
          <Button onClick={AddBook}>Add a book!</Button>
        </Box>
      </Stack>
    );
  }
  return (
    <Stack direction="column" spacing={6}>
      <Heading size="md">Your Library</Heading>
      <Stack direction="row">
        <Button onClick={AddBook}>Add a book!</Button>
        <Button onClick={DeleteLastBook}>Remove last book!</Button>
      </Stack>
      <TableContainer>
        <Table variant="simple" size={{ base: "sm", md: "md", lg: "lg" }}>
          <Thead>
            <Tr>
              <Th>Authors</Th>
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
                  <Td>{book.author.join(", ")}</Td>
                  <Td>{book.title}</Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {book.form.join(", ")}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {" "}
                    {book.topics.join(", ")}
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {book.historicalEra.join(", ")}
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
    </Stack>
  );
};

export default Library;
