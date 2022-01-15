import React from "react";
import { Icon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";

export default ({ icon, href, ...props }) => {
  return (
    <Link href={href} display={[props.visible ? "block" : "none", "block"]}>
      <Icon
        as={icon}
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
    </Link>
  );
};
