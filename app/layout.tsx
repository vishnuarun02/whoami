import "./globals.css"
import { Inter } from "next/font/google"
import LeftMenu from "./components/LeftMenu"
import { ThemeProvider } from "./components/theme-provider"
import type React from "react"

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
          <div className="flex">
            <LeftMenu />
            <main className="flex-1 p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

