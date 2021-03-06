import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { SlidingText, SlidingImage } from "../../Components/sliders/";

export const Wrapper = (props) => {
  return (
    <Flex
      minH={["450px", "450px", "450px", "550px"]}
      w="100%"
      maxW="1240px"
      m="auto"
      align="center"
      px={6}
      direction={["column", "column", "row"]}
      justify="space-around"
    >
      {props.children}
    </Flex>
  );
};

export const Section = ({ data, ...props }) => {
  return (
    <Wrapper>
      <Box
        w={["100%", "100%", "40%"]}
        order={[1, 1, props.reverse ? 2 : 1]}
        p={5}
      >
        <SlidingText {...props}>
          <Heading
            as="h1"
            mb={3}
            pl={props.reverse && 6}
            _after={{ content: "'...'" }}
          >
            {data.title}
          </Heading>
          <Text pl={!props.reverse && 3} mb={3}>
            {data.content}
          </Text>
          <Text fontWeight={700} pl={props.reverse && 6}>
            {data.small}
          </Text>
        </SlidingText>
      </Box>
      <Box
        w={["95%", "85%", "60%"]}
        order={[2, 2, props.reverse ? 1 : 2]}
        p={3}
      >
        <SlidingImage dir={props.reverse ? "left" : "right"} {...props}>
          {data.image}
        </SlidingImage>
      </Box>
    </Wrapper>
  );
};
