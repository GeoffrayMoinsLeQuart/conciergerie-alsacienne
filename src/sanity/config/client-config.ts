const isServer = typeof window === "undefined";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
  token: process.env.SANITY_API_TOKEN as string,
  dataset: "production",
  apiVersion: "2023-06-19",
  useCdn: false,
  ...(isServer && {
    token: process.env.SANITY_API_TOKEN, // ❗ variable **sans** NEXT_PUBLIC_
  }),
};

export default config;
