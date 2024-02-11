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
  return NextResponse.json({ data: process.cwd() });
  // const { folderToZip } = await request.json();
  // const zip = new JSZip();

  // await zipFolder(zip, folderToZip, "");
  // const zipContent = await zip.generateAsync({ type: "nodebuffer" });

  // return new NextResponse(zipContent, {
  //   status: 200,
  //   headers: new Headers({
  //     "content-type": "application/zip",
  //     "content-disposition": "attachment filename=sample-code.zip",
  //   }),
  // });
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
