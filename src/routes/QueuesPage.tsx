import { Card, Stack, Table, Text, Title } from "@mantine/core";

type QueueRow = {
  queue: string;
  language: string;
  staff: number;
  backlog: number;
};

const queueRows: QueueRow[] = [
  { queue: "Trust & Safety", language: "EN", staff: 14, backlog: 203 },
  { queue: "Pro Support", language: "EN/DE", staff: 9, backlog: 64 },
  { queue: "Live Chat", language: "EN/JP", staff: 11, backlog: 119 },
  { queue: "Payments Review", language: "EN/FR", staff: 6, backlog: 32 },
];

export function QueuesPage() {
  return (
    <Stack gap="lg">
      <div>
        <Title order={2}>Queues</Title>
        <Text c="dimmed">Regional backlog and staffing pressure</Text>
      </div>

      <Card withBorder radius="md" padding="lg">
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Queue</Table.Th>
              <Table.Th>Language</Table.Th>
              <Table.Th>Staffing</Table.Th>
              <Table.Th>Backlog</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {queueRows.map((row) => (
              <Table.Tr key={row.queue}>
                <Table.Td>{row.queue}</Table.Td>
                <Table.Td>{row.language}</Table.Td>
                <Table.Td>{row.staff}</Table.Td>
                <Table.Td>{row.backlog}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Card>
    </Stack>
  );
}
