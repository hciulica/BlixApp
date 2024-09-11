// src/components/AlbumItem.tsx
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Album } from '../types/Album'; // Import the Album type

// Define styles for the component using StyleSheet
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10, // Spacing between grid items
  },
  item: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, // Rounded corners for the item
    overflow: 'hidden', // Ensures content does not overflow the border radius
  },
  coverImage: {
    width: '100%', // Full width of the parent container
    height: 150, // Fixed height for the cover image
  },
  details: {
    padding: 10, // Padding around the text details
  },
  title: {
    fontSize: 16, // Font size for the album title
    fontWeight: 'bold', // Bold font weight for emphasis
  },
  artist: {
    fontSize: 14, // Font size for the artist name
    color: '#555', // Grey color for artist name text
  },
});

// Define the props for the AlbumItem component
interface AlbumItemProps {
  album: Album; // Album object containing the data to display
  onPress: () => void; // Function to handle press events
}

// Functional component to display individual album items
export default function AlbumItem({ album, onPress }: AlbumItemProps) {
  const renderTextDetails = () => {
    return (
      <View style={styles.details}>
        <Text style={styles.title}>{album.title}</Text>
        <Text style={styles.artist}>{album.artist}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.gridItem}>
      <View style={styles.item}>
        <Image source={{ uri: album.coverImage }} style={styles.coverImage} />
        {renderTextDetails()}
      </View>
    </TouchableOpacity>
  );
}
