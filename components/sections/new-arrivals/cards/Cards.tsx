import { ProductCard } from "./ProductCard"

export function Cards() {
    return (
        <div className="">
            {/* Контейнер для адаптивного розміщення карток */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Картка з вашого прикладу */}
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1594618765183-99e721d15446?q=80&w=1964&auto=format&fit=crop"
            title="Shiny Dress"
            brand="Al Karam" // Додано бренд
            rating={4.2}
            reviews="(4.1k)"
            price="$95.50"
            statusText="Almost Sold Out"
          />

          {/* Інші приклади карток */}
          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2080&auto=format&fit=crop"
            title="Elegant Heels"
            brand="ZARA"
            rating={4.9}
            reviews="(12.7k)"
            price="$120.00"
            statusText="In Stock"
            statusColor="text-green-600"
          />

          <ProductCard
            imageUrl="https://images.unsplash.com/photo-1620799140408-edc6d5f96333?q=80&w=1972&auto=format&fit=crop"
            title="Cozy Hoodie"
            brand="PULL&BEAR"
            rating={4.5}
            reviews="(7.8k)"
            price="$45.00"
            statusText="New Arrival"
            statusColor="text-blue-500"
          />

        </div>
        </div>
    )
}
