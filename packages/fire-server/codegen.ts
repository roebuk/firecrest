import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://localhost:4000/graphql",
  generates: {
    "types.ts": {
      config: {
        contextType: "./#MyContext",
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
