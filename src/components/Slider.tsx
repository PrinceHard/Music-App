import leftArrow from "../assets/svg/TopNav-Icon-Button-1.svg"
import rightArrow from "../assets/svg/TopNav-Icon-Button.svg"
import Image from "next/image"
import { CardDetailed } from "./CardDetailed"
import { lista } from "@/data/list"
import { useRef } from "react"
import { Card } from "./Card"
import axios from 'axios'
import useSWR from 'swr'
import { GetStaticProps, InferGetStaticPropsType } from "next"
const qs = require('qs')

type Props = {
    isDetailed: boolean
}

export const Slider = ({isDetailed}: Props) => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const slideLeft = () => {
        scrollRef.current!.scrollLeft -= 1100
    }

    const slideRight = () => {
        scrollRef.current!.scrollLeft += 1100
    }

    return (
        <div className="w-full px-14 py-11 inline-block">
            <div className="w-full flex justify-between h-9">
                <h1 className="text-slate-100 font-semibold leading-6 text-lg">Section Title</h1>
                <div className="flex gap-2">
                    <button onClick={slideLeft}>
                        <Image src={leftArrow} alt="leftArrowIcon" />
                    </button>
                    <button onClick={slideRight}>
                        <Image src={rightArrow} alt="rightArrowIcon" />
                    </button>
                </div>
            </div>
            {isDetailed ?
                <div ref={scrollRef} className="max-w-full my-2 flex gap-16 overflow-x-scroll items-center whitespace-nowrap scroll-smooth scrollbar-hide">
                    {lista.map((item, index) => (
                        <div key={index}>
                            <CardDetailed />
                        </div>
                    ))}
                </div>
                :
                <div ref={scrollRef} className="max-w-full my-2 flex gap-10 overflow-x-scroll items-center whitespace-nowrap scroll-smooth scrollbar-hide">
                    {lista.map((item, index) => (
                        <div key={index}>
                            <Card />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const authToken = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');

const getAuth = async () => {
    try {
        const tokenUrl = 'https://accounts.spotify.com/api/token';
        const data = qs.stringify({ 'grant_type': 'client_credentials' });

        const response = await axios.post(tokenUrl, data, {
            headers: {
                'Authorization': `Basic ${authToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        return response.data.access_token;
    } catch (error) {
        console.log(error);
    }
}

const fetcher = async function getTracks(url: string) {
    const accessToken = await getAuth();
    const apiUrl = `${url}4aawyAB9vmqN3uQ7FjRGTy`;
    try {
        const response = await axios.get(apiUrl,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
        return response.data
    } catch (e) {
        console.error(e)
    }
}

export const getStaticProps: GetStaticProps = async () => {

    const { data } = useSWR('https://api.spotify.com/v1/albums/', fetcher)

    return {
        props: {
            data,
        }
    }
}