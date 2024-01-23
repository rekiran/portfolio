import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Home from "./components/Home/Home";
import "@mantine/carousel/styles.css";
import "./App.module.css";
function App() {
  return (
    <MantineProvider>
      <Home />
    </MantineProvider>
  );
}

export default App;
