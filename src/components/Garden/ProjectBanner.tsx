import {
  Card,
  Group,
  ActionIcon,
  rem,
  useMantineTheme,
  Image,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconEye, IconExternalLink } from "@tabler/icons-react";
import classes from "./ProjectBanner.module.css";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  preview: string;
  sourceCode: string;
  date?: string;
}

interface ProjectBannerProps {
  project: Project;
}
const ProjectBanner: React.FC<ProjectBannerProps> = ({ project }) => {
  const theme = useMantineTheme();
  const [daysDifference, setDaysDifference] = useState<number | null>(null);

  useEffect(() => {
    if (project.date) {
      const jsonDate = new Date(project.date);
      const todayDate = new Date();

      // Calculate the time difference in milliseconds
      const timeDifference = todayDate.getTime() - jsonDate.getTime();

      // Convert milliseconds to days
      const daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      setDaysDifference(daysDiff);
    } else {
      setDaysDifference(null);
    }
  }, [project.date]);
  return (
    <Card withBorder padding="lg" radius="md" className={classes.card} w={300}>
      <Card.Section mb="sm">
        <Image
          src="https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
          alt="Top 50 underrated plants for house decoration"
          height={180}
        />
      </Card.Section>

      <Text fw={700} className={classes.title} mt="xs">
        {project.title}
      </Text>

      <Text fz="xs" c="dimmed">
        {daysDifference !== null
          ? daysDifference > 30
            ? `Posted on ${project.date}`
            : `Posted ${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`
          : "Posted"}
      </Text>
      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            {project.description}
          </Text>
          <Group gap={0}>
            <Tooltip label="Source code">
              <ActionIcon
                variant="subtle"
                color="gray"
                component="a"
                target="_blank"
                href={project.sourceCode}
              >
                <IconExternalLink
                  style={{ width: rem(18), height: rem(18) }}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
            <Tooltip label="Preview">
              <ActionIcon
                variant="subtle"
                color="gray"
                component="a"
                target="_blank"
                href={project.preview}
              >
                <IconEye
                  style={{ width: rem(20), height: rem(20) }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
};
export default ProjectBanner;
