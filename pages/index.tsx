import Layout from "../layouts/Layout";
import {
  Heading,
  Box,
  Flex,
  Link,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";
import Paragraph from "../layouts/Paragraph";
import Script from "next/script";
import ProjectCard from "../components/projects/ProjectCard";
import { RoughNotation } from "react-rough-notation";
import { useEffect, useState } from "react";
import ModelViewerMid from "../components/3dmodel/3dModelMid";

const url = "https://phanminhhung.tech";
const title = "Hung Phan";
const description =
  "Self-taught web developer, Javascript enthusiast, passionate about building things with code and with a great knowledge of techniques aimed at a great user experience.";

export default function Home() {
  const [showNotation, setShowNotation] = useState(true);

  useEffect(() => {
    const handleNotationDisplay = () => {
      if (window.innerWidth > 768) setShowNotation(true);
      else setShowNotation(false);
    };

    handleNotationDisplay();
  }, []);

  return (
    <>
      <Script async src="https://cdn.splitbee.io/sb.js" />

      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          images: [
            {
              url: "/images/vintagepc.png",
              width: 800,
              height: 420,
              alt: title,
            },
          ],
        }}
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Flex justifyContent="space-around">
          <Flex flexDir="column" p=" 0 20px 0 0">
            <Heading as="h1" p="0 0 30px 0" fontSize="2xl">
              Hi there, I&#39;m Hung 🍃
            </Heading>

            <Paragraph fontSize={['sm', 'md']} lineHeight={1.8}>
              I&#39;m a{" "}
              <RoughNotation
                animate={true}
                animationDelay={2200}
                animationDuration={1000}
                type="underline"
                show={true}
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                Frontend developer
              </RoughNotation>{" "}
              currently based in Tomsk, Russia and working at{" "}
              <RoughNotation
                animate={true}
                animationDelay={5300}
                type="circle"
                show={true}
                color={useColorModeValue("black", "pink")}
                animationDuration={2800}
                padding={1}
              >
                <Link href="https://iteam.dev/" target="_blank">
                  @iteam.
                </Link>
              </RoughNotation>{" "}
              As an avid learner passionate about open source, I enjoy building
              things with code and am particularly interested in languages like{" "}
              <RoughNotation
                animate={true}
                animationDelay={9500}
                type="box"
                show={showNotation}
                color={useColorModeValue("black", "pink")}
                padding={0}
              >
                JavaScript/Typescript, Python
              </RoughNotation>
              , along with their ecosystems. I'm a multipotentialite who loves
              solving problems and learning new things.
            </Paragraph>
          </Flex>
          {/*<Image
              width="180px"
              height="120px"
              borderRadius="50%"
              
              src={`https://github.com/.png`}
            />*/}
        </Flex>
        <Box as="div" m="30px 0"></Box>

        <Box as="section" mt={10} mb={20}>
          <Box
            as="div"
            m="30px 0"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={8}
          >
            <Heading
              letterSpacing="tight"
              mt={8}
              fontSize="2xl"
              as="h2"
              mb={10}
              w="100%"
            >
              Featured Projects
            </Heading>
            <ModelViewerMid />
          </Box>

          <SimpleGrid minChildWidth="300px" spacing="40px">
            <ProjectCard
              title="phanminhhung.tech"
              description="this site, my currently portfolio, built with Next.js, React and ChakraUI. The projects were fetched using GitHub API."
              repoHref="https://github.com/phanmhung/learn-threejs"
              demoHref="https://phanminhhung.tech"
              languageColor="#2b7489"
              language="TypeScript"
              starCount={0}
              stargazersUrl={""}
            />
          </SimpleGrid>
        </Box>
      </motion.div>
    </>
  );
}
