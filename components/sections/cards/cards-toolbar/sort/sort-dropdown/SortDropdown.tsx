import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface SortOption {
    value: string
    label: string
}

const sortOptions: SortOption[] = [
    { value: "best-selling", label: "Best selling" },
    { value: "low-to-high", label: "Low to High" },
    { value: "high-to-low", label: "High to Low" },
    { value: "new-arrivals", label: "New Arrivals" },
]

interface SortDropdownProps {
    onSortChange?: (value: string) => void
    defaultValue?: string
}

export function SortDropdown({
    onSortChange,
    defaultValue = "best-selling",
}: SortDropdownProps) {
    return (
        <Select defaultValue={defaultValue} onValueChange={onSortChange}>
            <SelectTrigger className="w-[140px] border-none focus:ring-0 focus:ring-offset-0 shadow-none">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
