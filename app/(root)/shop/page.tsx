import { Cards, Filters } from "@/components/sections"

export default function Shop() {
    return (
        <section className="my-8 mx-auto max-w-7xl px-4">
            <div className="flex gap-6">
                <aside className="w-80 shrink-0">
                    <Filters />
                </aside>
                <div className="flex-1">
                    <Cards />
                </div>
            </div>
        </section>
    )
}
