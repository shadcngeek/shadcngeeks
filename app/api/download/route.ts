import { NextRequest, NextResponse } from "next/server";

import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_AUTH_TOKEN as any,
});

export async function POST(request: NextRequest) {
  const { path } = await request.json();

  const result = await octokit.request(
    "GET /repos/{owner}/{repo}/contents/{path}",
    {
      owner: "shadcngeek",
      repo: "shadcngeeks",
      path: path,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  return NextResponse.json(result);
}
