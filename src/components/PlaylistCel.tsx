import Image from "next/image"
import testImage from "../assets/img/image-for-you.png"

export const PlaylistCel = () => {
    return (
        <tr className="tr">
            <td>1</td>
            <td className="flex gap-2">
                <Image className="" src={testImage} width={52} height={52} alt="" />
                <div>
                    <p>Play It Safe</p>
                    <p>Julia Wolf</p>
                </div>
            </td>
            <td>Play It Safe</td>
            <td> </td>
            <td>2:12</td>
        </tr>
    )
}