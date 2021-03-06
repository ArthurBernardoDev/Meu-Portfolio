import { Text, Box, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaReact, FaCss3, FaSass } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { IoLogoNodejs } from 'react-icons/io'
import { NextPage } from "next";

const home: NextPage = () => {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
      <Box p="8" bg="gray.800" borderRadius={8} pg="4">
        <Text fontSize="3xl" mb="4" color="blue.500">
          Sobre Mim
        </Text>
        <Text fontSize="2xl" mb="2">
          Olá eu sou o Arthur Bernardo
        </Text>
        <Text fontSize="20" mb="2" fontWeight="normal" color="whiteAlpha.700">
          Sou um desenvolvedor de software Front-end com experiência com ReactJs e Nextjs. Atualmente meus estudos estão direcionados a Testes unitários com Jest, TDD, Node e TypeORM. Tenho 18 anos
          e moro no Brasil. Estou cursando o 3° semestre de Análise e
          desenvolvimento de sistemas pela Puc-Minas
        </Text>
        <Box mt={'8'}>
          <Icon as={AiFillHtml5} color="red.300" fontSize="25" ml="4" />
          <Icon as={FaCss3} color="blue.300" fontSize="25" ml="4" />
          <Icon as={FaSass} color="pink.300" fontSize="25" ml="4" />
          <Icon as={SiJavascript} color="yellow.300" fontSize="25" ml="4" />
          <Icon as={SiTypescript} color="blue.300" fontSize="25" ml="4" />
          <Icon as={FaReact} color="blue.400" fontSize="25" ml="4" />
          <Icon as={IoLogoNodejs} color="green.400" fontSize="25" ml="4" />
        </Box>
      </Box>
    </SimpleGrid>
  );
};
export default home;
