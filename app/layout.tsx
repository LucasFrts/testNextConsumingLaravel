import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider';
import SignInButton from '@/components/SignInButton';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
    <body className={inter.className}>
      <Provider>
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
          <div className="flex w-full max-w-full items-center justify-center">
            <ul className="flex items-center justify-between gap-10 text-xl">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/server"}>Server</Link></li>
              <li><Link href={"/client"}>Client</Link></li>
              <SignInButton/>
            </ul>
          </div>
          {children}
        </main>
      </Provider>
    </body>

  </html>
      
  )
}
