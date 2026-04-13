import {
  AppShell,
  Badge,
  Group,
  NavLink as MantineNavLink,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconAlertCircle, IconLayoutDashboard, IconMessages, IconPalette, IconUsers } from "@tabler/icons-react";
import { HashRouter, Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AgentsPage } from "./routes/AgentsPage";
import { IncidentsPage } from "./routes/IncidentsPage";
import { OverviewPage } from "./routes/OverviewPage";
import { QueuesPage } from "./routes/QueuesPage";
import { SettingsPage } from "./routes/SettingsPage";

const navItems = [
  { to: "/", label: "Overview", icon: IconLayoutDashboard },
  { to: "/queues", label: "Queues", icon: IconMessages },
  { to: "/agents", label: "Agents", icon: IconUsers },
  { to: "/incidents", label: "Incidents", icon: IconAlertCircle },
  { to: "/settings", label: "Settings", icon: IconPalette },
];

function AppNavLink({ to, label, icon: Icon }) {
  const location = useLocation();
  const active = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <MantineNavLink
      component={Link}
      to={to}
      label={label}
      active={active}
      leftSection={<Icon size={16} />}
    />
  );
}

function ShellLayout() {
  return (
    <AppShell header={{ height: 64 }} navbar={{ width: 240, breakpoint: 0 }} padding="lg">
      <AppShell.Header px="lg">
        <Group h="100%" justify="space-between">
          <Group gap="sm">
            <ThemeIcon size="lg" radius="md" variant="light">
              <IconMessages size={18} />
            </ThemeIcon>
            <div>
              <Title order={3}>Support Ops Console</Title>
              <Text size="sm" c="dimmed">
                Last synced 3m ago
              </Text>
            </div>
          </Group>
          <Badge color="orange" variant="light">
            Deliberately under-optimized build
          </Badge>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="xs">
          {navItems.map((item) => (
            <AppNavLink key={item.to} {...item} />
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<ShellLayout />}>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/queues" element={<QueuesPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/incidents" element={<IncidentsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
