import { createContext } from 'react';

export const CategoriesPlaylistsContext = createContext<SpotifyApi.PlaylistObjectSimplified[]>([]);