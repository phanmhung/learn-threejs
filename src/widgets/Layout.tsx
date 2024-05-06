import { motion } from "framer-motion";
import { Flex, Stack } from "@chakra-ui/react";
import {Navbar} from "@/features/nav";
import ModelViewer from "@/features/3dmodel";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxW="20vw"
      position="relative"
    >
      <Navbar />
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={8}
        m="0 auto"
        w="100%"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <ModelViewer />
          {children}
        </motion.div>
      </Flex>

      <Footer />
    </Stack>
  );
}
