import { SideBar } from '@/components/SideBar'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
})

export default function Home() {
  return (
    <main className={`${inter.className} h-screen`}>
      <SideBar/>
    </main>
  )
}
