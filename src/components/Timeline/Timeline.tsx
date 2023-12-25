import { Timeline as Time, Text } from "@mantine/core";
import {
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
  IconDeviceDesktopCode,
} from "@tabler/icons-react";
import classes from "./Timeline.module.css";

export function Timeline() {
  return (
    <Time active={0} bulletSize={30} lineWidth={2} className={classes.time}>
      <Time.Item
        bullet={<IconDeviceDesktopCode size={20} />}
        title="New branch"
      >
        <Text c="dimmed" size="sm">
          You&apos;ve created new branch from master
        </Text>
        <Text size="xs" mt={4}>
          2023
        </Text>
      </Time.Item>
      <Time.Item
        bullet={<IconDeviceDesktopCode size={20} />}
        title="New branch"
      >
        <Text c="dimmed" size="sm">
          You&apos;ve created new branch from master
        </Text>
        <Text size="xs" mt={4}>
          2023
        </Text>
      </Time.Item>
      <Time.Item
        bullet={<IconDeviceDesktopCode size={20} />}
        title="New branch"
      >
        <Text c="dimmed" size="sm">
          You&apos;ve created new branch from master
        </Text>
        <Text size="xs" mt={4}>
          2023
        </Text>
      </Time.Item>
      <Time.Item bullet={<IconGitCommit size={20} />} title="Commits">
        <Text c="dimmed" size="sm">
          You&apos;ve pushed 23 commits to
        </Text>
        <Text size="xs" mt={4}>
          May 2023
        </Text>
      </Time.Item>

      <Time.Item title="Pull request" bullet={<IconGitPullRequest size={20} />}>
        <Text c="dimmed" size="sm">
          You&apos;ve submitted a pull request
        </Text>
        <Text size="xs" mt={4}>
          May 2021
        </Text>
      </Time.Item>

      <Time.Item title="Code review" bullet={<IconMessageDots size={20} />}>
        <Text c="dimmed" size="sm">
          left a code review on your pull request
        </Text>
        <Text size="xs" mt={4}>
          June 2020
        </Text>
      </Time.Item>
    </Time>
  );
}
