# Music Albums App

## Objective

A React Native application that allows users to browse and view details about music albums. The app provides functionalities for searching albums, viewing album details, and controlling track playback.
## Features

- **Album List:** View a grid of music albums, each displaying the cover image, title, and artist.
- **Search Functionality:** Filter albums by title or artist using a search bar.
- **Album Details:** Access detailed information about each album, including cover image, title, artist, release year, and a list of tracks.
- **Play/Pause Tracks:** Control track playback with play and pause buttons.
- **Loading Indicator:** Show a loading animation while fetching album data.

## Requirements

1. **Data:**
   - Use a provided JSON file containing data for 5-7 albums. Each album should have:
     - Title
     - Artist
     - Cover image URL
     - Release year
     - List of track titles (no need for duration)

2. **Screens:**
   - **Albums List Screen:**
     - Display a simple list of albums showing cover image, title, and artist.
   - **Album Detail Screen:**
     - Show full album details including the list of tracks.
     - Include a play button for each track (no need for actual audio playback, just toggle a 'playing' state).

3. **Navigation:**
   - Implement basic navigation between the Albums List and Album Detail screens using React Navigation.

4. **State Management:**
   - Use React's built-in `useState` and `useContext` (or any other global state management) for managing the app's state.

5. **Styling:**
   - Create a clean, functional interface using React Native's StyleSheet.

6. **Data Loading:**
   - Load the JSON data when the app starts.

7. **Error Handling:**
   - Add basic error handling for data loading.

8. **Documentation:**
   - Provide brief instructions on how to run the app.

## Installation

To get started with the project, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/hciulica/BlixApp.git
cd music-albums-app
Install Dependencies
Ensure you have Node.js and npm installed. Then, run:

bash
Copy code
npm install
Run the Project
For Android:

bash
Copy code
npx react-native run-android
For iOS (requires macOS):

bash
Copy code
npx react-native run-ios
Start the Metro Bundler
If the Metro Bundler does not start automatically, you can start it manually:

bash
Copy code
npx react-native start

Usage
Viewing Albums
On launch, the app displays a grid of albums. Scroll through the list and tap on any album to view its details.

Searching Albums
Use the search bar at the top of the Albums List screen to filter albums by title or artist.

Viewing Album Details
On the Album Detail screen, you will find the album's cover image, title, artist, release year, and a list of tracks. Tap on a track to toggle play/pause.

Project Structure
bash
Copy code
src/
├── assets/
│   ├── images/
│   ├── resources/
├── components/
│   ├── AlbumItem.tsx         # Displays an album in the grid
│   ├── TrackItem.tsx # Displays a track with play/pause functionality
├── context/
│   ├── AlbumsContext.tsx     # Manages album data and state
├── navigation/
│   ├── AppNavigation.tsx     # Configures app navigation
├── screens/
│   ├── AlbumDetailScreen.tsx # Displays detailed information about an album
│   ├── AlbumsListScreen.tsx  # Displays the list of albums and search functionality
├── types/
│   ├── Album.ts              # Defines the structure of an album object
│   ├── navigation.ts         # Defines navigation parameter types

## Features

Context Management: AlbumsContext handles fetching and storing album data, and provides it to the rest of the application.
Navigation: Configured using react-navigation, allowing users to navigate between the album list and album detail screens.

Components:
AlbumItem displays each album in a grid format.
TrackItem allows toggling play/pause for tracks.

Screens:
AlbumsListScreen includes a search bar and displays a list of albums.
AlbumDetailScreen shows detailed information about a selected album and its tracks.

TYPESCRIPT
