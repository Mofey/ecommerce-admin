"use client";

import Layout from "@/components/Layout";
import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession()
  console.log({session});
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          {session?.user?.name}
        </div>
        </div>
    </Layout>
  );
}