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
      <div style={{ padding: 24, display: "flex", justifyContent: "center" }}>
        {active === "tractors" && (
          <Card shadow="md" radius="md" withBorder style={{ width: 420 }}>
            <Title order={3} mb="md">
              🚜 Tractor Booking
            </Title>
            <form onSubmit={handleSubmit}>
              <Stack>
                <TextInput
                  label="Farmer Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.currentTarget.value })
                  }
                  required
                />
                <TextInput
                  label="Phone Number"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({ ...form, phone: e.currentTarget.value })
                  }
                  required
                />
                <TextInput
                  label="Field Location"
                  value={form.location}
                  onChange={(e) =>
                    setForm({ ...form, location: e.currentTarget.value })
                  }
                  required
                />
                <DateInput
                  label="Booking Date"
                  value={form.date}
                  onChange={(v) => setForm({ ...form, date: v })}
                  required
                />
                <NumberInput
                  label="Hours Required"
                  min={1}
                  value={form.hours}
                  onChange={(v) => setForm({ ...form, hours: Number(v) })}
                  required
                />
                <Button type="submit" fullWidth>
                  Book Tractor
                </Button>
              </Stack>
            </form>
          </Card>
        )}

        {active === "deshpande" && (
          <Card shadow="md" radius="md" withBorder style={{ width: 640 }}>
            <Title order={3} mb="md">
              Sir Deshpande
            </Title>
            <Box style={{ aspectRatio: "16 / 9" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MtZrQxzTgic"
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              />
            </Box>
          </Card>
        )}

        {active === "dada" && (
          <Card shadow="md" radius="md" withBorder style={{ width: 640 }}>
            <Title order={3} mb="md">
              Dada Lad
            </Title>
            <Box style={{ aspectRatio: "16 / 9" }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WkBUbEmEHWQ?si=dF4sLOUBekoAfHau"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </Box>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
