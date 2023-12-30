import { Timeline as Time, Text, Avatar } from "@mantine/core";

import classes from "./About.module.css";
import timedata from "../../assets/Data/timedata.json";
interface TimeDataItem {
  "time-title": string;
  "time-desc": string;
  "time-date": string;
  "time-icon": string;
}

export function About() {
  const renderItem = (item: TimeDataItem, index: number) => (
    <Time.Item
      key={index}
      bullet={<Avatar size={22} radius="xl" src={item["time-icon"]} />}
      title={item["time-title"]}
    >
      <Text c="dimmed" size="sm">
        {item["time-desc"]}
      </Text>
      <Text size="xs" mt={4} pb={100}>
        {item["time-date"]}
      </Text>
    </Time.Item>
  );

  const mytimeline = timedata.map((item: TimeDataItem, index: number) =>
    renderItem(item, index)
  );
  return (
    <Time active={0} bulletSize={30} lineWidth={2} className={classes.time}>
      {mytimeline}
    </Time>
  );
}
