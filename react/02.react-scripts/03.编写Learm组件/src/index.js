import { createElement } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
const app = createElement(App);
createRoot(document.getElementById("root")).render(app);
