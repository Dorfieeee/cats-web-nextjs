import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text, Heading, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { SlidingImage, SlidingText } from "../../Components/sliders/index";
import { useLocale } from "../../Components/LocaleProvider/LocaleProvider";
import content from "./content";

const Card = ({ icon, title, body }) => {
    return (
        <VStack maxW="250px" align="center" justify="center" textAlign="center">
            <SlidingImage
                dir="top"
                offset={50}
                style={{ marginBottom: "1rem" }}
            >
                <Icon as={icon} boxSize={12} />
            </SlidingImage>
            <SlidingText>
                <Heading mb={3}>{title}</Heading>
                <Text>{body}</Text>
            </SlidingText>
        </VStack>
    );
};

export const Matches = (props) => {
    const { localeMode } = useLocale();

    return (
        <Box as="section" overflow="hidden" pos="relative">
            <Flex
                w="100%"
                h="100%"
                paddingY="100px"
                direction="column"
                justify="center"
                align="center"
                maxW="1240px"
                m="0 auto"
            >
                <Flex justify="center" flex={1} mb={5}>
                    <SlidingImage dir="top" offset={50}>
                        <Heading size="3xl" textAlign="center" px={5}>
                            {localeMode === "cs"
                                ? "A vyraz s námi na"
                                : "And come with us on"}{" "}
                            {"=>"}
                        </Heading>
                    </SlidingImage>
                </Flex>
                <Stack
                    pt="75px"
                    spacing={20}
                    direction={["column", "column", "row"]}
                    justify="space-around"
                    align="center"
                    w="100%"
                >
                    {content[localeMode].map((c) => (
                        <Card key={c.title} {...c} />
                    ))}
                </Stack>
            </Flex>
        </Box>
    );
};
