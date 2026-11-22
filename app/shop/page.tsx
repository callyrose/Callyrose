import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ShopPage() {
  return (
    <main className="simple-page">
      <header className="simple-header"><Link href="/" className="brand"><span className="brand-symbol">C</span><span className="brand-word">CALLY<span>ROSE</span></span></Link><Link href="/" className="back-link"><ArrowLeft size={15}/> Back home</Link></header>
      <section className="simple-hero"><p className="eyebrow"><span/> THE CALLYROSE COLLECTION</p><h1>Make room for<br/><em>better living.</em></h1><p>Explore bedroom comfort and home essentials selected for the way you live.</p></section>
      <section className="shop-empty"><div className="empty-mark">✳</div><h2>Our collection is being prepared.</h2><p>We're setting up the verified CALLYROSE catalogue. Product models, photographs, sizes, prices and availability will be shown here once confirmed by the team.</p><Link href="/" className="button button-dark">Return to homepage <ArrowUpRight size={15}/></Link></section>
    </main>
  );
}