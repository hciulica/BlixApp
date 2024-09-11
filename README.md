# Music Albums App

A React Native application that allows users to browse and view details about music albums. The app provides functionalities for searching albums, viewing album details, and controlling track playback.

## Features

- **Album List**: View a grid of music albums, each displaying the cover image, title, and artist.
- **Search Functionality**: Filter albums by title or artist using a search bar.
- **Album Details**: Access detailed information about each album, including cover image, title, artist, release year, and a list of tracks.
- **Play/Pause Tracks**: Control track playback with play and pause buttons.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/music-albums-app.git
   cd music-albums-app

   Install Dependencies

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

src/
├── components/
│   ├── AlbumItem.tsx         # Displays an album in the grid
│   ├── TrackItemWithIcon.tsx # Displays a track with play/pause functionality
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

How It Works
Context Management: AlbumsContext handles fetching and storing album data, and provides it to the rest of the application.
Navigation: Configured using react-navigation, allowing users to navigate between the album list and album detail screens.
Components:
AlbumItem displays each album in a grid format.
TrackItemWithIcon allows toggling play/pause for tracks.
Screens:
AlbumsListScreen includes a search bar and displays a list of albums.
AlbumDetailScreen shows detailed information about a selected album and its tracks.