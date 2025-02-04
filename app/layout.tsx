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
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Changed from "system" to "light"
          enableSystem={false} // Changed to false to prevent system override
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row min-h-screen">
            <LeftMenu />
            <main className="flex-1 p-4 md:p-8 overflow-auto">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}