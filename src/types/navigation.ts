import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Album } from './Album';

// Navigation parameter list
export type RootStackParamList = {
  AlbumsList: undefined;
  AlbumDetail: { album: Album };
};

// Props for AlbumsListScreen
export type AlbumsListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumsList'
>;

// Props for AlbumDetailScreen
export type AlbumDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AlbumDetail'
>;
