import { Icon } from "@chakra-ui/react";
import { Box, Stack, Text, Link } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, } from "react-icons/ri";
import { AiOutlineLaptop } from "react-icons/ai";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.400" fontSize="small">GERAL</Text>
                    <Stack spacing="4" mt="8" align="stretch">
                        <Link display="flex" align="center" href="/">
                            <Icon as={RiDashboardLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Dashboard</Text>
                        </Link>
                        <Link display="flex" align="center" href="/contato">
                            <Icon as={RiContactsLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Contato</Text>
                        </Link>
                        <Link display="flex" align="center" href="/users">
                            <Icon as={AiOutlineLaptop} fontSize="20" />
                            <Text ml="4" fontWeight="medium">Projetos</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}