import { NewCollections, DealsMonth, NewArrivals } from "@/components/sections"
// import Test from "@/components/sections/test"

export default function Home() {
    return (
        <div className="relative ">
            <NewCollections />
            <DealsMonth />
            <NewArrivals />
            {/* <Test /> */}
            <section className="h-[400px]"></section>
        </div>
    )
}
