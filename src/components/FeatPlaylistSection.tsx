import { useEffect, useState } from "react"
import { Slider } from "./Slider"
import { useSession } from "next-auth/react";
import spotifyApi from "../../lib/spotify";
import { FeatPlaylistsContext } from "@/context/FeatPlaylistsContext";

export const FeatPlaylistSection = () => {

    const { data: session} = useSession();
    const [featuredPlaylists, setFeaturedPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([])

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getFeaturedPlaylists().then((data) => {
                setFeaturedPlaylists(data.body.playlists.items)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [session, spotifyApi])

    return (
        <FeatPlaylistsContext.Provider value={featuredPlaylists}>
            <Slider isDetailed={true} sectionTitle="Featured Playlists"/>
        </FeatPlaylistsContext.Provider>
    )
}