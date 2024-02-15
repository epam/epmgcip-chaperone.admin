import { CodegenConfig } from '@graphql-codegen/cli'
import CONTENTFUL_GRAPHQL_API from './src/constants/graphql.ts'

const config: CodegenConfig = {
  schema: CONTENTFUL_GRAPHQL_API,
  documents: ['./src/**/*.gql'],
  generates: {
    './__generated__/schema.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
  ignoreNoDocuments: true,
}

export default config
