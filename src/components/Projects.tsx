import { Flex, Text, Box, SimpleGrid, Icon } from '@chakra-ui/react'

interface ProjectsProps {
    titulo: string;
    descrição: string;
    especificações: string;
    imagem?: string;

}


export function Projects({ titulo, descrição, especificações, imagem }: ProjectsProps) {
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
                    <img src={imagem} alt={imagem} />
                    <Text
                        fontSize="1xl"
                        mb="2"
                        id={descrição}
                    >
                        {descrição}
                    </Text>

                    <Text
                        fontSize="10"
                        mb="2"
                        fontWeight="normal"
                        color="whiteAlpha.700"
                        id={especificações}
                    >
                        {especificações}
                    </Text>
                </Box>
            </SimpleGrid>

        </Flex>
    );
}