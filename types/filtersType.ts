export interface FilterItemState {
    href: string
    isActive: boolean
}

export interface FilterOption {
    id: number
    text: string
    value: string
}

export type FilterLinkText = Omit<FilterOption, "id" | "value"> &
    FilterItemState

export type FilterLink = Omit<FilterOption, "value"> &
    FilterItemState

export interface ColorOption {
    id: number
    color: string
    name: string
}

export type FilterLinkColor = Omit<ColorOption, "id" | "name"> &
    FilterItemState

export type ColorLink = Omit<ColorOption, "name"> & FilterItemState

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
