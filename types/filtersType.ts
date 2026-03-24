export interface FilterItemState {
    href: string
    isActive: boolean
}

export interface FilterOption {
    id: number
    text: string
    value: string
    order?: number
}

export interface PriceOption {
    id: number
    min_val: number
    max_val: number
    order: number
}

export interface ColorOption {
    id: number
    hex_code: string
    name: string
}

export type FilterLink = Omit<FilterOption, "value"> & FilterItemState

export type ColorLink = Omit<ColorOption, "name"> & FilterItemState

export type FilterColorLink = Omit<ColorOption, "id" | "name"> & FilterItemState

export type PriceLink = PriceOption & FilterItemState & { label: string }

export interface FiltersData {
    categories: FilterOption[]
    brands: FilterOption[]
    collections: FilterOption[]
    sizes: FilterOption[]
    colors: ColorOption[]
    prices: FilterOption[]
}

export interface AllFiltersResponse {
    data: FiltersData
}
