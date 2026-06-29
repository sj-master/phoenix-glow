import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ["react", "react-dom"],
  async onSuccess() {
    const { copyFile } = await import("node:fs/promises");
    await copyFile("src/phoenix-glow.css", "dist/phoenix-glow.css");
  },
});
