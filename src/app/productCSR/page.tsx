'use client';


import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';



// Fake API function
async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default function StorePage() {
    
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  if (isLoading) return <p className="p-4">Loading products...</p>;
  if (isError) return <p className="p-4 text-red-500">Error loading products</p>;
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products
      .slice(0, 6) // Limit to 6 products for the demo
      .map((product : IProduct) => (
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
