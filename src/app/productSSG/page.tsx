// app/productSSG/page.tsx
import ProductList from './../productISR/ProductList';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default async function ProductSSGPage() {
  const res = await fetch('https://fakestoreapi.com/products');

  if (!res.ok) throw new Error('Failed to fetch');

  const products: IProduct[] = await res.json();

  return <ProductList products={products.slice(0, 6)} />;
}
