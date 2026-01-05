"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Field, FieldGroup, FieldError, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Inputs = {
    email: string
    password: string
}

export function LoginForm() {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
                <FieldSet>
                    <Field>
                        <Input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="h-12 mb-7.5 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                        />
                        {/* {errors.email && <FieldError>Enter a valid email address.</FieldError>} */}
                        <Input
                            {...register("password", { required: true })}
                            placeholder="Password"
                            className="h-12 mb-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                        />
                    </Field>
                </FieldSet>
                <Field orientation="vertical">
                    <Button size="xl" className="font-normal">
                        Sign In
                    </Button>
                    <Link
                        href="/sign-up"
                        className="inline-flex items-center justify-center bg-white border-2 border-sky-500 text-sky-500 px-56 py-3 rounded-md transition-colors hover:bg-sky-50 font-normal"
                    >
                        Register Now
                    </Link>
                </Field>
            </FieldGroup>
        </form>
    )
}
