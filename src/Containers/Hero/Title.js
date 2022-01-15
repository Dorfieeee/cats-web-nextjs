import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useLocale } from "../../Components/LocaleProvider/LocaleProvider";
import styles from "./Hero.module.css"

export const Title = (props) => {
    const { localeMode } = useLocale();

    return (
        <Box>
            <Heading
                as="h1"
                size="3xl"
                textAlign="center"
                mb={3}
                className={styles["logo"]}
            >
                <Text
                    as="span"
                    color="red.500"
                    textShadow="4px 4px 12px rgb(0, 0, 0)"
                >
                    {localeMode === "cs" ? "Česko" : "Czech"}
                </Text>{" "}
                <Text as="span" display={["none", "inline-block"]}>
                    &bull;
                </Text>{" "}
                <Text
                    as="span"
                    color="blue.400"
                    textShadow="4px 4px 12px rgb(0, 0, 0)"
                >
                    {localeMode === "cs" ? "Slovenská" : "Slovak"}
                </Text>
            </Heading>
            <Heading textAlign="center" className={styles["logo"]}>
                {localeMode === "cs"
                    ? "Battlefield komunita"
                    : "Battlefield community"}
            </Heading>
        </Box>
    );
};
