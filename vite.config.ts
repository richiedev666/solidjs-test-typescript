import { defineConfig, loadEnv } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [solidPlugin()],
    server: {
      port: env.VITE_PORT || 3000,
    },
    build: {
      target: "esnext",
    },
    resolve: {
      alias: {
        "@": "./src",
      },
    },
  };
});
