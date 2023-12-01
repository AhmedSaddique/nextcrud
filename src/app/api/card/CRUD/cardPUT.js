import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();  

export const cardPUT = async (req,  {params}) => {
    try {
        const id = params.id;
        const check = await prisma.card.findUnique({
          where: {
            id: parseInt(id, 10),
          },
        });
    
        if (!check) {
          return new NextResponse(JSON.stringify({ error: "Card not found" }), {
            status: 404,
          });
        }
    
        const jsonData = await req.json();
    
        const updatedCard = await prisma.card.update({
          where: { id: parseInt(id, 10) },
          data: jsonData,
        });
    
        return new NextResponse(
          JSON.stringify({ success: "Card found and updated", card: updatedCard }),
          { status: 200 }
        );
      } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ error: "Card updating error" }), {
          status: 400,
        });
      }
}