import { NextResponse } from 'next/server';
import { UnsplashClient } from './unsplashClient';

const { UNSPLASH_CLIENT_ID } = process.env;

// Function to fetch images based on query and search parameters
async function fetchImages(query: string, count: number) {
  if (!UNSPLASH_CLIENT_ID) {
    throw new Error('UNSPLASH_CLIENT_ID is not defined in the environment variables.');
  }

  const unsplashClient = new UnsplashClient(UNSPLASH_CLIENT_ID);
  const images = await unsplashClient.fetchRandomImage({
    query,
    count,
  });

  return images;
}

// API route handler
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || 'anime'; // Default to "nature" if query is missing
    const count = parseInt(searchParams.get('count') || '1', 10); // Default to 1 image if count is missing

    const images = await fetchImages(query, count);

    return NextResponse.json({ success: true, imageData: images });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
