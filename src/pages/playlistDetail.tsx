import React, { ReactNode, useEffect, useState } from "react"
import { shuffle } from "lodash"
import Image from "next/image"
import testImage from "../assets/img/image-for-you.png"
import { PlaylistCel } from "@/components/PlaylistCel"

type Props = {
    children: ReactNode
}

const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
]

export const PlaylistDetail = ({ children }: Props) => {

    const [color, setColor] = useState<string>();

    useEffect(() => {
        setColor(shuffle(colors).pop())
    }, [])


    return (
        <div className={`bg-gradient-to-b to-background ${color} h-4/6 text-white w-full`}>
            {children}
            <div className="flex px-11 gap-6 w-full">
                <Image className="max-h-297" src={testImage} alt="playlist-cover" width={297} height={297} />
                <div className="flex-shrink mt-16">
                    <span>PUBLIC PLAYLIST</span>
                    <h1 className="text-8xl tracking-tighter font-bold my-6">Pop Mix</h1>
                    <p className="mb-4">Hey Violet, VERTITÊ, Timeflies and more</p>
                    <p>Made for davedirect3 - 34 songs, 2hr 01 min</p>
                </div>
            </div>
            <div className="relative w-full h-full overflow-hidden px-10 mt-6">
                <div className="blur-2xl filter w-full h-full">
                    <div className="bg-[#121212] opacity-40 w-full h-full"></div>
                </div>
                <table className="absolute top-1 mt-11 w-full border-spacing-3">
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
                        <PlaylistCel/>
                        <PlaylistCel/>
                        <PlaylistCel/>
                    </tbody>
                </table>
            </div>
        </div>
    )
}