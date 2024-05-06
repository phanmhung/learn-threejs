import {
  Box,
  Text,
  Link,
  VStack,
  Heading,
  ListItem,
  Divider,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <Box as="section">
        <Heading as="h1" fontSize="2xl" fontWeight="medium">
          work
        </Heading>
        <Box
          height="4px"
          w="60px"
          m="10px 0"
          bottom="-1px"
          display="block"
          backgroundImage="radial-gradient( circle farthest-corner at 10% 20%, rgba(255, 94, 247, 1) 17.8%, rgba(2, 245, 255, 1) 100.2% );
}"
        ></Box>
        <VStack spacing={6} align="stretch">
          <Text fontSize="lg" mt={4}>
            I have been working as a software engineer for the past 2 years. I
            have worked with a variety of technologies and programming languages
            and have experience in developing software applications for
            different industries and sectors.
          </Text>
          <Divider borderColor="gray.200" />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            iteam
          </Heading>
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            frontend developer, 2023 — present
          </Text>
          <Text>
          Developed modern and responsive web applications using cutting-edge technologies, including React, Next.js, and Vite, to create engaging user interfaces and enhance user experiences, 
          Spearheaded the development of versatile platforms, landing pages, and interactive games, showcasing adaptability and versatility in frontend development, 
          Collaborated closely with cross-functional teams following Scrum methodologies, participating in daily stand-ups, sprint planning, and retrospectives to meet project deadlines and deliver high-quality products
          </Text>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              My daily responsibilities involve collaborative efforts as part of
              geographically distributed teams, working in sync with the entire
              group to achieve our collective goals.
            </ListItem>
            <ListItem>
              In my role, I lead the frontend development team, focusing on the
              enhancement and introduction of new features within the software
              and development environments, as well as in the consultancy
              services provided by the company. I also contribute to the
              development of APIs using Node.js and Postgresql within the backend
              team.
            </ListItem>
          </UnorderedList>
          <Text>
            Since joining iteam, I have been able to contribute to the
            development of new features and improvements to the software , which
            has allowed the company to expand its customer base and improve its
            services and has led to a more efficient and effective software
            application.
          </Text>
          <Divider borderColor="gray.200" />
          <Heading
            as="h2"
            fontSize="xl"
            mb={1}
            fontWeight="medium"
            letterSpacing="tighter"
          >
            90S Ecommerce
          </Heading>
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            frontend developer, 2022 — 2023
          </Text>
          <Text>
            I worked as a Frontend Developer focused on creating websites and
            applications for various newspapers and news portals. Mundiware is a
            technology company specializing in systems for newspapers and in the
            development of customized solutions aimed at optimizing production
            stages.
          </Text>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              I started as a trainee and was promoted to a full-time position
              after 4 months. I worked on the development of websites and
              applications for various newspapers and news portals.
            </ListItem>
            <ListItem>
              I worked with a variety of projects, including legacy projects
              with technologies such as jQuery and vanilla-js and was
              responsible for the upgrade and maintenance of these projects.
            </ListItem>
          </UnorderedList>
          <Text>
            This was my first job as a developer, and I learned a lot about web
            development and software engineering in a brief period. I was able
            to develop my skills in frontend development and learn about the
            importance of teamwork and collaboration in software development.
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
}
