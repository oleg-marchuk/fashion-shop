import Link from "next/link"

interface LinkItemProps {
    text: string
    href: string
    isActive?: boolean
}

export function LinkItem({ text, href='', isActive = false }: LinkItemProps) {
    return (
        <Link
            href={href}
            className={`
                text-base no-underline transition-colors duration-200
                ${
                    isActive
                        ? "text-gray-700"
                        : "text-gray-400 hover:text-gray-600"
                }
            `}
        >
            {text}
        </Link>
    )
}
