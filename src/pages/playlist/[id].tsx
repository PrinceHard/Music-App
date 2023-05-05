import React, { ReactNode, useEffect, useState } from "react"
import { shuffle } from "lodash"
import Image from "next/image"
import { PlaylistCel } from "@/components/PlaylistCel"
import { useRecoilValue } from "recoil"
import { playlistIdState } from "@/atoms/playlistAtom"
import { useSpotify } from "@/hooks/useSpotify"
import { SearchBar } from "@/components/SearchBar"

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
]

const PlaylistDetail = () => {

    const playlistId = useRecoilValue(playlistIdState);
    const [playlist, setPlaylist] = useState<SpotifyApi.SinglePlaylistResponse>();
    const spotifyApi = useSpotify();

    const [color, setColor] = useState<string>();

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [playlistId])

    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then((data) => {
            setPlaylist(data.body)
        }).catch((err) => {
            console.error(err)
        })
    }, [spotifyApi, playlistId])

    let duration_time: number = 0
    playlist?.tracks.items.forEach(n => duration_time += n.track?.duration_ms as number)

    function msToMinutesAndSeconds(ms: number): string {
        let min = Math.floor(ms / 60000)
        let sec = ((ms % 60000) / 1000).toFixed(0)
        return `${min}:${sec}`
    }


    return (
        <div className={`bg-gradient-to-b to-background ${color} h-4/6 text-white w-full`}>
            <SearchBar />
            <div className="flex px-11 gap-6 w-full">
                <Image className="max-h-297" src={playlist?.images[0].url as string} alt="playlist-cover" width={297} height={297} />
                <div className="flex-shrink mt-16">
                    <span>PUBLIC PLAYLIST</span>
                    <h1 className="text-8xl tracking-tighter font-bold my-6">{playlist?.name}</h1>
                    <p className="mb-4">{playlist?.tracks.items[0].track?.artists.map((n) => n.name).concat(", ")}</p>
                    <p>Made for {playlist?.owner.display_name} - {playlist?.tracks.total} songs, {msToMinutesAndSeconds(duration_time)} min</p>
                </div>
            </div>
            <div className="relative w-full h-full overflow-hidden px-10 mt-6">
                <div className="blur-2xl filter w-full h-full">
                    <div className="bg-[#121212] opacity-20 w-full h-full"></div>
                </div>
                <div className="absolute top-1 mt-11 w-full border-spacing-3 pr-10">
                    <table className="w-full">
                        <thead className="border-b-2 border-[#B2B2B2] border-opacity-30">
                            <tr>
                                <td>#</td>
                                <td>TITLE</td>
                                <td>ALBUM</td>
                                <td>DATE ADDED</td>
                                <td>TIME</td>
                            </tr>
                        </thead>
                        <tbody>
                            {playlist?.tracks.items.map((track, index) => (
                                <PlaylistCel key={track?.track?.id} playlist={track} index={index + 1} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default PlaylistDetail