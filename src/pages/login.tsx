import { getProviders, signIn } from "next-auth/react"
import { GetServerSideProps } from "next"
import spotifyLogo from "../assets/svg/spotify-1.svg"
import Image from "next/image"

const Login = ({ providers }: { providers: { name: any } }) => {
    return (
        <div className="bg-gray-950 flex flex-col items-center h-screen justify-center">
            <Image src={spotifyLogo} alt="spotify-logo" width={450} />
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button
                        onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                        className="bg-white text-black p-5 rounded-full font-medium text-lg mt-4"
                    >
                        Sign in with {provider?.name}
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Login;

export const getServerSideProps: GetServerSideProps = async () => {

    return {
        props: {
            providers: await getProviders()
        }
    }
}