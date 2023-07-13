import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
const ServerPage = async () => {
  const session = await getServerSession(authOptions);
  !session ? redirect('/signin?callbackUrl=/server') : null;
  return (
    <div className="text-xl">Página com segurança <span className="text-blue-300">Servidor </span>{session?.user?.name}</div>
  )
}

export default ServerPage