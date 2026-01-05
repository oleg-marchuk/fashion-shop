import { ImageAuth } from "@/components/sections/auth"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:block lg:w-1/2 relative">
                <ImageAuth />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col pt-23 pl-24 pr-53">
                <h1 className="font-volkhov leading-6 text-[52px] font-medium neutral-800 mb-13">
                    FASCO
                </h1>
                {children}
            </div>
        </div>
    )
}
