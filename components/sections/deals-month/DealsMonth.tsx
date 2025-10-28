import { Button } from "@/components/ui"
import { CountdownTimer } from "./countdown-timer"
import { SliderPhoto } from "./slider-photo"

export function DealsMonth() {
    return (
        <section className="relative py-8 mb-[275px]">
            <div className="flex my-8 mx-auto max-w-7xl">
                <div className="min-w-[444px]">
                    <h4 className="text-[46px] text-neutral-700">
                        Deals of the month
                    </h4>
                    <p className="text-base text-neutral-500 mt-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Scelerisque duis ultrices sollicitudin aliquam sem.
                        Scelerisque duis ultrices sollicitudin
                    </p>
                    <Button size="lg" className="mt-10">
                        Buy Now
                    </Button>
                    <h5 className="text-[28px] text-neutral-600 mt-13">
                        Hurry, Before It`s Too Late!
                    </h5>
                    <CountdownTimer targetDate={"2028-07-10T00:00:00"} />
                </div>

                <div className="ml-[125px] w-full">
                    <div className="absolute top-0 h-full w-[48%]">
                        <SliderPhoto />
                    </div>
                </div>
            </div>
        </section>
    )
}
