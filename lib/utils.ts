import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import {
    ColorOption,
    FilterOption,
    FilterItemState,
    FilterLink,
    ColorLink,
} from "@/types/filtersType"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const pathname = "/shop"

export const createFilterUrl = (
    key: string,
    value: string,
    currentParams?: URLSearchParams
): string => {
    const params = new URLSearchParams(currentParams?.toString())
    const lowerValue = value.toLowerCase()

    const existingValue = params.get(key)

    if (!existingValue) {
        params.set(key, lowerValue)
    } else {
        const values = existingValue.split(",")

        if (values.includes(lowerValue)) {
            const filteredValues = values.filter((v) => v !== lowerValue)
            if (filteredValues.length > 0) {
                params.set(key, filteredValues.join(","))
            } else {
                params.delete(key)
            }
        } else {
            values.push(lowerValue)
            params.set(key, values.join(","))
        }
    }

    const queryString = decodeURIComponent(params.toString())

    return `${pathname}?${queryString}`
}

export const getSelectedValues = (
    key: string,
    searchParams: URLSearchParams
): string[] => {
    return searchParams.get(key)?.split(",") || []
}

export const getFilterItemProps = (
    key: string,
    value: string,
    searchParams: URLSearchParams,
    selectedValues: string[]
): FilterItemState => {
    const lowerValue = value.toLowerCase()
    const href = createFilterUrl(key, lowerValue, searchParams)
    const isActive = selectedValues.includes(lowerValue)

    return {
        href,
        isActive,
    }
}

export const getListItem = ({
    key,
    list,
    searchParams,
}: {
    key: string
    list: FilterOption[]
    searchParams: URLSearchParams
}): FilterLink[] => {
    const selectedItems = getSelectedValues(key, searchParams)

    return list.map((item: FilterOption) => {
        const { href, isActive } = getFilterItemProps(
            key,
            item.value,
            searchParams,
            selectedItems
        )
        return { id: item.id, text: item.text, href, isActive }
    })
}

export const getColorsListItem = ({
    key,
    list,
    searchParams,
}: {
    key: string
    list: ColorOption[]
    searchParams: URLSearchParams
}): ColorLink[] => {
    const selectedItems = getSelectedValues(key, searchParams)

    return list.map((item: ColorOption) => {
        const { href, isActive } = getFilterItemProps(
            key,
            item.name,
            searchParams,
            selectedItems
        )
        return { id: item.id, color: item.color, href, isActive }
    })
}
