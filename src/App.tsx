import "@mantine/core/styles.css";
import { MantineProvider, Image } from "@mantine/core";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <MantineProvider>
      <Layout />
    </MantineProvider>
  );
}

export default App;
