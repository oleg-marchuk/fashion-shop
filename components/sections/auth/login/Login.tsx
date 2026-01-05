import { GoogleButtons } from "../google-buttons"
import { LoginForm } from "./login-form"

export function Login() {
    return (
        <div className="flex flex-col">
            <h2 className="font-volkhov text-3xl mb-7">Sign In To FASCO</h2>
            <GoogleButtons />
            <LoginForm />
        </div>
    )
}
