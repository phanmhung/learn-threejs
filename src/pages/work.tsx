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
} from '@chakra-ui/react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
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
            I have been working as a software engineer for the past 2 years. I have worked with a
            variety of technologies and programming languages and have experience in developing
            software applications for different industries and sectors.
          </Text>
          <Divider borderColor="gray.200" />
          <Heading as="h2" fontSize="xl" mb={1} fontWeight="medium" letterSpacing="tighter">
            iteam
          </Heading>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            frontend developer, 2023 — present
          </Text>
          <Text>
            Developed modern and responsive web applications leveraging cutting-edge technologies
            such as React, Next.js, and Vite to craft compelling user interfaces and elevate user
            experiences. Played a pivotal role in spearheading the development of versatile
            platforms, landing pages, and interactive games, demonstrating adaptability and
            proficiency in frontend development. Collaborated closely with cross-functional teams,
            adhering to Scrum methodologies through active participation in daily stand-ups, sprint
            planning sessions, and retrospectives to ensure timely project delivery and uphold
            product excellence.
          </Text>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              In my daily responsibilities, I engage in collaborative efforts within distributed
              teams, aligning efforts towards achieving collective objectives. Within my role, I
              provide support to new colleagues in the frontend development team, concentrating on
              enhancing existing features and introducing novel functionalities across software and
              development environments, alongside consultancy services. Additionally, I contribute
              to backend development by crafting APIs using Node.js and Postgresql.
            </ListItem>
            <ListItem>
              Since joining iteam, my contributions have driven the development of new features and
              enhancements to our software suite. These efforts have not only facilitated the
              expansion of our client base but have also significantly enhanced the quality and
              efficiency of our software applications.
            </ListItem>
          </UnorderedList>
          <Text>
            Since joining iteam, I have been able to contribute to the development of new features
            and improvements to the software , which has allowed the company to expand its customer
            base and improve its services and has led to a more efficient and effective software
            application.
          </Text>
          <Divider borderColor="gray.200" />
          <Heading as="h2" fontSize="xl" mb={1} fontWeight="medium" letterSpacing="tighter">
            90S Ecommerce
          </Heading>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            frontend developer, 2022 — 2023
          </Text>
          <Text>
            As a Frontend Developer at 90s, a company with a focus on ecommerce, B2B platforms, and
            store websites, my primary role involved crafting websites and applications tailored for
            various affilates and news portals using simple React.js and Redux toolkits.
          </Text>
          <UnorderedList spacing={3} px={6}>
            <ListItem>
              Starting as a trainee, I earned a full-time position within four months. Throughout my
              tenure, I actively contributed to developing websites and applications for affilate
              site and payments system.
            </ListItem>
            <ListItem>
              My portfolio encompassed a range of projects, including legacy endeavors utilizing
              technologies such as jQuery and vanilla JavaScript. In this capacity, I was
              responsible for modernizing and maintaining these projects.
            </ListItem>
          </UnorderedList>
          <Text>
            This was my first job as a developer, and I learned a lot about web development and
            software engineering in a brief period. I was able to develop my skills in frontend
            development and learn about the importance of teamwork and collaboration in software
            development.
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
}
