import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div>Landing Page</div>
      <div>
        <Link href={"/products"}>PRODUCTS</Link>
      </div>
    </>
  );
}
