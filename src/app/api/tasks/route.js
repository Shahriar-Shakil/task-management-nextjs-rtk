import { NextResponse } from "next/server";

export const GET = (request) => {
  return NextResponse.json({ msg: "hello world" });
};
