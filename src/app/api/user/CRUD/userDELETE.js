import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export const userDELETE = async (req, { params }) => {
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
        const DELETEUser = await prisma.user.delete({
            where: { id: parseInt(id, 10) },
        });
        return new NextResponse(
            JSON.stringify({ success: "User found and Deleted", user: DELETEUser }),
            { status: 200 }
        );
        } catch (error) {
            console.log(error);
            return new NextResponse(JSON.stringify({ error: "User not Deleted" }), {
                status: 400,
            });
        }
    
}