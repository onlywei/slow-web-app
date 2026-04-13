import "@mantine/core/styles.css";

import {
  AppShell,
  Badge,
  Card,
  Group,
  MantineProvider,
  NavLink,
  SimpleGrid,
  Stack,
  Table,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconAlertCircle,
  IconClockHour4,
  IconLayoutDashboard,
  IconMessages,
  IconUsers,
} from "@tabler/icons-react";
import { createRoot } from "react-dom/client";

function mountApp() {
  const container = document.getElementById("root");

  if (!container) {
    return;
  }

  function App() {
  const rows = [
    {
      queue: "Enterprise Onboarding",
      region: "AMER",
      backlog: 124,
      risk: "Elevated",
    },
    {
      queue: "Billing Escalations",
      region: "EMEA",
      backlog: 48,
      risk: "Stable",
    },
    {
      queue: "Developer Platform",
      region: "APAC",
      backlog: 89,
      risk: "High",
    },
  ];

  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell
        header={{ height: 64 }}
        navbar={{ width: 240, breakpoint: 0 }}
        padding="lg"
      >
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
            <NavLink label="Overview" leftSection={<IconLayoutDashboard size={16} />} active />
            <NavLink label="Queues" leftSection={<IconMessages size={16} />} />
            <NavLink label="Agents" leftSection={<IconUsers size={16} />} />
            <NavLink label="Incidents" leftSection={<IconAlertCircle size={16} />} />
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          <Stack gap="lg">
            <SimpleGrid cols={{ base: 1, md: 3 }}>
              <Card withBorder radius="md" padding="lg">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Open conversations
                  </Text>
                  <IconMessages size={18} />
                </Group>
                <Title order={2} mt="md">
                  1,284
                </Title>
              </Card>

              <Card withBorder radius="md" padding="lg">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    Median first response
                  </Text>
                  <IconClockHour4 size={18} />
                </Group>
                <Title order={2} mt="md">
                  12m
                </Title>
              </Card>

              <Card withBorder radius="md" padding="lg">
                <Group justify="space-between">
                  <Text size="sm" c="dimmed">
                    SLA breach risk
                  </Text>
                  <IconAlertCircle size={18} />
                </Group>
                <Title order={2} mt="md">
                  7 queues
                </Title>
              </Card>
            </SimpleGrid>

            <Card withBorder radius="md" padding="lg">
              <Group justify="space-between" mb="md">
                <div>
                  <Title order={4}>Queue Health</Title>
                  <Text size="sm" c="dimmed">
                    Current support pressure by region
                  </Text>
                </div>
                <Badge variant="light">Live</Badge>
              </Group>

              <Table striped highlightOnHover>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Queue</Table.Th>
                    <Table.Th>Region</Table.Th>
                    <Table.Th>Backlog</Table.Th>
                    <Table.Th>Risk</Table.Th>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {rows.map((row) => (
                    <Table.Tr key={row.queue}>
                      <Table.Td>{row.queue}</Table.Td>
                      <Table.Td>{row.region}</Table.Td>
                      <Table.Td>{row.backlog}</Table.Td>
                      <Table.Td>{row.risk}</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </Card>
          </Stack>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
  }

  const root = createRoot(container);
  root.render(<App />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp, { once: true });
} else {
  mountApp();
}
