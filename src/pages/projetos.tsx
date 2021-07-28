import { Flex } from "@chakra-ui/react";
import { Header } from '../components/Header'
import { Projects } from "../components/Projects";
import { Sidebar } from '../components/Sidebar'



export default function Projetos() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex my="6" maxWidth={1480} mx="auto" px="6" >
                <Sidebar />

                <Flex direction="column" maxWidth={1480}>
                    <Projects
                        titulo="DashGo"
                        descrição="Projeto feito com React e next utilizando ChakraUI"
                        especificações="Projeto feito para armazenar a quantidade diaria de inscrições no site"
                        imagem="/dashgo.png"
                        linkRepositorio="https://github.com/ArthurBernardoDev/DashGo"
                        tituloLinkRepo="Repositorio"
                        linkSite="https://dash-go-theta.vercel.app/dashboard"
                        tituloLinkSite="Acesso ao site"
                    />
                    <Projects
                        titulo="Dtmoney"
                        descrição="Projeto feito com React utilizando o conceito de Styled Components"
                        especificações="Projeto feito com React Consumindo um Api MirajeJs para o back-end 'falso' utilizando Styled Components para o style"
                        imagem="/dtmoney.png"
                        linkRepositorio="https://github.com/ArthurBernardoDev/ignite-Dtmoney"
                        tituloLinkRepo="Repositorio"
                        linkSite="https://ignite-dtmoney-ten.vercel.app/"
                        tituloLinkSite="Acesso ao site"
                    />
                </Flex>

            </Flex>
        </Flex>
    );
}