"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Minus } from "lucide-react"

const CLOTHING = [
    {
        img: "/images/girl-1.png",
        name: "Spring Sale",
        discount: "30% off",
    },
    {
        img: "/images/girl-2.png",
        name: "Spring Sale",
        discount: "25% off",
    },
    {
        img: "/images/girl-3.png",
        name: "Spring Sale",
        discount: "20% off",
    },
    {
        img: "/images/girl-4.png",
        name: "Spring Sale",
        discount: "15% off",
    },
]

export function SliderPhoto() {
    const [api, setApi] = useState<CarouselApi>()
    const [selectedIndex, setSelectedIndex] = useState<number>(0)

    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setSelectedIndex(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
        >
            <CarouselContent className="ml-0 flex">
                {CLOTHING.map((items, i) => {
                    const isActive = i === selectedIndex
                    return (
                        <CarouselItem
                            key={i}
                            className={cn(
                                "shrink-0",
                                isActive
                                    ? "basis-[404px] h-[582px]"
                                    : "basis-[372px] h-[486px]"
                            )}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={items.img}
                                    alt={`Photo ${i + 1}`}
                                    fill
                                    className="rounded-xl object-cover w-full h-full"
                                    sizes="fill"
                                    priority={i === 0}
                                />

                                {isActive && (
                                    <div className="absolute bottom-4 left-4 bg-white text-black p-4 rounded shadow">
                                        <p className="text-base flex items-center text-neutral-700 gap-2">
                                            0{1 + i} <Minus /> {items.name}
                                        </p>

                                        <p className="text-[28px] font-medium text-neutral-700">
                                            {items.discount}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>

            <CarouselPrevious className="-left-35 top-140 -translate-y-1/2 w-12 h-12 rounded-full text-black z-10" />
            <CarouselNext className="-left-20 top-140 -translate-y-1/2 w-12 h-12 rounded-full text-black z-10" />

            <div className="absolute top-138 left-0 right-0 flex">
                <div className="min-w-[420px]"></div>
                <div className="flex items-center gap-2">
                    {CLOTHING.map((_, i) =>
                        selectedIndex === i ? (
                            <div
                                key={i}
                                className="relative w-[27px] h-[27px] flex items-center justify-center"
                            >
                                <div className="absolute inset-0 rounded-full border border-black" />
                                <div className="w-[11px] h-[11px] bg-black rounded-full z-10" />
                            </div>
                        ) : (
                            <div
                                key={i}
                                className="w-[11px] h-[11px] bg-[#B6B6B6] rounded-full"
                            />
                        )
                    )}
                </div>
            </div>
        </Carousel>
    )
}
