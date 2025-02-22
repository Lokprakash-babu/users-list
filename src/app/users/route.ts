import { NextResponse } from "next/server";

export const GET = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  console.log("users", users);
  return NextResponse.json(users);
};
