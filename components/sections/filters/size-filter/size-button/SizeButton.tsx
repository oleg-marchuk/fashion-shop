import Link from "next/link"

interface SizeButtonProps {
    text: string
    href: string
    isActive?: boolean
}

export function SizeButton({ text, href, isActive = false }: SizeButtonProps) {
    return (
        <Link
            href={href}
            className={`
                flex items-center justify-center w-16 h-16 rounded-xl border bg-white 
                shadow-sm hover:shadow-md active:scale-95 transition-all duration-150 
                cursor-pointer select-none
                ${
                    isActive
                        ? "border-gray-700 bg-gray-50"
                        : "border-gray-400 hover:border-gray-500"
                }
            `}
        >
            <span
                className={`text-2xl font-medium ${
                    isActive ? "text-gray-700" : "text-gray-400"
                }`}
            >
                {text}
            </span>
        </Link>
    )
}
