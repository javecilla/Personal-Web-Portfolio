import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls: {
					includeAbsolute: false,
				},
			},
		}),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
			manifest: {
				name: "Portfolio",
				short_name: "Portfolio",
				theme_color: "#060606",
				icons: [
					{
						src: "/favicons/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "/favicons/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
		viteCompression({
			algorithm: "brotliCompress",
			ext: ".br",
		}),
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 80,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [
					{
						name: "removeViewBox",
					},
					{
						name: "removeEmptyAttrs",
						active: false,
					},
				],
			},
			webp: {
				quality: 80,
			},
		}),
	],
	css: {
		postcss: "./postcss.config.cjs",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@svgs": path.resolve(__dirname, "./src/assets/svgs"),
			"@images": path.resolve(__dirname, "./src/assets/images"),
		},
	},
	build: {
		target: "esnext",
		minify: "terser",
		cssMinify: true,
		assetsInlineLimit: 4096, // Inline assets < 4kb
		rollupOptions: {
			output: {
				manualChunks: {
					"vue-vendor": ["vue", "vue-router"],
					"ui-vendor": ["@headlessui/vue", "@heroicons/vue"],
				},
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name ? assetInfo.name : "unknown";
					const extType = info.split(".").at(1) || "unknown";

					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						return `assets/img/[name]-[hash][extname]`;
					}
					return `assets/${extType}/[name]-[hash][extname]`;
				},
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
			},
		},
		chunkSizeWarningLimit: 1000,
	},
	optimizeDeps: {
		include: ["vue", "vue-router", "@headlessui/vue", "@heroicons/vue"],
	},
	assetsInclude: ["**/*.svg"],
});
