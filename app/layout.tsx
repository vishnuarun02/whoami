import "@/app/globals.css"
import { Inter } from "next/font/google"
import LeftMenu from "@/components/layout/LeftMenu"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import AccentColorProvider from "@/components/providers/AccentColorProvider"
import { SITE_CONFIG } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
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
          <AccentColorProvider>
            <div className="flex flex-col md:flex-row min-h-screen">
              <LeftMenu />
              <main className="flex-1 p-4 md:p-8">{children}</main>
            </div>
          </AccentColorProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
