import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const userPUT = async (req, {params}) => {
    try {
        
        const id = params.id;
        const check = await prisma.user.findUnique({
            where: {
                id: parseInt(id, 10),
            }
        });
        if (!check) {
            return new NextResponse(JSON.stringify({ error: "User not found" }), {
                status: 404,
            });
        }
        const jsonData = await req.json();
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(id, 10) },
            data: jsonData,
        });
        return new NextResponse(
            JSON.stringify({ success: "User found and updated", user: updatedUser }),
            { status: 200 }
        );
    } catch (error) {
     
        console.log(error);
        return new NextResponse(JSON.stringify({ error: "User updating error" }), {
            status: 400,
        });
    }
}