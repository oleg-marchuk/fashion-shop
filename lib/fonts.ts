import localFont from "next/font/local"

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
