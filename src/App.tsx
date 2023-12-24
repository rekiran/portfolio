import "@mantine/core/styles.css";
import "./App.css";

import { Flex, MantineProvider } from "@mantine/core";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <Flex direction="column">
        <Navbar />
        <HashRouter>
          <Route index path="/" element={<Hero />}></Route>
        </HashRouter>
      </Flex>
    </MantineProvider>
  );
}

export default App;
