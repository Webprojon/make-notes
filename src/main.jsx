import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>,
);

const updateSW = registerSW({
	onNeedRefresh() {
		if (confirm("New content available. Reload?")) {
			window.location.reload();
		}
	},
	onOfflineReady() {
		console.log("App is ready to work offline");
	},
});

console.log(updateSW);
