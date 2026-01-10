import { fetcher } from "@/lib/api-config"
import { AllFiltersResponse } from "@/types/filtersType"

export const filterService = {
    getFilters: async (): Promise<AllFiltersResponse> => {
        return fetcher<AllFiltersResponse>("/filters/")
    },
}
