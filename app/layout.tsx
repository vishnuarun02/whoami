import "@/app/globals.css"
import { Inter } from "next/font/google"
import LeftMenu from "@/app/components/LeftMenu"
import { ThemeProvider } from "@/app/components/theme-provider"
import AccentColorProvider from "@/app/components/AccentColorProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vishnu Arun Portfolio",
  description: "Personal portfolio of Vishnu Arun",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col md:flex-row min-h-screen">
            <LeftMenu />
            <AccentColorProvider>
              <main className="flex-1 p-4 md:p-8">{children}</main>
            </AccentColorProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
