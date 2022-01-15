import { Box } from "@chakra-ui/react";
import { Hero } from "../src/Containers/Hero/Hero";
import { AboutUs } from "../src/Containers/AboutUs/AboutUs";
import { Matches } from "../src/Containers/Matches/Matches";
import { Contact } from "../src/Containers/Contact/Contact";
import { Footer } from "../src/Containers/Footer/Footer";

export default function Home() {
  return (
    <Box w="100%" as="main">
        <Hero />
        <AboutUs />
        <Contact />
        <Matches />
        <Footer />
    </Box>
  );
}