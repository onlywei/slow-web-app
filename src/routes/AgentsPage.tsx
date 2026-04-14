import { Avatar, Badge, Card, Group, SimpleGrid, Stack, Text, Title } from "@mantine/core";

type AgentRow = {
  name: string;
  team: string;
  timezone: string;
  status: string;
};

const agentRows: AgentRow[] = [
  { name: "Talia Chen", team: "Escalations", timezone: "America/Los_Angeles", status: "Online" },
  { name: "Mateo Silva", team: "Billing", timezone: "America/Sao_Paulo", status: "Break" },
  { name: "Aiko Watanabe", team: "Platform", timezone: "Asia/Tokyo", status: "Online" },
  { name: "Hana Kovac", team: "Trust & Safety", timezone: "Europe/Prague", status: "Offline" },
];

export function AgentsPage() {
  return (
    <Stack gap="lg">
      <div>
        <Title order={2}>Agents</Title>
        <Text c="dimmed">Directory of support staff, schedules, and local coverage</Text>
      </div>

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        {agentRows.map((agent) => (
          <Card key={agent.name} withBorder radius="md" padding="lg">
            <Group align="flex-start" wrap="nowrap">
              <Avatar radius="xl" size="lg" color="blue">
                {agent.name.slice(0, 1)}
              </Avatar>
              <div>
                <Group gap="xs">
                  <Text fw={600}>{agent.name}</Text>
                  <Badge variant="light">{agent.status}</Badge>
                </Group>
                <Text size="sm" c="dimmed">
                  {agent.team}
                </Text>
                <Text size="sm" mt="xs">
                  {agent.timezone}
                </Text>
              </div>
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
