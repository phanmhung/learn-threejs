import {
    Box,
    Text,
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
    title: 'Education',
    description: 'A brief history of my education.',
  };
  
  export default function EducationPage() {
    return (
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <Box as="section">
          <Heading as="h1" fontSize="2xl" fontWeight="medium">
            Education
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
                {`I have a Bachelor's degree in Computer Science from the Tomsk State University, Tomsk (TSU). 
                I graduated in 2023 with a focus on software engineering and web development.`}
            </Text>
            <Divider borderColor="gray.200" />
            <Heading as="h2" fontSize="xl" mb={1} fontWeight="medium" letterSpacing="tighter">
              Tomsk State University
            </Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              2019 — 2023
            </Text>
            <Text>
                During my time at TSU, I studied a variety of subjects, including algorithms and data structures,
                software engineering, web development, and computer networks. I also participated in several
                extracurricular activities, such as hackathons and coding competitions, to further develop my skills.
            </Text>
            <UnorderedList spacing={3} px={6}>
              <ListItem>
                I graduated with honors and was recognized for my academic achievements and contributions to
                the university community. My coursework included projects that required me to design and
                implement software applications, conduct research, and present my findings to faculty and peers.
              </ListItem>
              <ListItem>
                I also completed an internship at a local software company, where I gained practical experience
                working on real-world projects and collaborating with other developers. This experience helped
                me develop my technical skills and prepare for a career in software engineering.
              </ListItem>
            </UnorderedList>
            <Text>
                Overall, my time at TSU was a valuable learning experience that prepared me for a career in
                software engineering. I gained a solid foundation in computer science principles and practical
                experience working on software projects, which has been instrumental in my professional development.
            </Text>
            <Divider borderColor="gray.200" />
            <Heading as="h2" fontSize="xl" mb={1} fontWeight="medium" letterSpacing="tighter">
            Tomsk State University
            </Heading>
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              2023 — 2025
            </Text>
            <Text>
                {`I am currently pursuing a Master's degree in Software Engineer at TSU. 
                I am focusing on advanced topics in web development and software architecture.
                I am also working on a research project that explores new approaches to building web applications.`}
            </Text>
            <UnorderedList spacing={3} px={6}>
              <ListItem>
                My coursework includes advanced topics in web development, software architecture, 
                and human-computer interaction. I am also working on a research project that explores new 
                approaches to building web applications.
              </ListItem>
              <ListItem>
                I am excited to continue my education and deepen my knowledge of software engineering. 
                I am looking forward to applying what I learn in my classes and research to real-world 
                projects and challenges.
              </ListItem>
            </UnorderedList>
            <Text>
                {`I am confident that my Master's degree will help me advance my career in software engineering 
                and enable me to take on new and exciting challenges in the field. I am grateful for the 
                opportunity to continue my education and pursue my passion for technology.`}
            </Text>
          </VStack>
        </Box>
      </motion.div>
    );
  }
  