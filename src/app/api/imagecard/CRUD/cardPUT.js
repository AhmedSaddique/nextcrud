import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises'; // Import writeFile

const prisma = new PrismaClient();  

export const CardImagePUT = async (req, { params }) => {
    try {
        const id = parseInt(params.id, 10);
        const check = await prisma.imagecard.findUnique({
            where: { id },
        });

        if (!check) {
            return new NextResponse(JSON.stringify({ error: "Card not found" }), {
                status: 404,
            });
        }

        const data = await req.formData();
        const file = data.get('file');
        let path;

        // Process file upload if file is provided
        if (file) {
            const bytedata = await file.arrayBuffer();
            const buffer = Buffer.from(bytedata);
            path = `./public/uploads/${file.name}`;
            await writeFile(path, buffer);
        }

        // Extract other form data
        const heading = data.get('heading');
        const para = data.get('para');

        // Prepare update data
        const updateData = {
            ...(path && { img: path }),
            ...(heading && { heading }),
            ...(para && { para }),
        };

        const updatedCard = await prisma.imagecard.update({
            where: { id },
            data: updateData,
        });

        return new NextResponse(
            JSON.stringify({ success: "Card found and updated", imagecard: updatedCard }),
            { status: 200 }
        );
      } catch (error) {
        console.error("Card updating error:", error);
        return new NextResponse(JSON.stringify({ error: `Card updating error: ${error.message}` }), {
            status: 400,
        });
    }
};

