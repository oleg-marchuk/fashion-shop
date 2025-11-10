import { Button } from "@/components/ui"
import Image from "next/image"

export function WomenCollection() {
    return (
        <section className="my-8">
            <div className="flex justify-end">
                <Image
                    src="/images/wc1.PNG"
                    alt="woman"
                    width={722}
                    height={570}
                    className="shrink-0"
                />
                <Image
                    src="/images/rt.PNG"
                    alt="rt"
                    width={190}
                    height={570}
                    className="shrink-0"
                />
                <div className="w-[784px] bg-[#DADADA] pl-7 pr-20 flex justify-center flex-col gap-5">
                    <h3 className="text-base text-[#767676]">
                        Women Collection
                    </h3>
                    <h4 className="text-5xl text-[#484848] leading-tight">
                        Peaky Blinders
                    </h4>
                    <p className="text-base underline text-black">
                        DESCRIPTION
                    </p>
                    <p className="text-base text-[#767676]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Scelerisque duis ultrices sollicitudin aliquam sem.
                        Scelerisque duis ultrices sollicitudin. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Scelerisque
                        duis.
                    </p>
                    <div className="flex justify-center items-center gap-x-3 w-fit">
                        <p className="text-base text-[#767676]">Size:</p>
                        <div className="w-14 h-7 rounded-[10px] bg-black flex items-center justify-center">
                            <span className="text-white font-thin text-lg">
                                M
                            </span>
                        </div>
                    </div>
                    <p className="font-medium text-[28px] text-black">
                        $100.00
                    </p>
                    <div>
                        <Button size="sm">Buy Now</Button>
                    </div>
                </div>
            </div>
            <div></div>
        </section>
    )
}
