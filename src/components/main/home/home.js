import React from "react";
import {
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import Library from "../library/library";
import { SearchIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Flex direction="column" align="center" mt="24px">
      <Stack spacing={10} width="90%">
        <InputGroup maxW="600px" alignSelf="center">
          <Input placeholder="Search Google Books" />
          <InputRightElement>
            <SearchIcon />
          </InputRightElement>
        </InputGroup>
        <Library />
      </Stack>
    </Flex>
  );
};

export default Home;
