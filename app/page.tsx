export default function Home() {
  return (
    <main className="root">
      {/* NAV */}
      <nav>
        <span className="logo">stouch</span>
        <div className="nav-links">
          <a href="#">Produk</a>
          <a href="#">Harga</a>
          <a href="#">Developer</a>
        </div>
        <div style={{ width: 80 }} />
      </nav>

      {/* HERO */}
      <section className="hero">
        <p className="eyebrow">Platform Pembayaran Digital</p>
        <h1>Satu platform<br />untuk semua<br /><em>pembayaran.</em></h1>
        <p className="sub">Terima transaksi dari seluruh Indonesia.<br />Cepat, aman, dan siap dalam menit.</p>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .root {
          font-family: 'DM Sans', sans-serif;
          background: #f5f5f7;
          color: #1d1d1f;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 48px;
          height: 52px;
          background: rgba(245,245,247,0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,0,0,0.08);
          flex-shrink: 0;
        }
        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          letter-spacing: -0.3px;
          width: 80px;
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-links a {
          font-size: 13px;
          color: rgba(0,0,0,0.5);
          text-decoration: none;
          transition: color .2s;
        }
        .nav-links a:hover { color: #1d1d1f; }

        .hero {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding-bottom: 48px;
          background: radial-gradient(ellipse 55% 45% at 50% 0%, rgba(0,113,227,0.07) 0%, transparent 70%);
        }
        .eyebrow {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #0071e3;
          margin-bottom: 20px;
          font-weight: 500;
        }
        h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 8vw, 88px);
          line-height: 1.0;
          letter-spacing: -3px;
          color: #1d1d1f;
          margin-bottom: 24px;
        }
        h1 em {
          font-style: italic;
          color: #0071e3;
        }
        .sub {
          font-size: 17px;
          color: rgba(0,0,0,0.4);
          line-height: 1.7;
          font-weight: 300;
        }

        @media (max-width: 640px) {
          nav { padding: 0 20px; }
          .nav-links { display: none; }
          h1 { letter-spacing: -2px; }
        }
      `}</style>
    </main>
  );
}