"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Menu, X, Sparkles, Heart, ShieldCheck, Truck } from "lucide-react";

const collections = [
  {
    number: "01",
    name: "Mattresses",
    note: "Find a more comfortable way to end the day.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1100&q=85",
    shape: "arch"
  },
  {
    number: "02",
    name: "Bedroom furniture",
    note: "Thoughtful pieces to make your room feel like home.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1100&q=85",
    shape: "soft"
  },
  {
    number: "03",
    name: "Home comfort",
    note: "Little details that make everyday living softer.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85",
    shape: "round"
  }
];

export default function HomePage() {
  const [introVisible, setIntroVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("callyrose-intro-seen");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadySeen || reducedMotion) return;
    const timer = window.setTimeout(() => setIntroVisible(true), 250);
    const finish = window.setTimeout(() => {
      setIntroVisible(false);
      sessionStorage.setItem("callyrose-intro-seen", "yes");
    }, 5400);
    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(finish);
    };
  }, []);

  function skipIntro() {
    setIntroVisible(false);
    sessionStorage.setItem("callyrose-intro-seen", "yes");
  }

  return (
    <main>
      {introVisible && (
        <div className="intro" role="dialog" aria-label="CALLYROSE brand introduction">
          <div className="curtain curtain-left" />
          <div className="curtain curtain-right" />
          <button className="intro-skip" onClick={skipIntro}>Skip intro <ArrowUpRight size={14} /></button>
          <div className="intro-content">
            <span className="intro-sprig">❧</span>
            <p className="intro-kicker">A softer way to live</p>
            <div className="intro-wordmark" aria-label="CALLYROSE">{Array.from("CALLYROSE").map((letter, index) => <span key={index} style={{ animationDelay: `${1.05 + index * 0.17}s` }}>{letter}</span>)}</div>
            <p className="intro-motto">Live Comfortably. Sleep Beautifully.</p>
          </div>
        </div>
      )}

      <div className="announcement">A LITTLE MORE COMFORT, EVERY DAY <span>✦</span> WELCOME TO CALLYROSE</div>
      <nav className="nav-shell">
        <Link href="/" className="brand" aria-label="CALLYROSE home">
          <span className="brand-symbol">C</span>
          <span className="brand-word">CALLY<span>ROSE</span></span>
        </Link>
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <a href="#story" onClick={() => setMenuOpen(false)}>Our story</a>
          <a href="#comfort" onClick={() => setMenuOpen(false)}>The CALLYROSE feeling</a>
          <Link href="/account" onClick={() => setMenuOpen(false)}>My account</Link>
        </div>
        <div className="nav-actions">
          <Link className="nav-shop" href="/shop">Explore collection <ArrowUpRight size={14} /></Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> THE ART OF EVERYDAY COMFORT</p>
          <h1>Fall into<br /><em>comfort.</em><br />Wake up to life.</h1>
          <p className="hero-description">Make room for slower mornings, deeper rest and the little things that make a house feel like yours.</p>
          <div className="hero-buttons">
            <Link href="/shop" className="button button-dark">Discover CALLYROSE <ArrowRight size={16} /></Link>
            <a href="#story" className="text-link">Get to know us <span>↗</span></a>
          </div>
          <div className="hero-footnote"><span>01 / 03</span><i /> A HOME THAT FEELS LIKE YOU</div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame">
            <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=90" alt="Warm, calm bedroom interior with layered textures" />
          </div>
          <div className="hero-note"><span className="note-flower">✳</span><span>Make yourself<br /><em>at home.</em></span></div>
          <div className="hero-seal">REST WELL<br /><span>✦</span><br />LIVE BEAUTIFULLY</div>
        </div>
      </section>

      <div className="marquee"><div className="marquee-track">REST DEEPER <span>✦</span> LIVE SOFTER <span>✦</span> LOVE YOUR SPACE <span>✦</span> FEEL AT HOME <span>✦</span> REST DEEPER <span>✦</span> LIVE SOFTER <span>✦</span> LOVE YOUR SPACE <span>✦</span></div></div>

      <section className="section story-section" id="story">
        <div className="section-heading">
          <p className="eyebrow"><span /> A HOME IS A FEELING</p>
          <h2>Comfort is not<br />a luxury. It is <em>life.</em></h2>
        </div>
        <div className="story-copy">
          <p>At CALLYROSE, we believe the spaces around us should help us feel our best. We bring together bedroom comfort and considered home essentials to help make every day feel a little more beautiful.</p>
          <Link href="/shop" className="underlined-link">Explore the CALLYROSE world <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <section className="collection-section">
        <div className="collection-top">
          <div><p className="eyebrow"><span /> THOUGHTFULLY CONSIDERED</p><h2>Find your kind<br />of <em>comfort.</em></h2></div>
          <p>Explore the collections and discover pieces that make your everyday spaces feel more like home.</p>
        </div>
        <div className="collection-grid">
          {collections.map((item) => (
            <Link href="/shop" className={`collection-card collection-${item.shape}`} key={item.number}>
              <div className="collection-photo"><img src={item.image} alt="" loading="lazy" /><span className="collection-number">{item.number}</span><span className="collection-arrow"><ArrowUpRight size={19} /></span></div>
              <div className="collection-meta"><div><h3>{item.name}</h3><p>{item.note}</p></div><span>DISCOVER</span></div>
            </Link>
          ))}
        </div>
        <p className="catalogue-note">Product listings, exact models, prices and availability will appear here once the verified CALLYROSE catalogue is loaded.</p>
      </section>

      <section className="comfort-section" id="comfort">
        <div className="comfort-image"><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1300&q=85" alt="Soft, inviting bedroom designed for rest" loading="lazy" /></div>
        <div className="comfort-copy">
          <p className="eyebrow light"><span /> THE CALLYROSE FEELING</p>
          <h2>Come home<br />to <em>yourself.</em></h2>
          <p>A beautiful space is more than what you see. It is how you feel when you walk in, stretch out and finally let the day go.</p>
          <Link href="/shop" className="button button-light">Explore the collection <ArrowRight size={16} /></Link>
          <div className="comfort-signature">CALLYROSE <span>—</span> LIVE BEAUTIFULLY</div>
        </div>
      </section>

      <section className="promise-strip">
        <div><Heart /><span><b>Thoughtful choices</b><small>Comfort for everyday living</small></span></div>
        <div><ShieldCheck /><span><b>Helpful support</b><small>Guidance when you need it</small></span></div>
        <div><Truck /><span><b>Delivery or pickup</b><small>Fulfilment options at checkout</small></span></div>
        <div><Sparkles /><span><b>Made for your home</b><small>Discover your kind of comfort</small></span></div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <div><Link href="/" className="brand footer-brand"><span className="brand-symbol">C</span><span className="brand-word">CALLY<span>ROSE</span></span></Link><p>Live comfortably.<br />Sleep beautifully.</p></div>
          <div className="footer-column"><b>EXPLORE</b><Link href="/shop">Shop all</Link><a href="#story">Our story</a><a href="#comfort">Our promise</a></div>
          <div className="footer-column"><b>YOUR CALLYROSE</b><Link href="/account">My account</Link><Link href="/cart">Shopping bag</Link><a href="mailto:hello@callyrose.com">Contact</a></div>
          <div className="footer-note">A softer landing<br /><em>for every day.</em></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} CALLYROSE</span><span>MADE FOR THE WAY YOU LIVE</span><span>PRIVACY · TERMS</span></div>
      </footer>
    </main>
  );
}