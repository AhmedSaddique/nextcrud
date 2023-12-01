import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const userPOST= async (req)=> {
    const body = await req.json();
    const { firstName, lastName , age , phoneNumber , email , password } = body;
    console.log(body);

    try {
     
        const signup = await prisma.user.create({
            data:{
                firstName,
                lastName,
                age,
                phoneNumber,
                email,
                password
            }
        });
        return new NextResponse(
            JSON.stringify({success:"User saved successfully" , signup},
            {status: 200})
        )
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({error:"User saving error"}),
            {status: 400})
    }
}