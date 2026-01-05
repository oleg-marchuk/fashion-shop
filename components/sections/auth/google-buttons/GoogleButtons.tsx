import { Button } from "@/components/ui/button"
import Image from "next/image"

export function GoogleButtons() {
    return (
        <div className="">
            <div className="mb-21">
                <Button
                    variant="outline"
                    className="border-indigo-500 py-2 px-8"
                >
                    <Image
                        src="/google.svg"
                        alt="icon"
                        width={36}
                        height={36}
                    />
                    Sign up with Google
                </Button>
            </div>
            <div className="flex items-center justify-center gap-3">
                <div className="bg-zinc-400 h-1 w-7" />
                <span className="font-poppins font-bold text-3xl text-zinc-400">
                    OR
                </span>
                <div className="bg-zinc-400 h-1 w-7" />
            </div>
        </div>
    )
}
