import React, { useState } from "react";
import { Box, Button, Text, Heading } from "@chakra-ui/react";

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
    </Box>
  );
};

export default Library;
