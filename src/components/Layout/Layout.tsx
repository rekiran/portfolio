import "@mantine/core/styles.css";
import Hero from "../Hero/Hero";
import classes from "../Layout/Layout.module.css";
import {
  MantineProvider,
  Tabs,
  rem,
  Group,
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";

import {
  IconHome,
  IconTimeline,
  IconLeaf,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";

import { Timeline } from "../Timeline/Timeline";
import { Garden } from "../Garden/Garden";
import cx from "clsx";
function Layout() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <MantineProvider>
      <Tabs defaultValue="home" color="blue" pl={20} pr={20}>
        <Tabs.List justify="flex-end">
          <Group>
            <Tabs.Tab value="home" leftSection={<IconHome style={iconStyle} />}>
              Home
            </Tabs.Tab>
            <Tabs.Tab
              value="timeline"
              leftSection={<IconTimeline style={iconStyle} />}
            >
              Timeline
            </Tabs.Tab>
            <Tabs.Tab
              value="Garden"
              leftSection={<IconLeaf style={iconStyle} />}
            >
              Garden
            </Tabs.Tab>
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
              }
              variant="light"
              size="md"
              radius="lg"
              aria-label="Toggle color scheme"
            >
              <IconSun
                className={cx(classes.icon, classes.light)}
                stroke={1.5}
              />
              <IconMoon
                className={cx(classes.icon, classes.dark)}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Tabs.List>

        <Tabs.Panel value="home">
          <Hero />
        </Tabs.Panel>

        <Tabs.Panel value="timeline">
          <Timeline />
        </Tabs.Panel>

        <Tabs.Panel value="Garden">
          <Garden />
        </Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
}

export default Layout;
