import "@mantine/core/styles.css";
import Hero from "../Hero/Hero";
import classes from "./Layout.module.css";

import {
  MantineProvider,
  Tabs,
  rem,
  Burger,
  Group,
  Button,
  Divider,
  Drawer,
  ScrollArea,
} from "@mantine/core";

import { IconHome, IconTimeline, IconLeaf } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Timeline } from "../Timeline/Timeline";
import { Garden } from "../Garden/Garden";

function Layout() {
  const iconStyle = { width: rem(12), height: rem(12) };
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <MantineProvider>
      <Tabs defaultValue="home" color="blue">
        <Tabs.List justify="flex-end">
          <Group visibleFrom="sm">
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
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Tabs.List>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
            <a href="#" className={classes.link}>
              Home
            </a>
            <br />
            <a href="#" className={classes.link}>
              Timeline
            </a>
            <br />
            <a href="#" className={classes.link}>
              Garden
            </a>
            <Divider my="sm" />
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>

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
