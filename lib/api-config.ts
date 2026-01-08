export const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetcher = async <T>(
    endpoint: string,
    options?: RequestInit
): Promise<T> => {
    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options?.headers,
        },
    })

    if (!response.ok) {
        throw new Error(`Error API: ${response.statusText}`)
    }

    return response.json()
}
