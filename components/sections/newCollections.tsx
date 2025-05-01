import Image from "next/image"

export function NewCollections() {
    return (
        <section className="flex justify-between mx-auto max-w-[1280px] my-8">
            <Image
                src="/images/left_man.png"
                alt="left man"
                width={392}
                height={756}
                className="rounded-lg object-cover"
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
                    <h2 className="text-[96px] font-medium uppercase tracking-tight text-neutral-600">
                        ULTIMATE
                    </h2>

                    <h1 className="text-[179px] font-extrabold uppercase leading-none text-white [-webkit-text-stroke:_2px_#4B5563] md:[-webkit-text-stroke:_3px_#4B5563]">
                        SALE
                    </h1>

                    <p className="text-[20px] text-muted-foreground tracking-widest uppercase mb-6">
                        New Collection
                    </p>

                    <button className="bg-black text-white px-6 py-3 rounded-md transition">
                        SHOP NOW
                    </button>
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
                src="/images/right_man.png"
                alt="right man"
                width={392}
                height={756}
                className="rounded-lg object-cover"
            />
        </section>
    )
}
