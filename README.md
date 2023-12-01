This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.








// use this way of method // post or get
// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';
// import formidable from 'formidable';
// import fs from 'fs'
// import path from 'path';


// const prisma = new PrismaClient();

// const cardpost = async (req) => {
//   const body = await req.json();
//   const {img, heading, para } = body;
//   console.log(body);

//   try {
//       const card = await prisma.card.create({
//           data: {
//               img,
//               heading,
//               para
//           }
//       });
//       return new NextResponse(
//           JSON.stringify({success:"Post created successfully" ,card }),
//           {status: 200}
//       );
      
//   }
//   catch (error) {
//       console.log(error);
//       return new NextResponse(
//           JSON.stringify({error:"Post creating error"}),
//           {status: 400}
//       )
//   }
// }

// export  {cardpost }
