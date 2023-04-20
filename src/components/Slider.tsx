import leftArrow from "../assets/svg/TopNav-Icon-Button-1.svg"
import rightArrow from "../assets/svg/TopNav-Icon-Button.svg"
import Image from "next/image"
import { CardDetailed } from "./CardDetailed"
import { lista } from "@/data/list"
import { useEffect, useRef, useState } from "react"
import { Card } from "./Card"
import { useSession } from "next-auth/react"
import spotifyApi from "../../lib/spotify"

type Props = {
    sectionTitle: string,
    isDetailed: boolean
}

export const Slider = ({sectionTitle,isDetailed}: Props) => {

    const { data: session} = useSession();
    const [featuredPlaylists, setFeaturedPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([])
    const [categoryPlaylists, setCategoryPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([])

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getFeaturedPlaylists().then((data) => {
                setFeaturedPlaylists(data.body.playlists.items)
            }).catch((err) => {
                console.error(err)
            })

            spotifyApi.getPlaylistsForCategory("toplists").then((data) => {
                setCategoryPlaylists(data.body.playlists.items)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [session, spotifyApi])

    const scrollRef = useRef<HTMLDivElement>(null);

    const slideLeft = () => {
        scrollRef.current!.scrollLeft -= 1100
    }

    const slideRight = () => {
        scrollRef.current!.scrollLeft += 1100
    }

    return (
        <div className="w-full px-14 py-11 inline-block">
            <div className="w-full flex justify-between h-9">
                <h1 className="text-slate-100 font-semibold leading-6 text-lg">{sectionTitle}</h1>
                <div className="flex gap-2">
                    <button onClick={slideLeft}>
                        <Image src={leftArrow} alt="leftArrowIcon" />
                    </button>
                    <button onClick={slideRight}>
                        <Image src={rightArrow} alt="rightArrowIcon" />
                    </button>
                </div>
            </div>
            {isDetailed ?
                <div ref={scrollRef} className="max-w-full my-2 flex gap-16 overflow-x-scroll items-center whitespace-nowrap scroll-smooth scrollbar-hide">
                    {featuredPlaylists.map((playlist) => (
                        <div key={playlist.id}>
                            <CardDetailed playlist={playlist} />
                        </div>
                    ))}
                </div>
                :
                <div ref={scrollRef} className="max-w-full my-2 flex gap-10 overflow-x-scroll items-center whitespace-nowrap scroll-smooth scrollbar-hide">
                    {categoryPlaylists.map((playlist) => (
                        <div key={playlist.id}>
                            <Card playlist={playlist}/>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}