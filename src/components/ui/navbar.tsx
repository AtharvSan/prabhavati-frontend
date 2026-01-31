import { Box, Group, Text, Container, Button, Stack } from "@mantine/core";

const tabs = [
  { key: "tractors", label: "Tractors" },
  { key: "deshpande", label: "Sir Deshpande" },
  { key: "dada", label: "Dada Lad" },
];

export default function Navbar({ active, setActive }: any) {
  return (
    <Box py="sm" style={{ borderBottom: "1px solid #eee" }}>
      <Container size="lg">
        {/* DESKTOP */}
        <Group justify="space-between" visibleFrom="sm">
          <Text fw={700} size="xl">Prabhavati</Text>

          <Group gap="xs">
            {tabs.map((tab) => {
              const isActive = active === tab.key;
              return (
                <Box
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  px="md"
                  py={6}
                  style={{
                    borderRadius: 999,
                    background: "#f2f2f2",
                    color: isActive ? "#ff7a00" : "#000",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {tab.label}
                </Box>
              );
            })}
          </Group>

          <Button radius="xl" color="orange">Book Now</Button>
        </Group>

        {/* MOBILE */}
        <Stack gap="sm" hiddenFrom="sm">
          <Text fw={700} size="lg" ta="center">
            Prabhavati
          </Text>

          <Group justify="center" gap="xs">
            {tabs.map((tab) => {
              const isActive = active === tab.key;
              return (
                <Box
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  px="md"
                  py={6}
                  style={{
                    borderRadius: 999,
                    background: "#f2f2f2",
                    color: isActive ? "#ff7a00" : "#000",
                    cursor: "pointer",
                    fontWeight: 500,
                    fontSize: 14,
                  }}
                >
                  {tab.label}
                </Box>
              );
            })}
          </Group>

          {/* only for desktop */}
          <Button radius="xl" color="orange" fullWidth visibleFrom="sm">
            Book Now
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
