import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const cardpost = async (req) => {
  const body = await req.json();
  const {img, heading, para } = body;
  console.log(body);

  try {
      const card = await prisma.card.create({
          data: {
              heading,
              para
          }
      });
      return new NextResponse(
          JSON.stringify({success:"Post created successfully" ,card }),
          {status: 200}
      );
      
  }
  catch (error) {
      console.log(error);
      return new NextResponse(
          JSON.stringify({error:"Post creating error"}),
          {status: 400}
      )
  }
}