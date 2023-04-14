import Image from 'next/image'
import dotsIcon from '../assets/svg/Icon-Ellipsis.svg'
import radioIcon from '../assets/svg/Icon.svg'
import playlistIcon from '../assets/svg/Icon-1.svg'
import albumsIcon from '../assets/svg/Icon-2.svg'
import tracksIcon from '../assets/svg/Icon-3.svg'
import videosIcon from '../assets/svg/Icon-4.svg'
import artistsIcon from '../assets/svg/Icon-5.svg'

export const SideBar = () => {
    return (
        <div className="bg-sidenav-gray top-0 left-0 bottom-0 min-w-percent-14 h-screen py-4 pl-3 text-gray-50 font-medium">
            <div className='flex justify-between pl-3 pr-6 mb-8'>
                <div className='bg-cyan-500 w-6 h-6 rounded-full' />
                <a href=""><Image priority src={dotsIcon} alt='options' /></a>
            </div>
            <nav className="p-3 mb-8">
                <ul className="nav-links list-container">
                    <li><a href="">Home</a></li>
                    <li><a href="">Explore</a></li>
                    <li><a href="">Videos</a></li>
                </ul>
            </nav>
            <nav className="text-sm">
                <span className='text-xs text-gray-400'>MY COLLECTION</span>
                <ul className='pr-3 pb-3 list-container'>
                    <li>
                        <Image src={radioIcon} alt='radioIcon' />
                        <a href="">Mixes and Radio</a>
                    </li>
                    <li>
                        <Image src={playlistIcon} alt='playlistIcon' />
                        <a href="">Playlists</a>
                    </li>
                    <li>
                        <Image src={albumsIcon} alt='albumsIcon' />
                        <a href="">Albums</a>
                    </li>
                    <li>
                        <Image src={tracksIcon} alt='tracksIcon' />
                        <a href="">Tracks</a>
                    </li>
                    <li>
                        <Image src={videosIcon} alt='videosIcon' />
                        <a href="">Videos</a>
                    </li>
                    <li>
                        <Image src={artistsIcon} alt='artistsIcon' />
                        <a href="">Artists</a>
                    </li>
                </ul>
            </nav>
            <nav className="text-sm">
                <span className='text-xs text-gray-400'>MY PLAYLISTS</span>
                <ul className='pr-3 pb-3 list-container'>
                    <li><a href="">Mixes and Radio</a></li>
                    <li><a href="">September</a></li>
                    <li><a href="">Clubbing</a></li>
                    <li><a href="">Chill Story2</a></li>
                    <li><a href="">Playlist 324</a></li>
                    <li><a href="">Tracks</a></li>
                </ul>
            </nav>
            <nav className="text-sm">
                <span className='text-xs text-gray-400'>Imported Albums</span>
                <ul className='pr-3 pb-3 list-container'>
                    <li><a href="">Mixes and Radio</a></li>
                </ul>
            </nav>
        </div>
    )
}
