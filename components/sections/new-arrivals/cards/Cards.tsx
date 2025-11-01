import { ProductCard } from "./ProductCard"

export function Cards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12">
            <ProductCard
                imageUrl="/images/gc1.png"
                title="Shiny Dress"
                brand="Al Karam"
                rating={4.2}
                reviews="(4.1k)"
                price="$95.50"
                statusText="Almost Sold Out"
            />
            <ProductCard
                imageUrl="/images/gc2.png"
                title="Elegant Heels"
                brand="ZARA"
                rating={4.9}
                reviews="(12.7k)"
                price="$120.00"
                statusText="In Stock"
                statusColor="text-green-600"
            />

            <ProductCard
                imageUrl="/images/gc3.png"
                title="Cozy Hoodie"
                brand="PULL&BEAR"
                rating={4.5}
                reviews="(7.8k)"
                price="$45.00"
                statusText="New Arrival"
                statusColor="text-blue-500"
            />
            <ProductCard
                imageUrl="/images/gc4.png"
                title="Shiny Dress"
                brand="Al Karam"
                rating={4.2}
                reviews="(4.1k)"
                price="$95.50"
                statusText="Almost Sold Out"
            />
            <ProductCard
                imageUrl="/images/gc5.png"
                title="Elegant Heels"
                brand="ZARA"
                rating={4.9}
                reviews="(12.7k)"
                price="$120.00"
                statusText="In Stock"
                statusColor="text-green-600"
            />

            <ProductCard
                imageUrl="/images/gc6.png"
                title="Cozy Hoodie"
                brand="PULL&BEAR"
                rating={4.5}
                reviews="(7.8k)"
                price="$45.00"
                statusText="New Arrival"
                statusColor="text-blue-500"
            />
        </div>
    )
}
