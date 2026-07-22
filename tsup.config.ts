import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    button: "src/components/Button/Button.tsx",
    input: "src/components/Input/Input.tsx",
    "form-input": "src/components/Form/FormInput/FormInput.tsx",
    spinner: "src/components/Spinner/Spinner.tsx",
  },
  format: ["cjs", "esm"],
  splitting: false,
  sourcemap: true,
  dts: true,
  clean: true,
  minify: true,
});
