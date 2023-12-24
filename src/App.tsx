import "@mantine/core/styles.css";
import "./App.css";

import { Flex, MantineProvider } from "@mantine/core";
import { Navbar } from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <MantineProvider>
      <Flex direction="column">
        <Navbar />
        <HashRouter basename="/portfolio/">
          <Routes>
            <Route index path="/" element={<Hero />}></Route>
          </Routes>
        </HashRouter>
      </Flex>
    </MantineProvider>
  );
}

export default App;
