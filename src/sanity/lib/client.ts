import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-01', // Latest API version use karo
  token: process.env.SANITY_API_TOKEN, // Ensure ye correct hai
  useCdn: false, // CDN ko disable kar do for write operations
});

