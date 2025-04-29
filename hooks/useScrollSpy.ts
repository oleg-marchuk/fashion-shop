import { useEffect, useState } from "react"

export function useScrollSpy(ids: string[], offset = 100) {
    const [activeId, setActiveId] = useState<string | undefined>()

    useEffect(() => {
        function onScroll() {
            let currentId: string | undefined

            for (const id of ids) {
                const element = document.getElementById(id)
                if (!element) continue

                const { top } = element.getBoundingClientRect()
                if (top <= offset) {
                    currentId = `#${id}`
                }
            }

            setActiveId(currentId)
        }

        window.addEventListener("scroll", onScroll)
        onScroll()

        return () => window.removeEventListener("scroll", onScroll)
    }, [ids, offset])

    return activeId
}
