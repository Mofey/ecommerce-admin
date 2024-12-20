"use client";

import { useSession, signIn } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-custom-dark-blue w-screen h-screen flex items-center">
        <div className="text-center w-full text-black">
          <button onClick={() => signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-custom-dark-blue min-h-screen flex">
      <Nav />
      <div className="bg-white flex-grow mt-2 mr-1 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}