export interface FilterOption {
    id: number
    text: string
    value: string
}

export interface FilterItemState {
    href: string
    isActive: boolean
}

export type FilterOptionWithoutIdValue = Omit<FilterOption, "id" | "value"> &
    FilterItemState

export type FilterOptionWithoutValue = Omit<FilterOption, "value"> &
    FilterItemState

export interface ColorOption {
    id: number
    color: string
    name: string
}

export type ColorOptionWithoutId = Omit<ColorOption, "id" | "name"> &
    FilterItemState

export type ColorOptionWithoutName = Omit<ColorOption, "name"> & FilterItemState

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
