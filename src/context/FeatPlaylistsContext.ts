import { createContext } from 'react';

export const FeatPlaylistsContext = createContext<SpotifyApi.PlaylistObjectSimplified[]>([]);