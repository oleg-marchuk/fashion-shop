import { Metadata } from "next"
import { Login } from "@/components/sections/auth"

export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign in to your account",
}

export default function SignInPage() {
    return <Login />
}
