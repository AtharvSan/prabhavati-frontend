import { useState } from "react";
import {
  Card,
  TextInput,
  NumberInput,
  Button,
  Stack,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

export function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    date: null as Date | null,
    hours: 0,
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Booking Data:", form);
  // };

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
    <div style={{ padding: 24, display: "flex", justifyContent: "center" }}>
      <Card shadow="md" radius="md" withBorder style={{ width: 420 }}>
        <Title order={3} mb="md">
          🚜 Tractor Booking
        </Title>

        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Farmer Name"
              placeholder="Enter name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.currentTarget.value })
              }
              required
            />

            <TextInput
              label="Phone Number"
              placeholder="Enter phone"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.currentTarget.value })
              }
              required
            />

            <TextInput
              label="Field Location"
              placeholder="Village / Area"
              value={form.location}
              onChange={(e) =>
                setForm({ ...form, location: e.currentTarget.value })
              }
              required
            />

            <DateInput
              label="Booking Date"
              value={form.date}
              onChange={(value) => setForm({ ...form, date: value })}
              required
            />

            <NumberInput
              label="Hours Required"
              min={1}
              value={form.hours}
              onChange={(value) =>
                setForm({ ...form, hours: Number(value) })
              }
              required
            />

            <Button type="submit" fullWidth>
              Book Tractor
            </Button>
          </Stack>
        </form>
      </Card>
    </div>
  );
}

export default App;
