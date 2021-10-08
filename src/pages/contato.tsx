import {
  Box,
  Flex,
  Heading,
  Icon,
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Link,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const contatos: NextPage = () => {
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal" color="blue.500">
          Meus contatos!
        </Heading>
      </Flex>

      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Rede social</Th>

            <Th>Link</Th>
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>
              <Icon as={AiFillGithub} fontSize="20" />
            </Td>
            <Td>Github</Td>
            <Td>
              <Link
                href="https://github.com/ArthurBernardoDev"
                color="gray.200"
              >
                ArthurBernardoDev
              </Link>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Icon as={AiFillLinkedin} fontSize="20" />
            </Td>
            <Td>Linkedin</Td>
            <Td>
              <Link
                href="https://www.linkedin.com/in/arthur-bernardo-a636b3180/"
                color="gray.200"
              >
                Arthur Bernardo
              </Link>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Icon as={SiGmail} fontSize="20" />
            </Td>
            <Td>Gmail</Td>
            <Td>
              <Link
                href="https://www.gmail.com/contato.arthurbernardoas@gmail.com"
                color="gray.200"
              >
                Arthur Bernardo
              </Link>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
export default contatos;
