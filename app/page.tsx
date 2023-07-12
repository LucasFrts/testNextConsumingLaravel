import Link from "next/link"

export default function Home() {
  return (
    <section>
      <h1>Welcome to test deployment page</h1>
      <p>
        Please continue in the link below  
      </p>
      <p className="bg-gradient-to-b mt-4 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Link href="/users">
          Users page  
        </Link>
      </p>
    </section>
  )
}
