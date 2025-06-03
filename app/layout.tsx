import type { Metadata } from "next"
import { Poppins, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const poppinsSans = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-poppins",
})

const dsDigi = localFont({
    src: "../fonts/DS-DIGI.woff2",
    weight: "400",
    style: "normal",
    variable: "--font-ds-digi",
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
                className={`${poppinsSans.className} ${dsDigi.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
