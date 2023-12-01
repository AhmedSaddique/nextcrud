import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises'; // Import writeFile
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const CardImagepost = async (req) => {
    try {
      const data = await req.formData();
      const file = data.get('file');
      if (!file) {
        return NextResponse.json({ message: "Invalid file", success: false, status: 400 });
      }

    // Process file upload
    const bytedata = await file.arrayBuffer();
    const buffer = Buffer.from(bytedata);
    const path = `./public/uploads/${file.name}`;
    await writeFile(path, buffer);

    // Extract other form data
    const heading = data.get('heading');
    const para = data.get('para');

    // Create database entry
    const card = await prisma.imagecard.create({
      data: {
        img: path, // Use the file path
        heading,
        para
      }
    });

    return new NextResponse(
        JSON.stringify({ message: "Post created successfully", card, success: true, status: 200 }),
        { status: 200 }
      );
  
    } catch (error) {
      console.error("Error occurred:", error);
      return new NextResponse(
          JSON.stringify({ message: "Error in processing request", details: error.message, success: false, status: 400 }),
          { status: 400 }
      );
    }
  };
  