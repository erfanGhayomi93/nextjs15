// app/productServer/page.tsx
import ProductList from './ProductList';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default async function ProductServerPage() {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 }, // ISR
  });

  if (!res.ok) throw new Error('Failed to fetch');

  const products: IProduct[] = await res.json();

  return <ProductList products={products.slice(0, 6)} />;
}
