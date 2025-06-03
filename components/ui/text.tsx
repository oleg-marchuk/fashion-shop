// src/components/ui/text.tsx
import React from "react"
import { cn } from "@/lib/utils"

type Variant = "p" | "span" | "h1" | "h2" | "h3" | "h4"
// | "blockquote" | "li"
type StyleVariant =
    | "medium"
    | "lead"
    | "muted"
    | "large"
    | "mid_large"
    | "very_large"

type TextProps = {
    as: Variant
    styleVariant?: StyleVariant
    className?: string
    children: React.ReactNode
}

const variantStyles: Record<Variant, string> = {
    p: "leading-7 [&:not(:first-child)]:mt-6",
    span: "text-base leading-6", // font-normal auto
    h1: "font-medium uppercase tracking-tight",
    h2: "font-extrabold uppercase text-white",
    h3: "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    // blockquote: "mt-6 border-l-2 pl-6 italic",
    // li: "my-6 ml-6 list-disc [&>li]:mt-2",
}

const styleVariants: Record<StyleVariant, string> = {
    medium: "text-black",
    lead: "text-xl text-muted-foreground",
    muted: "text-sm font-medium neutral-800 leading-5",
    large: "text-[52px] font-medium neutral-800",
    mid_large: "text-[96px] text-neutral-600",
    very_large:
        "text-[179px]/[1] [-webkit-text-stroke:_1px_#4B5563] md:[-webkit-text-stroke:_2px_#4B5563]",
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
