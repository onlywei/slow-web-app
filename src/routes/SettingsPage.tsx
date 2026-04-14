import { Card, SimpleGrid, Stack, Text, Title } from "@mantine/core";

export function SettingsPage() {
  return (
    <Stack gap="lg">
      <div>
        <Title order={2}>Settings</Title>
        <Text c="dimmed">Brand, typography, and workspace preferences</Text>
      </div>

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Card withBorder radius="md" padding="lg">
          <Text fw={600}>Typography</Text>
          <Text size="sm" c="dimmed" mt="xs">
            Sans UI stack with dashboard heading treatment and density controls.
          </Text>
        </Card>
        <Card withBorder radius="md" padding="lg">
          <Text fw={600}>Workspace defaults</Text>
          <Text size="sm" c="dimmed" mt="xs">
            Default region: Global, queue grouping: SLA risk, refresh cadence: 3 minutes.
          </Text>
        </Card>
      </SimpleGrid>
    </Stack>
  );
}
