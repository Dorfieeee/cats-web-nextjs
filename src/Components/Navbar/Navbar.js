import React, { useContext } from "react";
import {
    Box,
    Flex,
    Spacer,
    HStack,
    Image,
    Link,
    Container,
    useColorMode,
    Button,
    Icon
} from "@chakra-ui/react";
import { FaUserAlt, FaMoon, FaSun } from "react-icons/fa";
import { SiDiscord } from "react-icons/si/";
import NavbarIcon from "./NavbarIcon";
import { LocaleContext } from "../../Components/LocaleProvider/LocaleProvider";


export default (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { localeMode, toggleLocaleMode } = useContext(LocaleContext);

    return (
        <Container
            maxW="100%"
            borderTop="5px solid"
            borderColor="blue.500"
            zIndex="999"
            as="nav"
        >
            <Flex maxW="1240px" m="auto">
                <Link
                    href="/"
                    _hover={{ textDecoration: "none" }}
                    pos="relative"
                    left="0"
                    transform="translate(0%, 25%)"
                >
                    <Box w="90px" h="auto">
                        <Image
                            boxSize="90px"
                            objectFit="contain"
                            src="/CATS-weblogo.png"
                            pos="absolute"
                            alt="CATS logo"
                        />
                    </Box>
                </Link>
                <Spacer />
                <HStack p={3} spacing={[4, 6, 8]}>
                    <Button
                        bg="transparent"
                        size="xs"
                        _hover={{
                            bg: "transparent"
                        }}
                        onClick={() => toggleColorMode(!colorMode)}
                    >
                        <Icon
                            as={colorMode === "light" ? FaMoon : FaSun}
                            w={[5, 6]}
                            h={[5, 6]}
                            color="blue.100"
                            transition="color"
                            transitionDuration=".3s"
                            transitionTimingFunction="ease-in"
                            _hover={{
                                color: "white"
                            }}
                        />
                    </Button>
                    <Button
                        onClick={() => toggleLocaleMode()}
                        aria-label={"Flag-" + localeMode}
                        variant="ghost"
                    >
                        <Image
                            minW="20px"
                            w="25px"
                            objectFit="cover"
                            src={`https://cdn.staticaly.com/gh/hampusborgos/country-flags/master/svg/${
                                localeMode === "cs" ? "gb" : "cz"
                            }.svg`}
                        />
                    </Button>
                    <NavbarIcon
                        icon={SiDiscord}
                        href="https://discord.gg/gNu2W3Q"
                    />
                    <NavbarIcon icon={FaUserAlt} href="/auth/login" visible />
                </HStack>
            </Flex>
        </Container>
    );
};
