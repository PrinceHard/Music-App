import Image from "next/image"
import cardImage from "../assets/img/image-thumb.png"

export const Card = () => {
    return (
        <a href="">
            <div className="h-80 w-52 py-2 drop-shadow-2xl rounded-3">
                <div className="h-72">
                    <div className="w-full rounded-3">
                        <Image src={cardImage} alt="card-image" width={208} height={208} className="rounded-3" />
                    </div>
                    <div className="w-full h-20 pt-4">
                        <h3 className="text-slate-50 font-semibold text-sm leading-5 mb-1">Blood Sugar Sex Magik</h3>
                        <h4 className="text-gray-400 font-semibold text-xs leading-5">Red Hot Chili Peppers</h4>
                        <span className="text-gray-400 font-semibold text-10 leading-3">LABEL</span>
                    </div>
                </div>
            </div>
        </a>
    )
}