import { Button } from "@/components/ui"

export function Buttons() {
    return (
        <div className="flex gap-[30px]">
            <Button className="w-[207px]" size="sm" variant="ghost">Men`s Fashion</Button>
            <Button className="w-[207px]" size="sm" variant="ghost">Women`s Fashion</Button>
            <Button className="w-[207px]" size="sm">Women Accessories</Button>
            <Button className="w-[207px]" size="sm" variant="ghost">Men Accessories</Button>
            <Button className="w-[207px]" size="sm" variant="ghost">Discount Deals</Button>
        </div>
    )
}
