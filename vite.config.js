import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			injectRegister: "auto",
			workbox: {
				// offline content caching uchun sozlamalar
				globPatterns: ["**/*.{js,css,html,png,jpg,svg}"],
			},
			manifest: {
				name: "React PWA App",
				short_name: "PWA App",
				description: "Progressive Web App with React and Vite",
				theme_color: "#ffffff",
				icons: [
					{
						src: "/pwa-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/pwa-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
});
