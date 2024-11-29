const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --max-warnings 30', 'prettier --write'],
  '*.{json,scss,css}': ['prettier --write'],
};

export default config;
