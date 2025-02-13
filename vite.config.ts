import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [
		vue(), 
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
			manifest: {
				name: "Portfolio",
				short_name: "Portfolio",
				theme_color: "#060606",
				icons: [
					{
						src: "/assets/favicons/android-chrome-180x180.png",
						sizes: "180x180",
						type: "image/png",
					},
					{
						src: "/assets/favicons/android-chrome-192x192.png",
						sizes: "192x192",
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
		postcss: './postcss.config.js',  
		devSourcemap: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@svgs": path.resolve(__dirname, "./src/assets/svgs"),
			"@global": path.resolve(__dirname, "./public/assets"),
		},
	},
	build: {
		target: "esnext",
		minify: "terser",
		cssMinify: true,
		cssCodeSplit: true,
		assetsInlineLimit: 4096,
		outDir: 'dist',
		assetsDir: 'assets',
		rollupOptions: {
			output: {
				manualChunks(id) {
					// More granular chunking strategy
					if (id.includes('node_modules')) {
						if (id.includes('vue')) {
							return 'vue-core';
						}
						return 'vendor';
					}
					
					// Separate utility functions
					if (id.includes('/composables/') || id.includes('/utils/')) {
						return 'utils';
					}
					
					// Group base components separately
					if (id.includes('/components/base/')) {
						return 'base-components';
					}
					
					// Group section components
					if (id.includes('/components/sections/')) {
						return 'sections';
					}
					
					return 'main';
				},
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name ? assetInfo.name : "unknown";
					const extType = info.split(".").at(1) || "unknown";

					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						return `assets/img/[name]-[hash][extname]`;
					}
					if (/\.(css)$/.test(info)) {
						return `assets/css/[name]-[hash][extname]`;
					}
					if (/\.(woff2?|ttf|otf|eot)$/.test(info)) {
						return 'assets/fonts/[name]-[hash][extname]';
					}
					if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(info)) {
						return 'assets/images/[name]-[hash][extname]';
					}
					return `assets/${extType}/[name]-[hash][extname]`;
				},
				chunkFileNames: "assets/js/[name]-[hash].js",
				entryFileNames: "assets/js/[name]-[hash].js",
			},
		},
		chunkSizeWarningLimit: 1000,
		sourcemap: true,
		reportCompressedSize: false,
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log']
			}
		},
		modulePreload: {
			polyfill: true
		}
	},
	optimizeDeps: {
		//dependency optimization
		include: ['vue', 'lucide-vue-next'],
		exclude: [],
		esbuildOptions: {
			target: 'esnext'
		}
	},
	assetsInclude: ["**/*.svg"],
	server: {
		fs: {
			strict: true
		}
	},
	preview: {
		port: 4173,
		host: true,
		strictPort: true,
	}
});
