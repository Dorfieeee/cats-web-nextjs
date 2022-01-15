import { AspectRatio, Box } from "@chakra-ui/react";
import React, { useRef } from "react";
import styles from "./PcScreen.module.css"
import Image from "next/image";

export const PcScreen = () => {
  const overlay = useRef();

  return (
    <Box
      className={styles["monitor"]}
      onClick={() => {
        overlay.current.className = styles["monitor screen backside.hide "];
      }}
    >
      <Box className={styles["screen"]}>
        <AspectRatio maxW="560px" ratio={16 / 9} className={styles["frontside"]}>
          <iframe
            src="https://www.youtube.com/embed/7KZbn-ktiBs"
            allowFullScreen
            title="Ukazka RUSH hry"
          ></iframe>
        </AspectRatio>
        <Box className={styles["backside"]} ref={overlay}>
          <Box
            w="31.5%"
            h="50%"
            pos="absolute"
            top="0"
            left="0"
            transform={"translateX(100%) translateY(68.5%) rotateY(-17deg)"}
          >
            <Image
              src={"/click_youtube.png"}
              alt="Click on YouTube visualization"
              layout="fill"
              quality={50}
            />
          </Box>
        </Box>
      </Box>
      <Box className={styles["stand"]} />
      <Box className={styles["bottom"]} />
    </Box>
  );
};
