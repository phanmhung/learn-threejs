import {
  Box,
  Stack,
  Text,
  Flex,
  ButtonGroup,
  IconButton,
  Link,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    m=" 0 auto"
    width={"100%"}
    maxW="100%"
    px={{ base: "4", md: "8" }}
  >
    <Stack
      direction="row"
      spacing="6"
      align="center"
      alignSelf={"center"}
      justify="center"
      textAlign="center"
    >
      <ButtonGroup variant="default">
        <IconButton
          as="a"
          href="mailto:pmhungpro1@gmail.com"
          aria-label="Email: pmhungpro1@gmail.com"
          icon={<FaEnvelope fontSize="20px" />}
        />
        <IconButton
          as="a"
          variant={"default"}
          href="https://www.instagram.com/phanminhhung2000/"
          aria-label="instagram"
          icon={<FaInstagram fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://linkedin.com/in/hung-phan-6b7978158"
          aria-label="Linkedin"
          icon={<FaLinkedin fontSize="20px" />}
        />
        <IconButton
          as="a"
          href="https://github.com/phanmhung"
          aria-label="Github"
          icon={<FaGithub fontSize="20px" />}
        />
      </ButtonGroup>
    </Stack>
    {/* <Flex
      justifyContent={"center"}
      fontWeight="bold"
      fontSize={9}
      fontFamily={"monospace"}
      gap="10px"
    >
      <NextLink href="/blog">Blog</NextLink>
      <NextLink href="/snippets">Snippets</NextLink>
      <NextLink
        href=""
        passHref
      >
        Resume
      </NextLink>
      <NextLink href="/About">About</NextLink>
    </Flex> */}
    <Divider pt={2} w="100%" />
    <Stack direction="row" align="center" justify="space-between" pt={5}>
      <Text fontSize="11px" fontWeight={"medium"}>
        &copy; Hung Phan {new Date().getFullYear()}
      </Text>
      <IconButton
        as={Link}
        rounded="md"
        background={"none"}
        _hover={{ background: "none" }}
        aria-label="Github Repo"
        rel="noopener"
        href="https://github.com/phanmhung/learn-threejs"
        isExternal
        icon={<FaGithub fontSize="18px" />}
      />
    </Stack>
  </Box>
);

export default Footer;
