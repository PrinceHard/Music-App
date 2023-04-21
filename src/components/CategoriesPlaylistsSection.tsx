import { useEffect, useState } from "react"
import { Slider } from "./Slider"
import { useSession } from "next-auth/react";
import spotifyApi from "../../lib/spotify";
import { CategoriesPlaylistsContext } from "@/context/CategoriesPlaylistsContext";

type Props = {
    categorie: string,
    name: string
}

export const CategoriesPlaylistSection = ({categorie, name}: Props) => {

    const { data: session} = useSession();
    const [categoryPlaylists, setCategoryPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([])

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getPlaylistsForCategory(categorie).then((data) => {
                setCategoryPlaylists(data.body.playlists.items)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [session, spotifyApi])

    return (
        <CategoriesPlaylistsContext.Provider value={categoryPlaylists}>
            <Slider isDetailed={false} sectionTitle={name}/>
        </CategoriesPlaylistsContext.Provider>
    )
}