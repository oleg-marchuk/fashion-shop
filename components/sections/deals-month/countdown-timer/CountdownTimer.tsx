"use client"

import { useSyncExternalStore } from "react"
import { useCountdown } from "./useCountdown"
import { Number } from "./Number"

// Функція-заглушка для сервера (завжди повертає false)
const subscribe = () => () => {}
const getSnapshot = () => true
const getServerSnapshot = () => false

export function CountdownTimer({ targetDate }: { targetDate: string }) {
    const { days, hours, minutes, seconds, completed } =
        useCountdown(targetDate)

    const isMounted = useSyncExternalStore(
        subscribe,
        getSnapshot,
        getServerSnapshot,
    )

    if (!isMounted) {
        return (
            <div className="flex gap-7.5">
                <Number number="00" text="Days" />
                <Number number="00" text="Hr" />
                <Number number="00" text="Mins" />
                <Number number="00" text="Sec" />
            </div>
        )
    }

    if (completed) {
        return <span>The promotion is over!</span>
    }

    return (
        <div className="flex gap-7.5">
            <Number number={days.toString().padStart(2, "0")} text="Days" />
            <Number number={hours.toString().padStart(2, "0")} text="Hr" />
            <Number number={minutes.toString().padStart(2, "0")} text="Mins" />
            <Number number={seconds.toString().padStart(2, "0")} text="Sec" />
        </div>
    )
}
