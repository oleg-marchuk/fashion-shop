// src/components/ui/text.tsx
import React from "react"
import { cn } from "@/lib/utils"

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "li" | "span"
type StyleVariant = "medium" | "lead" | "muted" | "large"

type TextProps = {
    as: Variant
    styleVariant?: StyleVariant
    className?: string
    children: React.ReactNode
}

const variantStyles: Record<Variant, string> = {
    p: "leading-7 [&:not(:first-child)]:mt-6",
    span: "text-base leading-6", // font-normal auto
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
    h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    blockquote: "mt-6 border-l-2 pl-6 italic",
    li: "my-6 ml-6 list-disc [&>li]:mt-2",
}

const styleVariants: Record<StyleVariant, string> = {
    medium: "text-black",
    lead: "text-xl text-muted-foreground",
    muted: "text-sm font-medium neutral-800 leading-5",
    large: "text-[52px] font-medium neutral-800 leading-6",
}

export const Text: React.FC<TextProps> = ({
    as: Component,
    styleVariant,
    className,
    children,
}) => {
    return (
        <Component
            className={cn(
                variantStyles[Component],
                styleVariant && styleVariants[styleVariant],
                className
            )}
        >
            {children}
        </Component>
    )
}