"use client"
import React, { useEffect, useState } from "react"
import Countdown, { CountdownRenderProps } from "react-countdown"
import { Number } from "./Number"

interface CountdownTimerProps {
    targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const renderer = ({
        days,
        hours,
        minutes,
        seconds,
        completed,
    }: CountdownRenderProps) => {
        if (completed) {
            return <span>The promotion is over!</span>
        }
        return (
            <div className="flex gap-7.5">
                <Number number={days.toString().padStart(2, "0")} text="Days" />
                <Number number={hours.toString().padStart(2, "0")} text="Hr" />
                <Number
                    number={minutes.toString().padStart(2, "0")}
                    text="Mins"
                />
                <Number
                    number={seconds.toString().padStart(2, "0")}
                    text="Sec"
                />
            </div>
        )
    }

    return isClient ? (
        <Countdown date={targetDate} renderer={renderer} />
    ) : (
        <div className="h-[60px] bg-gray-900 rounded-lg" aria-hidden="true" />
    )
}
