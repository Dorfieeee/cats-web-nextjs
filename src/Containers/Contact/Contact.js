import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Button, Link } from "@chakra-ui/react";
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { useLocale } from "../../Components/LocaleProvider/LocaleProvider";
import content from "./content.js";

export const Contact = () => {
    const { localeMode } = useLocale();

    return (
        <Box as="section" bg="#4e5d94" mt={10}>
            <Flex
                justify={["center", "center", "space-between"]}
                align="center"
                px={5}
                maxW="1240px"
                wrap="wrap"
                m="0 auto"
                py={12}
            >
                <Flex
                    color="white"
                    direction={["column", "column", "row"]}
                    justify="center"
                    align="center"
                >
                    <Icon
                        boxSize="3rem"
                        as={FaDiscord}
                        mb={["1rem", "1rem", "0"]}
                    />
                    <Box
                        h="100%"
                        ml={5}
                        textAlign={["center", 0, "left"]}
                        mb={["1rem", "1rem", "0"]}
                    >
                        <Heading size="lg">{content[localeMode].title}</Heading>
                        <Text>{content[localeMode].body}</Text>
                        <Text
                            as="i"
                            fontWeight="600"
                            color="#141214"
                            fontSize="1.1em"
                        >
                            {content[localeMode].sm}
                        </Text>
                    </Box>
                </Flex>
                <Link isExternal href="https://discord.com/invite/gNu2W3Q" _hover={{textDecation: "none"}}>
                    <Button
                        size="lg"
                        as="span"
                        color="black"
                        bg="white"
                        px="2.5rem"
                        h="4rem"
                        borderWidth="3px"
                        borderStyle="solid"
                        textDecoration={"none"}
                        _hover={{
                            color: "white",
                            bg: "#4e5d94",
                            textDecoration: "none",
                            borderWidth: "3px",
                            borderStyle: "solid",
                            borderColor: "#141214"
                        }}
                    >
                        {content[localeMode].btn}
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
};
