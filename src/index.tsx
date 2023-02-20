/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";

import App from "./App";
import About from "./views/About";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
