import { Button } from "@/components/ui"

export default function DealsMonth() {
    return (
        // max-w-[1280px]
        <section className="relative flex w-full mx-auto max-w-[1280px] bg-amber-300">
            <div className="min-w-[444px] h-[325px]">
                <h4 className="text-[46px] text-neutral-700">
                    Deals of the month
                </h4>
            </div>

            <div className="ml-[125px] w-full bg-sky-900">
                <div className="absolute top-0 h-[200px] w-full bg-red-900"></div>
            </div>
        </section>
    )
}
