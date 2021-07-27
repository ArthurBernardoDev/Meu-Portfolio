import { Flex } from "@chakra-ui/react";
import { Header } from '../components/Header'
import { Projects } from "../components/Projects";
import { Sidebar } from '../components/Sidebar'


export default function Projetos() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Projects
                    titulo="DashGo"
                    descrição="Projeto feito com React e next utilizando ChakraUI"
                    especificações="Projeto feito para armazenar a quantidade diaria de inscrições no site"
                />

            </Flex>
        </Flex>
    );
}