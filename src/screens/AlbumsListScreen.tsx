import React, { useContext, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import AlbumItem from '../components/AlbumItem';
import { AlbumsContext } from '../context/AlbumsContext';
import { AlbumsListScreenProps } from '../types/navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10, // Padding around the entire screen
  },
  searchInput: {
    height: 40, // Height of the search input field
    borderColor: '#ccc', // Light grey border color
    borderWidth: 1, // Border width
    borderRadius: 5, // Rounded corners for the search input
    paddingHorizontal: 10, // Padding inside the search input
    marginBottom: 10, // Space below the search input
  },
  loader: {
    flex: 1,
    justifyContent: 'center', // Center loader vertically
  },
  error: {
    flex: 1,
    justifyContent: 'center', // Center error message vertically
    alignItems: 'center', // Center error message horizontally
    color: 'red', // Red color for error text
  },
});

export default function AlbumsListScreen({
  navigation,
}: AlbumsListScreenProps) {
  const { albums, error, isLoading } = useContext(AlbumsContext); // Fetch data from context
  const [searchQuery, setSearchQuery] = useState(''); // State for search input

  // Filter albums based on search query
  const filteredAlbums = albums.filter(
    album =>
      album.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Match title
      album.artist.toLowerCase().includes(searchQuery.toLowerCase()) // Match artist
  );

  return (
    <View style={styles.container}>
      {/* Search input for filtering albums */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search by title or artist" // Placeholder text
        value={searchQuery} // Current search query
        onChangeText={setSearchQuery} // Update search query on change
      />

      {/* Conditional rendering based on loading and error states */}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} /> // Loader while data is loading
      ) : error ? (
        <Text style={styles.error}>{error}</Text> // Display error message if there is an error
      ) : (
        <FlatList
          data={filteredAlbums} // Filtered list of albums to display
          keyExtractor={item => item.title} // Unique key for each album
          numColumns={2} // Display items in a 2-column grid
          showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
          renderItem={({ item }) => (
            <AlbumItem
              album={item} // Pass album data to AlbumItem component
              onPress={
                () => navigation.navigate('AlbumDetail', { album: item }) // Navigate to detail screen on press
              }
            />
          )}
        />
      )}
    </View>
  );
}
