import { Buttons } from "./buttons"
import { Cards } from "./cards"

export function NewArrivals() {
    return (
        <section className="flex flex-col items-center text-center my-8 mx-auto max-w-[1280px]">
            <h4 className="text-[46px] text-neutral-700 mb-5">Deals of the month</h4>
            <p className="text-base text-neutral-500 mb-12.5 w-full max-w-[614px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
                duis ultrices sollicitudin
            </p>
            <Buttons />
            <Cards />
        </section>
    )
}
