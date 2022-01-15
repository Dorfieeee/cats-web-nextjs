import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export const Footer = (props) => {
  const year = new Date().getFullYear();

  return (
    <Box borderTop="5px solid white" textAlign="center" paddingY={3}>
      <Heading size="sm">
        <span style={{ color: "#4299e1" }}>Czech</span>{" "}
        <span style={{ color: "#E53E3E" }}>Army</span> Tactical Squad
      </Heading>
      <Heading size="xs">{"@ " + year}</Heading>
    </Box>
  );
};
