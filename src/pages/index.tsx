import { CategoriesPlaylistSection } from '@/components/CategoriesPlaylistsSection'
import { FeatPlaylistSection } from '@/components/FeatPlaylistSection'
import { SearchBar } from '@/components/SearchBar'
import { SideBar } from '@/components/SideBar'
import { Inter } from 'next/font/google'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className='flex bg-background'>
        <SideBar />
        <div className='w-containerSection'>
          <SearchBar />
          <FeatPlaylistSection/>
          <CategoriesPlaylistSection categorie={"toplists"} name={"Top Lists"}/>
          <CategoriesPlaylistSection categorie={"in_the_car"} name={"To Listen in the Car"} /> 
        </div>
      </div>
    </main>
  )
}
 