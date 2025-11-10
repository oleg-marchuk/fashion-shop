import {
    NewCollections,
    DealsMonth,
    NewArrivals,
    WomenCollection,
} from "@/components/sections"
// import Test from "@/components/sections/test"

export default function Home() {
    return (
        <div className="relative ">
            <NewCollections />
            <DealsMonth />
            <NewArrivals />
            <WomenCollection />
            {/* <Test /> */}
            <section className="h-[400px]"></section>
        </div>
    )
}
