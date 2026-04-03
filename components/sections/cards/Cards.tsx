import { CardsToolbar } from "./cards-toolbar"
import { CardContainer as Card } from "./card"
import { getProducts } from "@/services"

export async function Cards() {
    const products = await getProducts({})
    
    return (
        <div>
            <CardsToolbar />
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    )
}
