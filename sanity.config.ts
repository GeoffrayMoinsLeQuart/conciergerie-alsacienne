import schemas from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";


const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  title: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE as string,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN as string,
  dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET as string,
  apiVersion: "2023-06-19",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
