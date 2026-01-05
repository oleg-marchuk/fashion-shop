import { Metadata } from "next"
import { Register } from "@/components/sections/auth"

export const metadata: Metadata = {
    title: "Sign Up",
    description: "Create a new account",
}

export default function SignUpPage() {
    return <Register />
}
