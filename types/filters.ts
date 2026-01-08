export interface FilterOption {
    id: number
    text: string
    value: string
}

export type FilterOptionWithoutId = Omit<FilterOption, "id" | "value"> & {
    href: string
    isActive: boolean
}

export interface ColorOption {
    id: number
    color: string
    name: string
}

export interface FiltersData {
    sizes: FilterOption[]
    colors: ColorOption[]
    prices: FilterOption[]
    brands: FilterOption[]
    collections: FilterOption[]
    tags: FilterOption[]
}

export interface AllFiltersResponse {
    data: FiltersData
}
