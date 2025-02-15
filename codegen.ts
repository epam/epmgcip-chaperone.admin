import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: ['src/components/**/*.gql'],
  generates: {
    'src/__generated__/': {
      preset: 'client-preset',
    },
  },
  //documents: ["src/components/**/*.gql"],
  /*generates: {
    "src/components/types.generated.ts": { plugins: ["typescript"] },
    "src/components/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "types.generated.ts",
      },
      plugins: ["typescript-operations", "typed-document-node"],
    },
  },*/
  overwrite: true,
  schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
};

export default config;
