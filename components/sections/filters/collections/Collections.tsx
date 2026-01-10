"use client"
import { FilterLink, FilterOption } from "@/types/filtersType"
import { useSearchParams } from "next/navigation"
import { getListItem } from "@/lib/utils"
import { LinkItem } from "../link-item"

export function Collections({ collections }: { collections: FilterOption[] }) {
    const searchParams = useSearchParams()

    const collectionsList = getListItem({
        key: "collection",
        list: collections,
        searchParams: searchParams,
    })

    return (
        <div className="flex flex-col gap-1">
            {collectionsList.map(({ id, text, href, isActive }: FilterLink) => (
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
