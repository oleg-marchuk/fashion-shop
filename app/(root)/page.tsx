import { NewCollections } from "@/components/sections"
import { DealsMonth } from "@/components/sections"
// import Test from "@/components/sections/test"

export default function Home() {
    return (
        <div className="relative ">
            <NewCollections />
            <DealsMonth />
            {/* <Test /> */}
            <section className="h-[400px]"></section>
        </div>
    )
}
