import Image from "next/image"
import ButtonShopNow from "./ButtonShopNow"

export function NewCollections() {
    return (
        <section className="my-8 mx-auto max-w-7xl">
            <div className="flex justify-between">
                <Image
                    src="/images/left_man.PNG"
                    alt="left man"
                    width={392}
                    height={756}
                    className="rounded-lg object-cover"
                    priority
                />
                <div className="flex flex-col justify-between">
                    <Image
                        src="/images/top_girls.png"
                        alt="top girls"
                        width={426}
                        height={150}
                        className="rounded-lg object-cover"
                    />
                    <div className="text-center flex flex-col items-center">
                        
                        <h1 className="text-center">
                            <span className="block text-[96px] font-medium text-neutral-600 uppercase tracking-tight">
                                ULTIMATE
                            </span>
                            <span className="block text-[179px] text-white uppercase leading-none [-webkit-text-stroke:2px_#4B5563] md:[-webkit-text-stroke:3px_#4B5563] font-extrabold">
                                SALE
                            </span>
                        </h1>

                        <p className="text-[20px] text-muted-foreground tracking-widest uppercase mb-6">
                            New Collection
                        </p>

                        <ButtonShopNow />
                    </div>
                    <Image
                        src="/images/bottom_girls.png"
                        alt="bottom girls"
                        width={426}
                        height={150}
                        className="rounded-lg object-cover"
                    />
                </div>
                <Image
                    src="/images/right_man.PNG"
                    alt="right man"
                    width={392}
                    height={756}
                    className="rounded-lg object-cover"
                    priority
                />
            </div>
            <div className="flex justify-between items-center my-20">
                <Image
                    src="/images/logo-1.png"
                    alt="logo-1"
                    width={196}
                    height={33}
                    className="h-[33px] w-[196px] object-contain"
                />
                <Image
                    src="/images/logo-2.png"
                    alt="logo-2"
                    width={196}
                    height={25}
                    className="h-[25px] w-[196px] object-contain"
                />
                <Image
                    src="/images/logo-3.png"
                    alt="logo-3"
                    width={196}
                    height={32}
                    className="h-8 w-[196px] object-contain"
                />
                <Image
                    src="/images/logo-4.png"
                    alt="logo-4"
                    width={196}
                    height={33}
                    className="h-[33px] w-[196px] object-contain"
                />
                <Image
                    src="/images/logo-5.png"
                    alt="logo-5"
                    width={184}
                    height={27}
                    className="h-[27px] w-[184px] object-contain"
                />
            </div>
        </section>
    )
}
