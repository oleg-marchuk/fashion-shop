import { GoogleButtons } from "../google-buttons"
import { RegisterForm } from "./register-form"

export function Register() {
    return (
        <div className="flex flex-col">
            <h2 className="font-volkhov text-3xl mb-7">Create Account</h2>
            <GoogleButtons />
            <RegisterForm />
        </div>
    )
}
