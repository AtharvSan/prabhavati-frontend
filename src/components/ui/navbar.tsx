import { Box, Group, Text, Container } from "@mantine/core";

const tabs = [
  { key: "tractors", label: "Tractors" },
  { key: "deshpande", label: "Sir Deshpande" },
  { key: "dada", label: "Dada Lad" },
];

export default function Navbar({ active, setActive }: any) {
  return (
    <Box
      h={64}
      px="md"
      style={{
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container size="lg" w="100%">
        <Group justify="space-between">
          {/* Logo */}
          <Text fw={700}>🚜 Tractor App</Text>

          {/* Nav tabs */}
            <Group gap={32}>
            {tabs.map((tab) => {
                const isActive = active === tab.key;
                return (
                <Box
                    key={tab.key}
                    onClick={() => setActive(tab.key)}
                    style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    background: "#f2f2f2",
                    color: isActive ? "#ff7a00" : "#000",
                    cursor: "pointer",
                    fontWeight: 500,
                    }}
                    sx={{ "&:hover": { background: "#e6e6e6" } }}
                >
                    {tab.label}
                </Box>
                );
            })}
            </Group>


          {/* CTA */}
          <Box
            style={{
              background: "#ff7a00",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: 999,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Book Now
          </Box>
        </Group>
      </Container>
    </Box>
  );
}
