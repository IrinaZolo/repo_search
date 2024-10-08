import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./schema.docs.graphql",
  documents: ["src/**/*.gql"],
  config: {
    content:
      "// @generated THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.",
    enumsAsTypes: true,
    // preResolveTypes: false,
    immutableTypes: true,
    skipTypename: true,
  },
  generates: {
    "src/shared/model/models.d.ts": {
      plugins: ["typescript-graphql-files-modules"],
    },
    "src/shared/model/models.gen.ts": {
      plugins: ["add", "typescript"],
    },
    "src/": {
      preset: "near-operation-file",
      plugins: ["add", "typescript-operations"],
      presetConfig: {
        extension: ".gen.ts",
        baseTypesPath: "shared/model/models.gen.ts",
      },
      config: {
        skipTypename: false,
      },
    },
  },
  // ignoreNoDocuments: true,
};

export default config;
