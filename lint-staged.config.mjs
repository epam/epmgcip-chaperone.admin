const config = {
  '*.{js,jsx,ts,tsx}':[
    'eslint --fix --max-warnings 0',
    'prettier --write'
  ],
  '*.{json,scss,css}': ['prettier --write'],
}

export default config;
