import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Отключаем некритические правила
      "react-hooks/exhaustive-deps": "warn", // Только предупреждение
      "@typescript-eslint/no-unused-vars": "warn", // Не считать критической ошибкой
      "@next/next/no-img-element": "off", // Полностью отключить
      "jsx-a11y/alt-text": "off", // Отключить проверку alt
      "@typescript-eslint/no-explicit-any": "off", // Разрешить использование any
    },
  },
];

export default eslintConfig;
