import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Flex, Text, Box, SimpleGrid, Icon } from '@chakra-ui/react'
import { FaReact, FaCss3 } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiTypescript } from "react-icons/si";


export default function Home() {
  return (

    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pg="4"

          >
            <Text fontSize="3xl" mb="4" color="blue.500">Sobre Mim</Text>
            <Text fontSize="2xl" mb="2">Olá eu sou o Arthur Bernardo</Text>
            <Text fontSize="20" mb="2" fontWeight="normal" color="whiteAlpha.700">
              Atualmente meus estudos são voltados Front-end com foco em tecnologias e frameworks como React, Next e Typescript. Tenho 18 anos e moro no Brasil.
              Estou cursando o 2° semestre de Análise e desenvolvimento de sistemas pela Puc-Minas
            </Text>
            <Box>
              <Icon as={AiFillHtml5} color="red.300" fontSize="25" ml="4" />
              <Icon as={FaCss3} color="blue.300" fontSize="25" ml="4" />
              <Icon as={SiJavascript} color="yellow.300" fontSize="25" ml="4" />
              <Icon as={SiTypescript} color="blue.300" fontSize="25" ml="4" />
              <Icon as={FaReact} color="blue.400" fontSize="25" ml="4" />
            </Box>
          </Box>
        </SimpleGrid>

      </Flex>
    </Flex>

  )
}
