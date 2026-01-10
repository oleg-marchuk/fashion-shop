"use client"
import { FilterOption, FilterLink } from "@/types/filtersType"
import { useSearchParams } from "next/navigation"
import { getListItem } from "@/lib/utils"
import { LinkItem } from "../link-item"

export function Prices({ prices }: { prices: FilterOption[] }) {
    const searchParams = useSearchParams()

    const pricesList = getListItem({
        key: "price",
        list: prices,
        searchParams: searchParams,
    })

    return (
        <div className="flex flex-col gap-1">
            {pricesList.map(
                ({ id, text, href, isActive }: FilterLink) => (
                    <LinkItem
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
