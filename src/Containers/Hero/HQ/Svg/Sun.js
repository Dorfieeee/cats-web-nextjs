import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, useColorMode } from "@chakra-ui/react";
import { Moon } from "./Moon";

export const Sun = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [deg, setDeg] = useState(colorMode === "light" ? 13 : 193);
  const animation = useAnimation();

  useEffect(() => {
    setDeg(deg + 180);
    animation.start(colorMode);
  }, [colorMode]);

  const transition = {
    duration: 2,
    ease: "easeInOut"
  };

  const variants = {
    light: {
      transform: `rotateZ(${deg}deg)`,
      transition: transition
    },
    dark: {
      transform: `rotateZ(${deg}deg)`,
      transition: transition
    }
  };

  return (
    <Box
      pos="absolute"
      left="50%"
      bottom={["100px", "100px", "0"]}
      transform="translateX(-50%)"
      w={["300px", "400px", "500px"]}
      h="50%"
    >
      <motion.div
        style={{ width: "100%", height: "100%", position: "relative" }}
        initial={{ transform: "rotateZ(170deg)" }}
        animate={animation}
        variants={variants}
      >
        <Box
          pos="absolute"
          bg="#ffc925"
          borderRadius="50%"
          w="75px"
          h="75px"
          top="0"
          left="0"
          onClick={() => toggleColorMode("dark")}
          cursor="pointer"
        ></Box>
        <Box
          pos="absolute"
          borderRadius="50%"
          bottom="0"
          right="0"
          transform="rotateY(180deg)"
          onClick={() => toggleColorMode("light")}
          cursor="pointer"
        >
          <Moon />
        </Box>
      </motion.div>
    </Box>
  );
};
