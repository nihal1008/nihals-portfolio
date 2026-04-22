import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'zexotjmv', // The user's project ID
  dataset: 'production',
  apiVersion: '2024-04-22', // Use current date for API version
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

// Helper function to easily get image URLs
export const urlFor = (source) => builder.image(source);
