import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Noppol Nunpiang",
    studentId: "650612086",
  });
};
