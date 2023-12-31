import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck, IconDownload } from "@tabler/icons-react";
import Herobg from "../../assets/alaptop.png";
import classes from "./Hero.module.css";
import { IconFileAnalytics } from "@tabler/icons-react";
import resume from "../../assets/Resume Kiran 2024.pdf";
function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Hi, I'm <span className={classes.highlight}>Kiran</span> <br />
          </Title>
          <Text c="dimmed" mt="md">
            I am a detail-focused developer with 3 yrs of professional
            experience.
          </Text>
          <Text mt={30}>
            <b>My Techstack</b>
          </Text>
          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} variant="white" radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.9}
                  color="black"
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Programming languages</b> – Java, Python, JavaScript,
              TypeScript
            </List.Item>
            <List.Item>
              <b>Frontend Technologies</b> – HTML, CSS, Bootstrap, ReactJS
            </List.Item>
            <List.Item>
              <b>Backend Technologies</b> – Node.js, Next.js
            </List.Item>
            <List.Item>
              <b>Databases</b> – SQL, MySQL, PostgreSQL
            </List.Item>
            <List.Item>
              <b>Tools</b> – Microsoft Visual Studio, MS Server, Visual Studio
              Code, Eclipse, Github, JIRA, Bitbucket, PowerBI, Confluence,
              ServiceNow..
            </List.Item>
          </List>

          <Group mt={30}>
            <a href={resume} target="_blank">
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                rightSection={<IconFileAnalytics size={16} />}
              >
                View Resume
              </Button>
            </a>
            <a href={resume} download>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
                rightSection={<IconDownload size={16} />}
              >
                Download Resume
              </Button>
            </a>
          </Group>
        </div>
        <Image src={Herobg} className={classes.image} />
      </div>
    </Container>
  );
}
export default Hero;
