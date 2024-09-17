import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}?access_token=${process.env.CONTENTFUL_CONTENT_DELIVERY_ACCESS_TOKEN}`,
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
  documents: ["src/components/**/*.gql"],
  generates: {
    "src/__generated__/": {
      preset: "client-preset",
    },
  },
};

export default config;
