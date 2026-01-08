import { fetcher } from "@/lib/api-config"
import { AllFiltersResponse } from "@/types/filters"

export const filterService = {
    getFilters: async (): Promise<AllFiltersResponse> => {
        return fetcher<AllFiltersResponse>("/filters/")
    },
}
