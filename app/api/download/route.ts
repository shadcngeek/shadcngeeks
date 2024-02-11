// pages/api/download.js
import { NextRequest, NextResponse } from "next/server";

import fs from "fs";
import path from "path";
import JSZip from "jszip";
import { fi } from "@faker-js/faker";

export async function POST(request: NextRequest) {
  const { folderToZip } = await request.json();
  const zip = new JSZip();

  const fs = require("fs");

  const folderPath = `${__dirname}`;

  // fs.readdirSync(folderPath);

  // const filNames = [];
  // await filNames.push(fs.readdirSync(folderPath));

  const fileContents = fs
    .readFileSync("components/cards/about-user/types.ts")
    .toString();

  // await zipFolder(zip, folderToZip, "");
  // const zipContent = await zip.generateAsync({ type: "nodebuffer" });
  // const joinPath = path.join(folderToZip, "filessss");

  return NextResponse.json({
    message: "Hello world",
    currentDir: __dirname,
    fileContents,
  });

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
