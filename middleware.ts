import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"


export const middleware = async (req: NextRequest) => {
    const token = await getToken({req: req as unknown as NextApiRequest, secret: process.env.JWT_SECRET});
    const {pathname} = req.nextUrl

    if(pathname.includes('/api/auth') || pathname.includes('/assets') || token){
        return NextResponse.next()
    }

    if(!token && pathname !== '/login'){
        return NextResponse.redirect('/login')
    }
}