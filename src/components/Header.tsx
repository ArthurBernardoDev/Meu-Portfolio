import { Flex, Text, Link, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                MeuPortifólio
                <Text as="span" ml="1" color="blue.500">!</Text>
            </Text>


            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing="8"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"

                >
                    <Link href="https://github.com/ArthurBernardoDev"><Icon as={AiFillGithub} fontSize="20" /></Link>
                    <Link href="https://www.linkedin.com/in/arthur-bernardo-a636b3180/"><Icon as={AiFillLinkedin} fontSize="20" /></Link>
                </HStack>

                <Flex align="center">
                    <Box mr="4" textAlign="right">
                        <Text >Arthur Bernardo</Text>
                        <Text color="gray.300" fontSize="small">Contato.arthurbernardoas@gmail.com</Text>
                    </Box>
                    <Avatar size="md" name="Arthur Bernardo" src="https://github.com/ArthurBernardoDev.png" />
                </Flex>
            </Flex>

        </Flex>
    );
}
