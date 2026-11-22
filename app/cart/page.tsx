import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
  return <main className="simple-page"><header className="simple-header"><Link href="/" className="brand"><span className="brand-symbol">C</span><span className="brand-word">CALLY<span>ROSE</span></span></Link><Link href="/shop" className="back-link"><ArrowLeft size={15}/> Continue shopping</Link></header><section className="shop-empty cart-empty"><ShoppingBag size={34}/><h1>Your bag is waiting.</h1><p>When you add something you love, it will appear here.</p><Link href="/shop" className="button button-dark">Explore the collection</Link></section></main>;
}