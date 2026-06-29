import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,           // generate .d.ts type declarations
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ["react", "react-dom"],  // don't bundle peer deps
  // copy the stylesheet into dist as styles.css
  async onSuccess() {
    const { copyFile } = await import("node:fs/promises");
    await copyFile("src/styles/neon.css", "dist/styles.css");
  },
});
