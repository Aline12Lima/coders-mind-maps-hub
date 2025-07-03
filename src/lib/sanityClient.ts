// src/lib/sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "cczyak0t", // Cole seu Project ID aqui
  dataset: "production", // Geralmente é 'production'
  apiVersion: "2024-07-03", // Use a data de hoje
  useCdn: true, // `false` se você quiser sempre os dados mais recentes, `true` para melhor performance
});
