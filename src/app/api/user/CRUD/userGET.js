import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const userGET = async (req)=>{
    try{
        const user = await prisma.user.findMany()
        return new NextResponse(
            JSON.stringify({ success:"User Successful Created",user}),
            {status: 200})
    }
    catch (error) {
        return new NextResponse(JSON.stringify("User Failure",error),
        {status:400})
}
};

export const userGETByID = async (req, { params })=>{
    try{
        const id = params.id;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(id, 10),
            }
        });
        if (!user) {
            return new NextResponse(JSON.stringify({ error: "User not found" }), {
                status: 400,
            });
        } else {
            return new NextResponse(
                JSON.stringify({ success: "User found", user}),
                { status: 200 }
            );
        }
    }
    catch (error) {
        return new NextResponse(JSON.stringify("User Failure",error),
        {status:400})
}
}


export const LoginEmail = async (req, { params })=>{
    try{
        const email = params.email;
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        });
        if (!user) {
            return new NextResponse(JSON.stringify({ error: "User not found" }), {
                status: 400,
            });
        } else {
            return new NextResponse(
                JSON.stringify(({user}),{ success: "User found", user}),
                { status: 200 }
            );
        }
    }
    catch (error) {
        return new NextResponse(JSON.stringify("User Failure",error),
        {status:400})
}
}


