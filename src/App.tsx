import { useState } from "react";
import {
  Card,
  TextInput,
  NumberInput,
  Button,
  Stack,
  Title,
  Group,
  Image,
  Box,
  Center,
  Container,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import NavBar from "src/components/ui/navbar"; // Import NavBar component

export function App() {
  const [active, setActive] = useState<"tractors" | "deshpande" | "dada">(
    "tractors",
  );

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    date: null as Date | null,
    hours: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Booking submitted");
  };

  return (
    <div>
      {/* Navbar */}
      <NavBar active={active} setActive={setActive} />

      {/* Content */}
      <Container size="lg" py="xl">
        <Center>
          {active === "tractors" && (
            <Card shadow="md" radius="lg" withBorder maw={420} w="100%">
              <Title order={3} mb="md">🚜 Tractor Booking</Title>
              <form onSubmit={handleSubmit}>
                <Stack>
                  <TextInput label="Farmer Name" required />
                  <TextInput label="Phone Number" required />
                  <TextInput label="Field Location" required />
                  <DateInput label="Booking Date" required />
                  <NumberInput label="Hours Required" min={1} required />
                  <Button type="submit" size="md">Book Tractor</Button>
                </Stack>
              </form>
            </Card>
          )}

          {(active === "deshpande" || active === "dada") && (
            <Card shadow="md" radius="lg" withBorder maw={720} w="100%">
              <Title order={3} mb="md">
                {active === "deshpande" ? "Sir Deshpande" : "Dada Lad"}
              </Title>
              <Box style={{ aspectRatio: "16 / 9", borderRadius: 12, overflow: "hidden" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={
                    active === "deshpande"
                      ? "https://www.youtube.com/embed/MtZrQxzTgic"
                      : "https://www.youtube.com/embed/WkBUbEmEHWQ"
                  }
                  frameBorder="0"
                  allowFullScreen
                />
              </Box>
            </Card>
          )}
        </Center>
      </Container>
    </div>
  );
}

export default App;
