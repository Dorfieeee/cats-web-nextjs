import { useEffect } from "react";
import React from "react";
import { ForrestLeft } from "./Svg/ForrestLeft";
import { ForrestRight } from "./Svg/ForrestRight";
import { Heli } from "./Svg/Heli";
import { Landscape } from "./Svg/Landscape";
import { Palace } from "./Svg/Palace";
import { Sun } from "./Svg/Sun";
import { Truck } from "./Svg/Truck";
import { Box, useColorMode } from "@chakra-ui/react";
import { useAnimation } from "framer-motion";

export const HQ = (props) => {
  const { colorMode } = useColorMode();
  const brightAnimation = useAnimation();

  useEffect(() => {
    brightAnimation.start(colorMode);
  }, [brightAnimation, colorMode]);

  const brightVariants = {
    dark: { filter: "brightness(0.3)" },
    light: { filter: "brightness(1)" }
  };

  const brightTransition = {
    duration: 1.5,
    ease: "easeInOut"
  };

  const treesVariants = (i) => {
    return {
      initial: {
        transform: "skewX(0deg)"
      },
      animate: {
        transform: [
          "skewX(0deg)",
          "skewX(-5deg)",
          "skewX(0deg)",
          "skewX(5deg)",
          "skewX(0deg)"
        ],
        transition: {
          times: [0, 0.25, 0.5, 0.75, 1],
          repeatDelay: 0,
          repeat: Infinity,
          duration: 5,
          delay: i * 0.5,
          ease: "linear"
        }
      }
    };
  };

  return (
    <Box
      pos={["relative", "relative", "absolute"]}
      top={["0px", "0px", "50px"]}
      left="0"
      h="100%"
      w="100%"
      pt={["150px", "150px", "0px"]}
      zIndex="0"
    >
      {/* Sun wrapper */}
      <Sun />
      {/* landscape */}
      <Box
        h="300px"
        bottom="0"
        pos="absolute"
        maxW="none"
        left="50%"
        ml="-1500px"
      >
        <Landscape
          brightAnimation={brightAnimation}
          brightVariants={brightVariants}
          brightTransition={brightTransition}
          colorMode={colorMode}
        />
      </Box>

      {/* building */}
      <Box
        bottom="0"
        pos={["relative", "relative", "absolute"]}
        left="50%"
        ml={["-130px", "-130px", "-200px"]}
        mb="126px"
      >
        <Palace
          brightAnimation={brightAnimation}
          brightVariants={brightVariants}
          brightTransition={brightTransition}
          colorMode={colorMode}
        />
      </Box>
      {/* truck */}
      <Box
        pos="absolute"
        left="50%"
        marginLeft="-230px"
        bottom="0"
        mb="110px"
        transform="rotateY(180deg)"
      >
        <Truck />
      </Box>
      {/* forrest left */}
      <Box
        h="200px"
        bottom="0"
        pos="absolute"
        mb="110px"
        left="50%"
        ml="-1100px"
        d={["none", "none", "block"]}
      >
        <ForrestLeft
          brightAnimation={brightAnimation}
          brightVariants={brightVariants}
          brightTransition={brightTransition}
          colorMode={colorMode}
          treesVariants={treesVariants}
        />
      </Box>
      {/* forrest right */}
      <Box
        h="200px"
        bottom="0"
        pos="absolute"
        ml="180px"
        mb="145px"
        left="50%"
        d={["none", "none", "block"]}
      >
        <ForrestRight
          brightAnimation={brightAnimation}
          brightVariants={brightVariants}
          brightTransition={brightTransition}
          colorMode={colorMode}
          treesVariants={treesVariants}
        />
      </Box>

      <Heli />
      {/* <Parachute /> */}
    </Box>
  );
};
