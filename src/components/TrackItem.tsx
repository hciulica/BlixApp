// src/components/TrackItem.tsx
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Styles for the component
const styles = StyleSheet.create({
  track: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    padding: 10, // Add padding around the content
    borderBottomWidth: 1, // Add a border at the bottom
    borderBottomColor: '#ccc', // Color of the bottom border
  },
  trackTitle: {
    flex: 1, // Take up all available space
    fontSize: 16, // Font size for track title
  },
  iconButton: {
    padding: 5, // Add padding around the icon button
  },
  icon: {
    width: 20, // Width of the icon
    height: 20, // Height of the icon
  },
});

// Define the props for the TrackItem component
interface TrackItemProps {
  trackTitle: string; // Title of the track
  isPlaying: boolean; // Whether the track is currently playing
  onPlayPause: () => void; // Function to handle play/pause toggle
}

// Functional component to display track item with play/pause icon
export default function TrackItem({
  trackTitle,
  isPlaying,
  onPlayPause,
}: TrackItemProps) {
  // Determine image based on the playing state
  const playImage = require('../assets/images/play.png'); // Image for play state
  const pauseImage = require('../assets/images/pause.png'); // Image for pause state
  const imageSource = isPlaying ? pauseImage : playImage; // Select image based on isPlaying state

  return (
    <View style={styles.track}>
      <Text style={styles.trackTitle}>{trackTitle}</Text>
      {/* Display track title */}
      <TouchableOpacity onPress={onPlayPause} style={styles.iconButton}>
        <Image source={imageSource} style={styles.icon} />
        {/* Display appropriate icon */}
      </TouchableOpacity>
    </View>
  );
}
