import Link from "next/link";
import { ArrowLeft, UserRound } from "lucide-react";

export default function AccountPage() {
  return <main className="simple-page"><header className="simple-header"><Link href="/" className="brand"><span className="brand-symbol">C</span><span className="brand-word">CALLY<span>ROSE</span></span></Link><Link href="/" className="back-link"><ArrowLeft size={15}/> Back home</Link></header><section className="shop-empty cart-empty"><UserRound size={34}/><h1>Your CALLYROSE account.</h1><p>Sign-in, order history and saved addresses will be enabled when customer authentication is connected.</p><Link href="/shop" className="button button-dark">Explore the collection</Link></section></main>;
}