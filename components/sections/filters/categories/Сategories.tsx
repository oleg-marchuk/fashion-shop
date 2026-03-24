"use client"
import { FilterLink, FilterOption } from "@/types/filtersType"
import { LinkItem } from "../link-item"
import { useSearchParams } from "next/navigation"
import { getListItem } from "@/lib/utils"

export function Categories({ category }: { category: FilterOption[] }) {
    const searchParams = useSearchParams()

    const categoryList = getListItem({
        key: "tag",
        list: category,
        searchParams: searchParams,
    })

    return (
        <div className="flex flex-col gap-1">
            {categoryList.map(({ id, text, href, isActive }: FilterLink) => (
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
