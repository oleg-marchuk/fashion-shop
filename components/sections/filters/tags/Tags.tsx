"use client"
import { FilterLink, FilterOption } from "@/types/filtersType"
import { LinkItem } from "../link-item"
import { useSearchParams } from "next/navigation"
import { getListItem } from "@/lib/utils"

export function Tags({ tags }: { tags: FilterOption[] }) {
    const searchParams = useSearchParams()

    const tagsList = getListItem({
        key: "tag",
        list: tags,
        searchParams: searchParams,
    })

    return (
        <div className="flex flex-wrap gap-3">
            {tagsList.map(({ id, text, href, isActive }: FilterLink) => (
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
