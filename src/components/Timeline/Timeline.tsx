import { Timeline as Time, Text, UnstyledButton } from "@mantine/core";

import classes from "./Timeline.module.css";
import timedata from "../../assets/Data/timedata.json";
import { IconDesk, IconDeviceLaptop } from "@tabler/icons-react";

interface TimeDataItem {
  "time-title": string;
  "time-sub": string;
  "time-desc": string;
  "time-date": string;
  link?: string;
}
const icons = [
  <IconDeviceLaptop key={1} size={16} />,
  <IconDeviceLaptop key={2} size={16} />,
  <IconDesk key={3} size={16} />,
  <IconDesk key={3} size={16} />,
];

export function Timeline() {
  const openLinkInNewTab = (link: string) => {
    window.open(link, "_blank");
  };
  const renderItem = (item: TimeDataItem, index: number) => (
    <Time.Item key={index} bullet={icons[index]} title={item["time-title"]}>
      <UnstyledButton onClick={() => item.link && openLinkInNewTab(item.link)}>
        <Text
          c={"blue"}
          fw={400}
          fs="italic"
          size="sm"
          style={{ whiteSpace: "pre-line" }}
        >
          {item["time-sub"]}
        </Text>
      </UnstyledButton>
      <Text c="dimmed" size="sm" style={{ whiteSpace: "pre-line" }}>
        {item["time-desc"]}
      </Text>
      <Text size="xs" mt={4} pb={50}>
        {item["time-date"]}
      </Text>
    </Time.Item>
  );

  const mytimeline = timedata.map((item: TimeDataItem, index: number) =>
    renderItem(item, index)
  );
  return (
    <Time
      active={0}
      bulletSize={30}
      lineWidth={2}
      className={classes.time}
      pr={500}
    >
      {mytimeline}
    </Time>
  );
}
