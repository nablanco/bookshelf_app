import React from "react";
import { Flex } from "@chakra-ui/react";

import ExplainerModal from "./explainerModal";

const Navigation = () => {
  return (
    <Flex width="100%" justify="flex-end" mt={2}>
      <ExplainerModal />
    </Flex>
  );
};

export default Navigation;
