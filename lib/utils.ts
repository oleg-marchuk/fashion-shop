import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const createFilterUrl = (
    key: string,
    value: string,
    currentParams?: URLSearchParams
) => {
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

    return `/shop?${queryString}`
}
