import Image from "next/image"

type Props = {
    playlist: SpotifyApi.PlaylistTrackObject | undefined,
    index: number
}

export const PlaylistCel = ({playlist, index}: Props) => {

    function msToMinutesAndSeconds(ms:number): string{
        let min = Math.floor(ms /60000)
        let sec = ((ms % 60000) / 1000).toFixed(0)
        return `${min}:${sec}`
    }
    
    let artists = playlist?.track?.artists.map((n) => n.name)

    return (
        <tr className="tr hover:bg-[#5c5c5c38] cursor-pointer">
            <td>{index}</td>
            <td className="flex gap-2">
                <Image className="" src={playlist?.track?.album?.images[0]?.url as string} width={52} height={52} alt="" />
                <div>
                    <p>{playlist?.track?.name}</p>
                    <p className="text-gray-400 mt-1">{artists?.join(", ")}</p>
                </div>
            </td>
            <td>{playlist?.track?.album.name}</td>
            <td>{playlist?.added_at.slice(0, 10)}</td>
            <td>{msToMinutesAndSeconds(playlist?.track?.duration_ms as number)}</td>
        </tr>
    )
}