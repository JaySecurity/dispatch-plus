import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App.tsx";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "./theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});