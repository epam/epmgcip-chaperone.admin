// eslint-disable-next-line @typescript-eslint/no-var-requires
import { ESLint } from 'eslint'

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint()
  const ignoredFiles = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file)),
  )
  const filteredFiles = files.filter((_, i) => !ignoredFiles[i])
  console.log('11111', ignoredFiles, files);
  return filteredFiles.join(' ')
}

export default {
  '*.{js,ts}': async (files) => {
    console.log('44444', files);
    const filesToLint = await removeIgnoredFiles(files)
    return [`eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 ${filesToLint}`]
  },
  '*.{json,ts,tsx,html,css}': () => {
    return [`prettier --write ./src`]
  },
}
