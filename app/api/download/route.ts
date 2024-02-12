// pages/api/download.js
import { NextRequest, NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import JSZip from "jszip";

export async function POST(request: NextRequest) {
  // const data = await fs.readFileSync(
  //   path.join(process.cwd(), "components/cards/about-user/index.tsx"),
  //   // @ts-ignore
  //   { encoding: "utf8" }
  // );
  // console.log(data);
  // const files = await fs.readdirSync(process.cwd());
  // return NextResponse.json({ data: __dirname, datas: process.cwd(), files });
  try {
    
    const { folderToZip } = await request.json();
    
  const zip = new JSZip();
  const pathToFolderToZip = `${process.cwd()}/${folderToZip}`;

  await zipFolder(zip, pathToFolderToZip, "");
  
  const zipContent = await zip.generateAsync({ type: "nodebuffer" });

  return new NextResponse(zipContent, {
    status: 200,
    headers: new Headers({
      "content-type": "application/zip",
      "content-disposition": "attachment filename=sample-code.zip",
    }),
  });
} catch (error) {
 return NextResponse.json({message: JSON.stringify(error, null, 2)}) 
}
}

async function zipFolder(zip: JSZip, folderPath: string, relativePath: string) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    let relativeFilePath: any;
    if (!fs.statSync(filePath).isDirectory()) {
      relativeFilePath = file;
    }

    if (fs.statSync(filePath).isDirectory()) {
      await zipFolder((zip as any).folder(file), filePath, relativeFilePath);
    } else {
      const fileContent = fs.readFileSync(filePath);
      zip.file(relativeFilePath, fileContent);
    }
  }
}
