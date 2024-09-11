import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AlbumDetailScreen from '../screens/AlbumDetailScreen';
import AlbumsListScreen from '../screens/AlbumsListScreen';
import { RootStackParamList } from '../types/navigation';

// Create the stack navigator type with the parameters defined in RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true, // Option to show headers, can be set to false to hide headers
        }}>
        {/* Define the AlbumsList screen */}
        <Stack.Screen
          name="AlbumsList" // Screen name must match the name used in navigation
          component={AlbumsListScreen} // Component to render for this screen
          options={{ title: 'Albums' }} // Set the header title for this screen
        />
        {/* Define the AlbumDetail screen */}
        <Stack.Screen
          name="AlbumDetail" // Screen name must match the name used in navigation
          component={AlbumDetailScreen} // Component to render for this screen
          options={{
            title: 'Album Details', // Set the header title for this screen
            headerBackTitle: 'Back', // Customize the back button text for this screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation; // Export the navigation component for use in the app
