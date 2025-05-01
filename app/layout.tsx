import type { Metadata } from "next"
import { Poppins, Geist_Mono } from "next/font/google"
import "./globals.css"

const poppinsSans = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-poppins",
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Fashion Shop",
    description: "fashion shop",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppinsSans.className} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
