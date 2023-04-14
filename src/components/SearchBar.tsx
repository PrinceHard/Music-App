import Image from "next/image"
import searchIcon from "../assets/svg/search.svg"

export const SearchBar = () => {
    return (
        <div className="w-full h-16 pt-6 pr-14 flex justify-end">
            <div className="relative">
                <Image src={searchIcon} alt="search-icon" className="absolute top-1/2 box-border -translate-y-1/2 left-3 w-4 h-4"/>
                <input
                    className="w-96 h-10 border-border bg-light-gray outline-none border rounded-xl py-3 pr-3 pl-9 text-white"
                    type="text"
                    placeholder="Search"
                />
            </div>
        </div>
    )
}