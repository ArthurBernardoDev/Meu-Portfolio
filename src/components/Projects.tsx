import { Flex, Text, Box, SimpleGrid, Link } from '@chakra-ui/react'
import Image from 'next/image'


interface ProjectsProps {
    titulo: string;
    descrição: string;
    especificações: string;
    imagem: string;
    linkRepositorio: string;
    tituloLinkRepo: string;
    tituloLinkSite: string;
    linkSite: string;
}



export function Projects({ titulo, descrição, especificações, imagem, linkRepositorio, linkSite, tituloLinkRepo, tituloLinkSite }: ProjectsProps) {
    return (
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                <Box
                    p="8"
                    bg="gray.800"
                    borderRadius={8}
                    pg="4"

                >
                    <Text
                        fontSize="3xl"
                        mb="4"
                        color="blue.500"
                        id={titulo}
                        name={titulo}
                    >
                        {titulo}
                    </Text>
                    <Text
                        fontSize="1xl"
                        mb="2"
                        id={descrição}
                    >
                        {descrição}
                    </Text>

                    <Text
                        fontSize="14"
                        mb="2"
                        fontWeight="normal"
                        color="whiteAlpha.700"
                        id={especificações}
                    >
                        {especificações}
                    </Text>
                    <Image
                        id="imagem"
                        src={imagem}
                        width={300}
                        height={200}
                    />

                    <Flex mt="8" justify="flex-end">
                        <Link ml="20" color="blue.300" href={linkRepositorio}>{tituloLinkRepo}</Link>
                        <Link ml="4" color="blue.300" href={linkSite}>{tituloLinkSite}</Link>
                    </Flex>
                </Box>
            </SimpleGrid>

        </Flex >
    );
}