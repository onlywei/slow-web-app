import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";

const incidentRows = [
  { title: "SLA breach risk in AMER onboarding", severity: "High", owner: "Ops Desk" },
  { title: "Billing queue staffing gap", severity: "Medium", owner: "EMEA Lead" },
  { title: "Escalation surge after status page incident", severity: "Critical", owner: "Incident Cmd" },
];

export function IncidentsPage() {
  return (
    <Stack gap="lg">
      <div>
        <Title order={2}>Incidents</Title>
        <Text c="dimmed">Active escalations and queue exceptions</Text>
      </div>

      {incidentRows.map((incident) => (
        <Card key={incident.title} withBorder radius="md" padding="lg">
          <Group justify="space-between">
            <div>
              <Text fw={600}>{incident.title}</Text>
              <Text size="sm" c="dimmed">
                Owner: {incident.owner}
              </Text>
            </div>
            <Badge color="red" variant="light">
              {incident.severity}
            </Badge>
          </Group>
        </Card>
      ))}
    </Stack>
  );
}
