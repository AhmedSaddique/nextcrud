import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const cardGET = async (req) => {
    try{
        const card = await prisma.card.findMany()
        return new NextResponse(
            JSON.stringify( {card}),
            {status: 200}
        );
    }
    catch (error) {
        return new NextResponse(JSON.stringify("Card Failure",error),
        {status:400})

    }
};


export const cardGetByID = async (req , {params}) => {
 try {
     const id = params.id;
     const card = await prisma.card.findUnique({
         where: {
             id: parseInt(id, 10),
         }
     });
     if (!card) {
         return new NextResponse(JSON.stringify({ error: "Card not found" }), {
             status: 400,
         });
     } else{
        
         return new NextResponse(
             JSON.stringify({ success: "Card found", card}),
             { status: 200 }
         );
     }
    
 } catch (error) {
         console.log(error);
         return new NextResponse(JSON.stringify({ error: "Card Failure" }), {
             status: 400,
         });

 }
};

