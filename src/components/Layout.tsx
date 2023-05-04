import { ReactNode } from "react"
import { SideBar } from "./SideBar"

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <div className='flex bg-background'>
            <SideBar />
            <div className='w-containerSection overflow-y-scroll scrollbar-hide'>
                {children}
            </div>
        </div>
    )
}