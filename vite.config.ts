import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), "");

//   // console.log("mode, env", mode, env);

//   return {
//     define: {
//       "process.env": {}, // Clear process.env
//       "import.meta.env.GOOGLE_MAPS_API_KEY": JSON.stringify(
//         env.GOOGLE_MAPS_API_KEY
//       ), //correct one
//       "import.meta.env.GOOGLE_MAPS_ID": JSON.stringify(env.GOOGLE_MAPS_ID),
//       // "import.meta.env": { MAP_API_KEY: env.MAP_API_KEY }, //incorrect
//       build: {
//         outDir: "build",
//       },
//     },
//     base: "/", // or "./" if deploying under a subpath

//     // server: {
//     //   proxy: {
//     //     "/api": {
//     //       target: env.VITE_API_URL || "http://localhost:3000",
//     //       changeOrigin: true,
//     //     },
//     //   },
//     // },
//     plugins: [react()],
//   };
// });

// export default defineConfig({
//   plugins: [react()],
//   base: "/",
// });

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    define: {
      // Polyfill process for libraries that reference process.env / process.version in the browser
      global: "globalThis",
      "process.env": JSON.stringify({ NODE_ENV: mode }),
      "process.version": JSON.stringify(""),
      "import.meta.env.GOOGLE_MAPS_API_KEY": JSON.stringify(
        env.GOOGLE_MAPS_API_KEY
      ),
      "import.meta.env.GOOGLE_MAPS_ID": JSON.stringify(env.GOOGLE_MAPS_ID),
    },
    plugins: [react()],
    base: "/", // good for Vercel
    build: {
      outDir: "dist",
    },
  };
});
