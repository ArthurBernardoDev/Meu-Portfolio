import { Stack } from "@chakra-ui/react";
import { AiOutlineLaptop } from "react-icons/ai";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
    return (
        <Stack spacing="8" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine} href="/">
                    Dashboard
                </NavLink>
                <NavLink icon={RiContactsLine} href="/contato">
                    Contato
                </NavLink>
                <NavLink icon={AiOutlineLaptop} href="/projetos">
                    Projetos
                </NavLink>
            </NavSection>
        </Stack>

    );
}