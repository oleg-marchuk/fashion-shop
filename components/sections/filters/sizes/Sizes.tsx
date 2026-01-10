"use client"
import { SizeButton } from "./size-button"
import { FilterOption, FilterLink } from "@/types/filtersType"
import { useSearchParams } from "next/navigation"
import { getListItem } from "@/lib/utils"

export function Sizes({ sizes }: { sizes: FilterOption[] }) {
    const searchParams = useSearchParams()

    const sizesList = getListItem({
        key: "size",
        list: sizes,
        searchParams: searchParams,
    })

    return (
        <div className="flex gap-3">
            {sizesList.map(
                ({ id, text, href, isActive }: FilterLink) => (
                    <SizeButton
                        key={id}
                        text={text}
                        href={href}
                        isActive={isActive}
                    />
                )
            )}
        </div>
    )
}
