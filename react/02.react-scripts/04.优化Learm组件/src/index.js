import { createElement } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const app = createElement(App);
createRoot(document.getElementById("root")).render(app);
