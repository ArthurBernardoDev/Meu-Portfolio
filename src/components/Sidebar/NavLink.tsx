import { Icon, Link, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from 'react'

interface navLinkProps extends ChakraLinkProps {
    icon: ElementType,
    children: string,
    rota: string,
}

export function NavLink({ icon, children, rota, ...rest }: navLinkProps) {
    return (
        <Link display="flex" align="center" href={rota}>
            <Icon as={icon} fontSize="20" />
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    );
}