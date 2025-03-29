import Link from "next/link";

export default function Page() {
  return <div>
    <h1>Hello Next.js!</h1>
    <div>
      <Link href={'/blog'}>go to blog page</Link>
    </div>
  </div>
}