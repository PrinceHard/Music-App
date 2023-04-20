import Image from 'next/image'
import dotsIcon from '../assets/svg/Icon-Ellipsis.svg'
import radioIcon from '../assets/svg/Icon.svg'
import playlistIcon from '../assets/svg/Icon-1.svg'
import albumsIcon from '../assets/svg/Icon-2.svg'
import tracksIcon from '../assets/svg/Icon-3.svg'
import videosIcon from '../assets/svg/Icon-4.svg'
import artistsIcon from '../assets/svg/Icon-5.svg'
import { DropdownButton } from './DropdownButton'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useSpotify } from '@/hooks/useSpotify'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const SideBar = () => {
    const { data: session } = useSession();
    const [playlists, setPlaylists] = useState<SpotifyApi.PlaylistObjectSimplified[]>([]);
    const spotifyApi = useSpotify();

    const router = useRouter();

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items)
            }).catch((err) => {
                console.error(err)
            })
        }
    }, [session, spotifyApi])

    return (
        <div className="bg-sidenav-gray top-0 left-0 bottom-0 min-w-percent-14 h-screen py-4 pl-3 text-gray-50 font-medium sticky">
            <div className='flex justify-between pl-3 pr-6 mb-8'>
                <DropdownButton />
                <Link href={"/"}><Image priority src={dotsIcon} alt='options' /></Link>
            </div>
            <nav className="pr-3 mb-8">
                <ul className="list-container">
                    <li className={router.pathname == "/" ? "active": "notActive"}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li className={router.pathname == "/explore" ? "active": "notActive"}>
                        <Link href={"/explore"}>Explore</Link>
                    </li>
                    <li className={router.pathname == "/shows" ? "active": "notActive"}>
                        <Link href={"/shows"}>Shows</Link>
                    </li>
                </ul>
            </nav>
            <nav className="text-sm">
                <span className='text-xs text-gray-400'>MY COLLECTION</span>
                <ul className='pr-3 pb-3 list-container'>
                    <li className='notActive'>
                        <Image src={radioIcon} alt='radioIcon' />
                        <Link href={"/"}>Mixes and Radio</Link>
                    </li>
                    <li className='notActive'>
                        <Image src={playlistIcon} alt='playlistIcon' />
                        <Link href={"/"}>Playlists</Link>
                    </li>
                    <li className='notActive'>
                        <Image src={albumsIcon} alt='albumsIcon' />
                        <Link href={"/"}>Albums</Link>
                    </li>
                    <li className='notActive'>
                        <Image src={tracksIcon} alt='tracksIcon' />
                        <Link href={"/"}>Tracks</Link>
                    </li>
                    <li className='notActive'>
                        <Image src={videosIcon} alt='videosIcon' />
                        <Link href={"/"}>Videos</Link>
                    </li>
                    <li className='notActive'>
                        <Image src={artistsIcon} alt='artistsIcon' />
                        <Link href={"/"}>Artists</Link>
                    </li>
                </ul>
            </nav>
            <nav className="text-sm">
                <span className='text-xs text-gray-400'>MY PLAYLISTS</span>
                <ul className='pr-3 pb-3 list-container'>
                    {playlists.map((playlist) => (
                        <li key={playlist.id} className='notActive'>
                            <Link href={"/"}>{playlist.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className="text-sm">
                <span className='text-xs text-gray-400'>Imported Albums</span>
                <ul className='pr-3 pb-3 list-container'>
                    <li><Link href={"/"}>Mixes and Radio</Link></li>
                </ul>
            </nav>
        </div>
    )
}

