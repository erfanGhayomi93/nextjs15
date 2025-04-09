// app/productSSR/page.tsx
import ProductList from './../productISR/ProductList';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default async function ProductSSRPage() {
  console.log('Fetching fresh data (SSR)...');

  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', // SSR → always fetch fresh data
  });

  if (!res.ok) throw new Error('Failed to fetch');

  const products: IProduct[] = await res.json();

  return <ProductList products={products.slice(0, 6)} />;
}
