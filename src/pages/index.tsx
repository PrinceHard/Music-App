import { Inter } from 'next/font/google'
import { FeatPlaylistSection } from '@/components/FeatPlaylistSection'
import { CategoriesPlaylistSection } from '@/components/CategoriesPlaylistsSection'
import { SearchBar } from '@/components/SearchBar'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <SearchBar/>
      <FeatPlaylistSection />
      <CategoriesPlaylistSection categorie={"toplists"} name={"Top Lists"} />
      <CategoriesPlaylistSection categorie={"in_the_car"} name={"To Listen in the Car"} />
    </main>
  )
}
