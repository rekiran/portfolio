import "@mantine/core/styles.css";
import "./App.css";

import { Flex, MantineProvider } from "@mantine/core";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <MantineProvider>
      <Flex direction="column">
        <Navbar />
        <Hero />
      </Flex>
    </MantineProvider>
  );
}

export default App;
