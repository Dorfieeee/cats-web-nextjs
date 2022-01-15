import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Title = (props) => {
  return (
    <Box>
      <Heading as="h1" size="3xl" textAlign="center" mb={3} className="logo">
        <Text as="span" color="red.500" textShadow="4px 4px 12px rgb(0, 0, 0)">
          Česko
        </Text>{" "}
        <Text as="span" display={["none", "inline-block"]}>
          &bull;
        </Text>{" "}
        <Text as="span" color="blue.400" textShadow="4px 4px 12px rgb(0, 0, 0)">
          Slovenská
        </Text>
      </Heading>
      <Heading textAlign="center" className="logo">
        Battlefield komunita
      </Heading>
    </Box>
  );
};
