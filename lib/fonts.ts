import { Poppins, Geist_Mono, Volkhov } from "next/font/google"
import localFont from "next/font/local"

export const poppinsSans = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-poppins",
})

export const volkhovSans = Volkhov({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-volkhov",
})

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const dsDGFont = localFont({
    src: [
        {
            path: "../public/fonts/DS-DIGI.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-ds-digi",
})
