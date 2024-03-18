
import { Sidebar } from '@/components/Sidebar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 px-4 pb-2 pt-16 lg:pt-2 min-h-screen w-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}