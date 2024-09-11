import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import TrackItem from '../components/TrackItem';
import { AlbumDetailScreenProps } from '../types/navigation';

const styles = StyleSheet.create({
  container: {
    padding: 10, // Padding around the content
  },
  coverImage: {
    width: '100%', // Full width of the container
    height: 200, // Fixed height for the cover image
    marginBottom: 10, // Space below the cover image
    borderRadius: 5, // Rounded corners for the image
  },
  title: {
    fontSize: 24, // Larger font size for the album title
    fontWeight: 'bold', // Bold font for the title
    marginBottom: 5, // Space below the title
  },
  artist: {
    fontSize: 18, // Font size for the artist name
    color: '#555', // Dark grey color for the artist name
    marginBottom: 5, // Space below the artist name
  },
  year: {
    fontSize: 16, // Font size for the release year
    color: '#777', // Lighter grey color for the release year
    marginBottom: 10, // Space below the release year
  },

});

export default function AlbumDetailScreen({ route }: AlbumDetailScreenProps) {
  // Destructure the album object from route params
  const { album } = route.params;

  // State to track the currently playing track
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const renderHeaderInfo = () => {
    return (
      <>
        {/* Album cover image */}
        <Image source={{ uri: album.coverImage }} style={styles.coverImage} />
        {/* Display album title */}
        <Text style={styles.title}>Name: {album.title}</Text>
        {/* Display artist name */}
        <Text style={styles.artist}>Artist: {album.artist}</Text>
        {/* Display release year */}
        <Text style={styles.year}>Release: {album.releaseYear}</Text>
        {/* List of tracks */}
      </>
    );
  };

  // Toggle play/pause state for the given track
  const handlePlayPause = (track: string) => {
    setPlayingTrack(playingTrack === track ? null : track);
  };

  return (
    <View style={styles.container}>
      {renderHeaderInfo()}
      <FlatList
        data={album.tracks}
        keyExtractor={item => item} // Key for each track, assuming unique track names
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator for better aesthetics
        renderItem={({ item }) => (
          <TrackItem
            trackTitle={item}
            isPlaying={playingTrack === item} // Highlight currently playing track
            onPlayPause={() => handlePlayPause(item)} // Handle play/pause action
          />
        )}
      />
    </View>
  );
}
