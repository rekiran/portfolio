import React from "react";
import classes from "./Hero.module.css";
import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  rem,
  Button,
  HoverCard,
  Highlight,
  Blockquote,
  Code,
} from "@mantine/core";
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
  IconHandClick,
  IconInfoCircle,
  IconCode,
} from "@tabler/icons-react";

export const MOCKDATA = [
  {
    icon: IconCode,
    title: "Programmimg Languages",
    description: "HTML,CSS,JavaScript,Java,Python",
  },
  {
    icon: IconUser,
    title: "Privacy focused",
    description: "HTML,CSS Bootstrap",
  },
  {
    icon: IconCookie,
    title: "No third parties",
    description: "a,b,c",
  },
  {
    icon: IconLock,
    title: "work",
    description: "i,ii,iii",
  },
  {
    icon: IconMessage2,
    title: "Tools",
    description: "Github,VS Code, SQL Server",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: String;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  const codeList = description.split(",");
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {codeList.map((char, index) => (
          <span>
            <Code color="blue.1" c="black" key={index}>
              {char}
            </Code>
            <br />
          </span>
        ))}
      </Text>
    </div>
  );
}
export default function Hero() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));
  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>
        Hello, I'm Kiran{" "}
        <HoverCard width={280} shadow="md">
          <HoverCard.Target>
            <Button
              color="gray"
              size="compact-xl"
              variant="outline"
              leftSection={""}
              rightSection={""}
            >
              <IconHandClick />
            </Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm">
              <Blockquote
                color="blue"
                cite="– Kiran ."
                icon={<IconInfoCircle />}
                mt="xl"
              >
                I know LAST NAME is missing. As a matter of fact I do not have
                one !
              </Blockquote>
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
      </Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Every once in a while, you’ll see a Golbat that’s missing some fangs.
          This happens when hunger drives it to try biting a Steel-type Pokémon.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
