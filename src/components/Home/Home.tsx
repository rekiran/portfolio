import React, { useRef } from "react";
import { Image, Button, Group, Box, Text, Grid } from "@mantine/core";
import logo from "../../assets/logoKiran.svg";
import classes from "./Home.module.css";

import Slides from "./Slides";
import { Timeline } from "../Timeline/Timeline";
function Home() {
  // Create refs for the target elements
  const targetRef1 = useRef<HTMLDivElement>(null);
  const targetRef2 = useRef<HTMLDivElement>(null);
  const targetRef3 = useRef<HTMLDivElement>(null);

  // Function to scroll to the target element
  const scrollToTarget = (targetRef: React.RefObject<HTMLDivElement>) => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className={classes.nav}>
        <Image src={logo} h={100} w={200} pl={"70px"} fit="contain" />
        <Group className={classes.navlinks} justify="center" pr={40} pl={10}>
          {/* Buttons at the top */}
          <Button
            className={classes.h1}
            size="md"
            bg={"none"}
            onClick={() => scrollToTarget(targetRef1)}
          >
            Home
          </Button>
          <Button
            className={classes.h1}
            size="md"
            variant="white"
            bg={"none"}
            onClick={() => scrollToTarget(targetRef2)}
          >
            Timeline
          </Button>
          <Button
            className={classes.h1}
            size="md"
            variant="white"
            bg={"none"}
            onClick={() => scrollToTarget(targetRef3)}
          >
            Garden
          </Button>
        </Group>
      </nav>

      <div className={classes.container}>
        {/* Box 1 */}
        <Box className={classes.box1} ref={targetRef1}>
          <Grid>
            <Grid.Col span={6}>
              <h1>Hello </h1>
              <br />
              <Text className={classes.text}>
                I'm a software engineer.
                <div style={{ height: "10px" }} />
                My areas of interest include problem-solving, cloud
                infrastructure, machine learning, and IoT.
                <div style={{ height: "10px" }} />
                With a detail oriented-focus, I enjoy creating simple but
                effective solutions to improve application performance, ease of
                maintenance, and user experience.
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Slides />
            </Grid.Col>
          </Grid>
        </Box>
        {/* Box 2 */}
        <Box className={classes.box2} ref={targetRef2}>
          <Text className={classes.text}>
            <Timeline />
          </Text>
        </Box>
        {/* Box 3 */}
        <Box className={classes.box3} ref={targetRef3}>
          <Text className={classes.text}>Hi</Text>
        </Box>
      </div>
    </div>
  );
}

export default Home;
