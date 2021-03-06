import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { NextPage } from "next";

const certificados: NextPage = () => {
  return (
    <SimpleGrid
      direction="column"
      flex="1"
      gap="4"
      minChildWidth="320px"
      align="flex-start"
    >
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pg="4">
            <Text fontSize="3xl" mb="4" color="blue.500">
              Trilha ReactJs do Ignite da RocketSeat
            </Text>
            <Text fontSize="1xl" mb="2">
              Curso de aceleração de carreira pela Rocketseat
            </Text>

            <Text
              fontSize="14"
              mb="4"
              fontWeight="normal"
              color="whiteAlpha.700"
            >
              O Ignite da Rocketseat fornece conhecimentos e desafios sobre
              ReactJs. Entre eles, Fundamentos de ReactJs, Desafio: Refactoring
              de classes e TypeScript, Fundamentos de Next.Js, Back-end no
              Front-end, Front-end JAMStack, Desafio: Criando uma aplicação do
              zero, Construindo interfaces do futuro com ChakraUI, Data Fetching
              e cache local, Autenticação e autorização, Performando apps com
              ReactJs, testes unitários no React, Estratégias de deploy no
              ReactJs entre outros
            </Text>
            <Image
              id="imagem"
              src="/certificadopreto.png"
              width={600}
              height={450}
            />
            <Flex mt="8" justify="flex-end">
              <Link
                ml="20"
                color="blue.300"
                href="https://app.rocketseat.com.br/certificates/b78b0d0c-beb6-4f26-8f0f-3e9d4630258e"
              >
                Acessar o certificado
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    </SimpleGrid>
  );
};
export default certificados;
