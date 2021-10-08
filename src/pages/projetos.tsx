import { SimpleGrid } from "@chakra-ui/react";
import { NextPage } from "next";
import { Projects } from "../components/Projects";
const Projetos: NextPage = () => {
  return (
    <SimpleGrid
      direction="column"
      flex="1"
      gap="4"
      minChildWidth="320px"
      align="flex-start"
    >
      <Projects
        titulo="Ignews"
        descrição="Projeto feito com React e Scss"
        especificações="Site com login feito por autenticação com Github utilizando Github Auth e Stripe para pagamento de conteúdos React"
        imagem="/IgNews.png"
        linkRepositorio="https://github.com/ArthurBernardoDev/IgNews"
        linkSite="#"
      />
      <Projects
        titulo="DashGo"
        descrição="Projeto feito com React e next utilizando ChakraUI"
        especificações="Projeto feito para armazenar a quantidade diaria de inscrições no site"
        imagem="/dashgo.png"
        linkRepositorio="https://github.com/ArthurBernardoDev/DashGo"
        linkSite="https://dash-go-theta.vercel.app/dashboard"
      />
      <Projects
        titulo="Dtmoney"
        descrição="Projeto feito com React utilizando o conceito de Styled Components"
        especificações="Projeto feito com React Consumindo uma Api MirajeJs para o back-end 'falso' utilizando Styled Components"
        imagem="/dtmoney.png"
        linkRepositorio="https://github.com/ArthurBernardoDev/ignite-Dtmoney"
        linkSite="https://ignite-dtmoney-ten.vercel.app/"
      />
      <Projects
        titulo="Walking Style"
        descrição="Projeto feito com Html Css Js e Json server"
        especificações="Projeto feito no primeiro semestre da faculdade de Análise e desenvolvimento de sistemas pela puc minas"
        imagem="/walking.png"
        linkRepositorio="https://github.com/ArthurBernardoDev/Walking_Style"
        linkSite="https://arthurbernardodev.github.io/Walking_Style/"
      />
      <Projects
        titulo="Pet Pass"
        descrição="Projeto feito com NetxJs, ChakraUI, typescript, C#, Asp.Net (Em Desenvolvimento)"
        especificações="Projeto em desenvolvimento no segundo semestre da faculdade de Análise e desenvolvimento de sistemas pela puc minas"
        imagem="/petpassimg.png"
        linkRepositorio="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2021-2-e2-proj-int-t3-petpass"
        linkSite="https://pet-pass.vercel.app/"
      />
    </SimpleGrid>
  );
};
export default Projetos;
