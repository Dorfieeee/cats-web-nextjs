import { HStack, Img } from "@chakra-ui/react";
import React from "react";
import styles from "./GameIcons.module.css"

const images = [
  {
    src: "/icons/cod4icon.png",
    alt: "Call of Duty 4: Modern Warfare"
  },
  {
    src: "/icons/codmwicon.png",
    alt: "Call of Duty: Modern Warfare 2"
  },
  { src: "/icons/bf3icon.png", alt: "Battlefield 3" },
  { src: "/icons/bf5icon.png", alt: "Battlefield 5" },
  { src: "/icons/bf4icon.png", alt: "Battlefield 4" },
];

export const GameIcons = (props) => {
  return (
    <HStack className={styles["game-icons"]}>
      {images.map((img) => (
        <Img src={img.src} alt={img.alt} maxW="23.5%" h="auto" key={img.alt} />
      ))}
    </HStack>
  );
};
