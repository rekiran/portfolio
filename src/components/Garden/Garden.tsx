import { Text, Group, Container, Card, Badge, Tabs } from "@mantine/core";

import classes from "./Garden.module.css";
import wiki from "../../assets/Data/wiki.json";

export function Garden() {
  const wikiBanner = wiki.map((item, index: number) => (
    <Card
      key={index}
      className={classes.card}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <a className={classes.a} href={item.link} target="_blank">
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{item.title}</Text>
          <Badge color="pink">{item.date}</Badge>
        </Group>
        <Text size="sm" c="dimmed">
          {item.description}
        </Text>
      </a>
    </Card>
  ));

  return (
    <Container my="md" className={classes.container}>
      <Tabs
        defaultValue="Today I learned"
        orientation="vertical"
        variant="outline"
        radius="xl"
      >
        <Tabs.List>
          <Tabs.Tab value="Today I learned">Today I learned</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Today I learned">{wikiBanner}</Tabs.Panel>
      </Tabs>
    </Container>
  );
}
