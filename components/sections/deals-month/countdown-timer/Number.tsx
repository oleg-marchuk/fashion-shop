interface NumberProps {
    number: string
    text: string
}

export function Number({ number, text }: NumberProps) {
    return (
        <div className="flex flex-col items-center gap-3.5">
            <div className="flex justify-center items-center w-[76px] h-[76px] text-neutral-600 rounded-xl p-2 min-w-[50px] shadow-[0_4px_14px_1px_rgba(0,0,0,0.16)]">
                <span className="font-ds-digi text-5xl">{number}</span>
            </div>
            <span className="text-2xl text-neutral-600">{text}</span>
        </div>
    )
}