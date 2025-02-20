import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "mtch-ui/dist/style.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
