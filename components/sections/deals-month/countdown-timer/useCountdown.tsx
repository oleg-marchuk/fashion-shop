import { useState, useEffect } from "react"

export const useCountdown = (targetDate: string) => {
    const targetTime = new Date(targetDate).getTime()
    const [timeRemaining, setTimeRemaining] = useState(0)

    useEffect(() => {
        if (typeof window === "undefined" || !targetDate) return

        const updateTime = () => {
            const now = new Date().getTime()
            const difference = targetTime - now
            setTimeRemaining(difference > 0 ? difference : 0)
        }

        const interval = setInterval(updateTime, 1000)
        updateTime()

        return () => clearInterval(interval)
    }, [targetTime, targetDate])

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000)
    const completed = timeRemaining === 0

    return { days, hours, minutes, seconds, completed }
}
