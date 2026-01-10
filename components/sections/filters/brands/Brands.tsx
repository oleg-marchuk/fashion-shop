"use client"
import { FilterLink, FilterOption } from "@/types/filtersType"
import { LinkItem } from "../link-item"
import { useSearchParams } from "next/navigation"
import { getListItem } from "@/lib/utils"

export function Brands({ brands }: { brands: FilterOption[] }) {
    const searchParams = useSearchParams()

    const brandsList = getListItem({
        key: "brand",
        list: brands,
        searchParams: searchParams,
    })

    return (
        <div className="flex flex-wrap gap-3">
            {brandsList.map(({ id, text, href, isActive }: FilterLink) => (
                <LinkItem
                    key={id}
                    text={text}
                    href={href}
                    isActive={isActive}
                />
            ))}
        </div>
    )
}
