import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Flex direction="column" h="100vh">
          <Header />
          <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
