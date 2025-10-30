"use client"
import { Number } from "./Number"
import { useCountdown } from "./useCountdown"

interface CountdownTimerProps {
    targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const { days, hours, minutes, seconds, completed } =
        useCountdown(targetDate)

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
