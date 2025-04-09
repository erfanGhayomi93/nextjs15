'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductList({ products }: { products: IProduct[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <Card key={product.id} className="flex flex-col justify-between">
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            {/* <img src={product.image} alt={product.title} className="h-40 object-contain mb-2" /> */}
            <p className="text-sm text-gray-600 mb-2">{product.description.slice(0, 13)}...</p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-bold">${product.price}</span>
              <Button>Add to Cart</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
