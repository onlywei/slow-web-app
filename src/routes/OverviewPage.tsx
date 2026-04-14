import { Badge, Card, Group, SimpleGrid, Stack, Table, Text, Title } from "@mantine/core";
import { IconAlertCircle, IconClockHour4, IconMessages } from "@tabler/icons-react";
import coolTechnoImage from "../cool_techno_image.png";

type OverviewRow = {
  queue: string;
  region: string;
  backlog: number;
  risk: string;
};

const overviewRows: OverviewRow[] = [
  { queue: "Enterprise Onboarding", region: "AMER", backlog: 124, risk: "Elevated" },
  { queue: "Billing Escalations", region: "EMEA", backlog: 48, risk: "Stable" },
  { queue: "Developer Platform", region: "APAC", backlog: 89, risk: "High" },
];

export function OverviewPage() {
  return (
    <Stack gap="lg">
      <Card withBorder radius="md" padding={0} style={{ overflow: "hidden" }}>
        <img
          src={coolTechnoImage}
          alt="Support operations control center overview"
          style={{
            display: "block",
            width: "100%",
            height: "320px",
            objectFit: "cover",
          }}
        />
      </Card>

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
            {overviewRows.map((row) => (
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
  );
}
