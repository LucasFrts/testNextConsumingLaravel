'use client';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const Client = () => {
    const {data:session} = useSession({
        required:true,
        onUnauthenticated(){
            redirect("/signin?callbackUrl=/client")
        }
    });

  return (
    <div className="text-xl">Página com segurança <span className="text-blue-300">Client Auth</span></div>
  )
}

export default Client