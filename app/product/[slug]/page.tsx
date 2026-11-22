import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const readableName = decodeURIComponent(slug).replace(/[-_]/g, " ");

  return (
    <main className="simple-page">
      <header className="simple-header">
        <Link href="/" className="brand"><span className="brand-symbol">C</span><span className="brand-word">CALLY<span>ROSE</span></span></Link>
        <Link href="/shop" className="back-link"><ArrowLeft size={15}/> Back to collection</Link>
      </header>
      <section className="shop-empty">
        <ShieldCheck size={34} color="#bd7b70" strokeWidth={1.3}/>
        <p className="eyebrow" style={{justifyContent:"center",marginTop:22}}>CALLYROSE PRODUCT</p>
        <h1 style={{textTransform:"capitalize"}}>{readableName}</h1>
        <p>We are preparing the verified product information for this item. Confirmed photographs, description, available sizes, price, warranty and availability will be displayed here before ordering is enabled.</p>
        <Link href="/shop" className="button button-dark">Return to collection</Link>
      </section>
    </main>
  );
}