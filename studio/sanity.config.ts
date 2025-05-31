// studio/sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import schemas from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'LaConciergerieAlsacienne',

  // ↓ Tout est en dur, sans fallback sur process.env
  projectId: 'dhg7a8s7',
  dataset: 'production',
  token:
    'sk7O9PuzFNLljHxKPyfKzoFW1WqJMj9F02rFR7SUaawqk3FfzvX2nJxFF9TbsahWaGIsvy7RfDW9kQvariXOhnjgvphf0y5bJPRMZnU3YTWlIRo1ogLAl6EejOuuwfaGsnDzfJVJ4BjXSwQmKG0aIytlifhbyBWioDudQ4R1zMkmBSdISy6R',
  // studioHost: 'conciergerie', // ou 'conciergerie-test' selon ce que vous avez défini

  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})
