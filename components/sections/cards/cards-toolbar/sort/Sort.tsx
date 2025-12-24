'use client'
import { SortDropdown } from "./sort-dropdown"
// import { useRouter, useSearchParams } from "next/navigation"

export function Sort() {
    const handleSortChange = (value: string) => {
        console.log("Selected sort option:", value)
    }

    return (
        <SortDropdown
            onSortChange={handleSortChange}
            defaultValue={"best-selling"}
        />
    )
}
