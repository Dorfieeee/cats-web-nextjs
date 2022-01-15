import React from "react";
import { motion, useAnimation } from "framer-motion";

export const Palace = ({
  brightVariants,
  brightAnimation,
  brightTransition,
  colorMode,
  ...props
}) => {
  const lightAnimation = useAnimation();

  lightAnimation.mount();

  if (colorMode === "dark") {
    lightAnimation.start({
      filter: [
        "drop-shadow(0 0 1px #FFC925) drop-shadow(0 0 2px #FB9121)",
        "drop-shadow(0 0 1px #fff) drop-shadow(0 0 4px #FFC925)",
        "drop-shadow(0 0 1px #FFC925) drop-shadow(0 0 2px #FB9121)"
      ],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    });
  }

  if (colorMode === "light") {
    lightAnimation.stop();
    lightAnimation.set({
      filter: "drop-shadow(0 0 0 #fff) drop-shadow(0 0 0 #FFC925)"
    });
  }

  const windows = {
    color: colorMode === "light" ? "#5b442f" : "yellow"
  };

  return (
    <motion.svg
      width="310px"
      height="180px"
      version="1.1"
      viewBox="0 0 722.69 437.76"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        id="tower"
        transform="matrix(10.815 0 0 10.815 -679.72 -956.93)"
      >
        <motion.g
          strokeWidth=".36424"
          animate={brightAnimation}
          initial={colorMode}
          variants={brightVariants}
          transition={brightTransition}
        >
          <rect
            x="114.76"
            y="92.271"
            width="13.748"
            height="32.016"
            fill="#f9baab"
          />
          <rect
            x="111.43"
            y="92.271"
            width="13.748"
            height="32.016"
            fill="#f59277"
          />
          <rect
            x="110.53"
            y="88.481"
            width="19.142"
            height="6.6582"
            fill="#73573b"
          />
          <rect
            x="110.53"
            y="88.481"
            width="15.733"
            height="6.6582"
            fill="#8a6848"
          />
        </motion.g>
        <motion.g
          transform="matrix(.3746 0 0 .35416 -194.14 -84.739)"
          fill={windows.color}
          animate={lightAnimation}
        >
          <rect x="830.5" y="540.4" width="7" height="9.4" />
          <rect x="830.5" y="562.8" width="7" height="9.4" />
        </motion.g>
      </motion.g>
      <motion.g
        id="palace"
        transform="matrix(10.815 0 0 10.815 -679.72 -956.93)"
      >
        <motion.g
          strokeWidth=".36424"
          animate={brightAnimation}
          initial={colorMode}
          variants={brightVariants}
          transition={brightTransition}
        >
          <rect
            x="67.713"
            y="107.39"
            width="40.832"
            height="21.568"
            fill="#f59277"
          />
          <rect
            x="78.09"
            y="106.05"
            width="2.36"
            height="21.568"
            fill="#f9baab"
          />
          <rect
            x="96.783"
            y="106.05"
            width="2.36"
            height="21.568"
            fill="#f9baab"
          />
          <polygon
            transform="matrix(.42848 0 0 .42183 -238.67 -121.45)"
            points="729.1 521.7 802.1 521.7 826.6 542.5 704.6 542.5"
            fill="#73573b"
          />
          <polygon
            transform="matrix(.4206 0 0 .36441 -231.15 -90.301)"
            points="699 542.5 723.5 521.7 796.4 521.7 821 542.5"
            fill="#8a6848"
          />
          <rect
            x="79.738"
            y="97.831"
            width="1.9854"
            height="5.1353"
            fill="#f9baab"
            strokeWidth=".36424"
          />
          <rect
            x="78.427"
            y="97.831"
            width="1.9854"
            height="5.1353"
            fill="#f59277"
            strokeWidth=".36424"
          />
        </motion.g>
        <motion.g fill={windows.color} animate={lightAnimation}>
          <g strokeWidth=".36424">
            <rect x="72.92" y="109.98" width="2.6222" height="3.3291" />
            <rect x="72.92" y="117.95" width="2.6222" height="3.3291" />
            <rect x="83.222" y="109.98" width="2.6222" height="3.3291" />
            <rect x="83.222" y="117.95" width="2.6222" height="3.3291" />
            <rect x="91.351" y="109.98" width="2.6222" height="3.3291" />
            <rect x="91.351" y="117.95" width="2.6222" height="3.3291" />
          </g>
          <g transform="matrix(.3746 0 0 .35416 -194.14 -84.739)">
            <rect x="798.4" y="549.8" width="7" height="9.4" />
            <rect x="798.4" y="572.3" width="7" height="9.4" />
          </g>
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};
