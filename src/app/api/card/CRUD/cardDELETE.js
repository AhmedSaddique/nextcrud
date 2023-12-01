import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const cardDELETE = async (req, {params})=>{
    try {
      const id = params.id;
      const check = await prisma.card.findUnique({
        where:{
          id:parseInt(id,10)
        }
      });
      if (!check) {
        return new NextResponse(JSON.stringify({ error: "Card not found" }), {
          status: 404,
        });
      }

      const DELETECard = await prisma.card.delete({
        where:{
          id:parseInt(id,10)
        }
      })
      return new NextResponse(
        JSON.stringify({ success: "Card found and Deleted", card: DELETECard }),
        { status: 200 }
      );
      
    } catch (error) {
      console.log(error);
      return new NextResponse(JSON.stringify({ error: "Card not Deleted" }), {
        status: 400,
      });
    }
  }