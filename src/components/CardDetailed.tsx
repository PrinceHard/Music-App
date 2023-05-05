import Image from "next/image"
import playIcon from "../assets/svg/play-button.svg"
import { useRecoilState } from "recoil";
import { playlistIdState } from "@/atoms/playlistAtom";
import Link from "next/link";

export const CardDetailed = ({playlist}: {playlist: SpotifyApi.PlaylistObjectSimplified}) => {

    const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

    function handlePlaylist(playlistId: string) {
        setPlaylistId(playlistId)
    }

    return (
        <Link href={`/playlist/${playlist.id}`} onClick={() => handlePlaylist(playlist.id)}>
            <div className="inline-block relative w-64 h-96 overflow-hidden rounded-lg drop-shadow-xl">
                <div className="z-10 relative">
                    <Image src={playlist?.images[0]?.url} alt="card-image" width={256} height={258} />
                </div>
                <button>
                    <div className="absolute w-14 h-12 bottom-0 right-0 -translate-y-24 mr-2 mb-1 z-10">
                        <Image src={playIcon} alt="play-icon" />
                    </div>
                </button>
                <div className="w-64 h-32 -z-10">
                    <div className="blur-xl filter h-full">
                        <Image src={playlist?.images[0]?.url} alt="sub-image" width={256} height={112} className="-translate-y-1/2 opacity-40" />
                    </div>
                    <div className="absolute w-full h-28 z-20 bottom-0 px-4">
                        <span className="font-semibold text-rose-600 text-xs leading-3">{playlist.type.toUpperCase()}</span>
                        <h2 className="font-semibold text-lg leading-6 text-white mt-2">{playlist.name}</h2>
                        <div className="w-full font-semibold text-sm text-gray-400">{playlist.description}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}