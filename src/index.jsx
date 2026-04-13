import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import { App } from "./App";

function mountApp() {
  const container = document.getElementById("root");

  if (!container) {
    return;
  }

  const root = createRoot(container);
  root.render(
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  );
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp, { once: true });
} else {
  mountApp();
}
