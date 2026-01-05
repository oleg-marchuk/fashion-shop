"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function ImageAuth() {
    const pathname = usePathname()

    return pathname === "/sign-up" ? (
        <Image
            src="/images/sign_up.jpg"
            alt="sign_up"
            fill
            className="object-cover"
        />
    ) : (
        <Image
            src="/images/sign_in.jpeg"
            alt="sign_in"
            fill
            className="object-cover"
        />
    )
}
