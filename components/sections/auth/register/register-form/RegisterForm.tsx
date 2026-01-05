"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { Field, FieldGroup, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Inputs = {
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    passwordConfirmation: string
}

export function RegisterForm() {
    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
            <FieldGroup>
                <FieldSet>
                    <div className="grid grid-cols-2 gap-x-6">
                        <div className="flex flex-col">
                            <Input
                                {...register("firstName", { required: true })}
                                placeholder="First Name"
                                className="h-12 mb-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                            />
                            <Input
                                {...register("email", { required: true })}
                                placeholder="Email"
                                className="h-12 mb-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                            />
                            <Input
                                {...register("password", { required: true })}
                                placeholder="Password"
                                className="h-12 mb-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                            />
                        </div>
                        <div className="flex flex-col">
                            <Input
                                {...register("lastName", { required: true })}
                                placeholder="Last Name"
                                className="h-12 mb-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                            />
                            <Input
                                {...register("phone", { required: true })}
                                placeholder="Phone Number"
                                className="h-12 mb-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                            />
                            <Input
                                {...register("passwordConfirmation", {
                                    required: true,
                                })}
                                placeholder="Confirm Password"
                                className="h-12 mb-2 border-t-0 border-l-0 border-r-0 border-b-2 border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-black transition-colors"
                            />
                        </div>
                    </div>
                </FieldSet>
                <Field orientation="vertical">
                    <Button size="xl" className="font-normal mb-4">
                        Sign In
                    </Button>
                    <div className="flex justify-center gap-1">
                        <span>Already have an account? </span>
                        <Link
                            href="/sign-in"
                            className="text-sky-500 hover:text-sky-600"
                        >
                            Sign In
                        </Link>
                    </div>
                </Field>
            </FieldGroup>
        </form>
    )
}
