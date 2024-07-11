"use server";
import { cookies } from "next/headers";

export default async function Home() {
  const sessionCookie = await cookies().get("session")?.value;
  let loggedIn = false;
  let user = { _id: "", name: "", username: "" };
  if (sessionCookie === undefined) {
    loggedIn = false;
  } else {
    user = JSON.parse(sessionCookie);

    loggedIn = true;
  }
  return <div className="w-screen h-screen flex">{user._id}</div>;
}
