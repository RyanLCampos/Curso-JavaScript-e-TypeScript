/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  './node_modules/@headlessui/react/dist/**/*.{js,ts}',
  './node_modules/@heroicons/react/**/*.js',
  './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
  './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {},
};
export const plugins = [];
