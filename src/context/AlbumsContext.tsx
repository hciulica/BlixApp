import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Album } from '../types/Album';

// Type definition for the context
interface AlbumsContextType {
  albums: Album[];
  error: string | null;
  isLoading: boolean;
}

// Create the context with default values
const AlbumsContext = createContext<AlbumsContextType>({
  albums: [],
  error: null,
  isLoading: true,
});

interface AlbumsProviderProps {
  children: ReactNode;
}

// Provider component for the context
export default function AlbumsProvider({ children }: AlbumsProviderProps) {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Async function to fetch album data
    const fetchAlbums = async () => {
      // Simulate network delay
      const delay = (ms: number) =>
        new Promise(resolve => setTimeout(resolve, ms));

      try {
        await delay(2000); // Wait for 2 seconds to simulate loading time

        // Import JSON data statically
        const albumsData = require('../assets/resources/albums.json');
        setAlbums(albumsData);
      } catch (err) {
        console.error('Error loading albums:', err); // Log the error for debugging
        setError('Failed to load data.'); // Set a user-friendly error message
      } finally {
        setIsLoading(false); // Ensure loading state is updated
      }
    };

    fetchAlbums(); // Fetch data on component mount
  }, []);

  return (
    <AlbumsContext.Provider value={{ albums, error, isLoading }}>
      {children}
    </AlbumsContext.Provider>
  );
}

export { AlbumsContext };
