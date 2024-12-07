import {
  Box,
  Stack,
  type StackProps,
  StackSeparator,
  HStack,
} from "@chakra-ui/react";
import {
  LuBookmark,
  LuClock,
  LuHelpCircle,
  LuLayoutDashboard,
  LuPieChart,
  LuSettings,
} from "react-icons/lu";
import { Logo } from "../common/Logo";
import { SearchField } from "../common/Search-field";
import { SidebarLink } from "../navigation/Sidebar-link";
import { UserProfile } from "../common/User-profile";
import { DocumentsLinks } from "../navigation/Document-links";
import { ColorModeToggle } from "../common/Color-mode-toggle";

export const Sidebar = (props: StackProps) => {
  return (
    <Stack
      flex="1"
      height="100vh"
      p={{ base: "4", md: "6" }}
      bg="bg.panel"
      borderRightWidth="1px"
      justifyContent="space-between"
      maxW="xs"
      position="sticky"
      top="0"
      {...props}
    >
      <Stack gap="6">
        <HStack justify="space-between" align="center">
          <Logo style={{ alignSelf: "start" }} />
          <ColorModeToggle />
        </HStack>
        <SearchField />
        <Stack gap="1">
          <SidebarLink>
            <LuLayoutDashboard /> Dashboard
          </SidebarLink>
          <SidebarLink aria-current="page">
            <LuPieChart /> Analysis
          </SidebarLink>
          <DocumentsLinks />
          <SidebarLink>
            <LuClock /> History
          </SidebarLink>
          <SidebarLink>
            <LuBookmark /> Favorites
          </SidebarLink>
        </Stack>
      </Stack>
      <Stack gap="4" separator={<StackSeparator />}>
        <Box />
        <Stack gap="1">
          <SidebarLink>
            <LuHelpCircle /> Help Center
          </SidebarLink>
          <SidebarLink>
            <LuSettings /> Settings
          </SidebarLink>
        </Stack>
        <UserProfile />
      </Stack>
    </Stack>
  );
};
