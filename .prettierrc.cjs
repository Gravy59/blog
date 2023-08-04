/** @type {import("prettier").Options} */
module.exports = {
  // fixes whitespace issues
  printWidth: 100,
  bracketSameLine: true,
  plugins: [
    require.resolve("prettier-plugin-astro"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  overrides: [
    {
      files: "**/*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
