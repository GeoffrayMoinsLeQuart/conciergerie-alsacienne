const isServer = typeof window === 'undefined';

const config = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'dhg7a8s7',
  title: process.env.SANITY_STUDIO_PROJECT_TITLE,
  token: process.env.SANITY_STUDIO_API_TOKEN as string,
  dataset: 'production',
  apiVersion: '2023-06-19',
  useCdn: false,
  ...(isServer && {
    token: process.env.SANITY_STUDIO_API_TOKEN, // ❗ variable **sans** NEXT_PUBLIC_
  }),
};

export default config;
