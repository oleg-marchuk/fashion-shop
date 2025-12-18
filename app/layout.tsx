import type { Metadata } from "next"
import { poppinsSans, volkhovSans, geistMono, dsDGFont } from "@/lib/fonts"
import "./globals.css"

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
                className={`${poppinsSans.className} ${volkhovSans.variable} ${geistMono.variable} ${dsDGFont.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
