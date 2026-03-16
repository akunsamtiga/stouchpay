import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stouch — Bayar Lebih Cerdas",
  description: "Platform pembayaran digital generasi berikutnya",
};

export default function Home() {
  return (
    <main className="stouch-root">
      {/* ── NAVBAR ── */}
      <nav className="nav">
        <span className="nav-logo">stouch</span>
        <ul className="nav-links">
          <li><a href="#">Produk</a></li>
          <li><a href="#">Harga</a></li>
          <li><a href="#">Developer</a></li>
          <li><a href="#">Tentang</a></li>
        </ul>
        <a href="#" className="nav-cta">Mulai Gratis</a>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge">✦ Payment Infrastructure untuk Indonesia</div>
        <h1 className="hero-title">
          Bayar<br />
          <em>tanpa batas.</em>
        </h1>
        <p className="hero-sub">
          Satu platform. Jutaan transaksi.<br />
          Infrastruktur pembayaran yang dibangun untuk skala.
        </p>
        <div className="hero-actions">
          <a href="#" className="btn-dark">Coba Sekarang</a>
          <a href="#" className="btn-ghost">Lihat Demo →</a>
        </div>

        {/* floating card mockup */}
        <div className="card-mockup">
          <div className="mockup-inner">
            <div className="mockup-header">
              <span className="mockup-label">Total Diterima</span>
              <span className="mockup-badge live">● Live</span>
            </div>
            <div className="mockup-amount">Rp 248.750.000</div>
            <div className="mockup-chart">
              <svg viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline
                  points="0,55 30,40 60,45 90,20 120,30 150,10 180,18 210,5 240,12 260,8"
                  stroke="url(#g1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <polygon
                  points="0,55 30,40 60,45 90,20 120,30 150,10 180,18 210,5 240,12 260,8 260,60 0,60"
                  fill="url(#g2)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="260" y2="0">
                    <stop offset="0%" stopColor="#60a5fa"/>
                    <stop offset="100%" stopColor="#a78bfa"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="60">
                    <stop offset="0%" stopColor="#818cf8"/>
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mockup-row">
              <div className="mockup-txn">
                <span className="txn-icon">↑</span>
                <span className="txn-label">Transfer Masuk</span>
                <span className="txn-amount green">+Rp 3.200.000</span>
              </div>
              <div className="mockup-txn">
                <span className="txn-icon">↓</span>
                <span className="txn-label">Pembayaran</span>
                <span className="txn-amount dim">−Rp 750.000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS / TRUST ── */}
      <section className="trust-bar">
        <p className="trust-label">Dipercaya oleh lebih dari 12.000 bisnis di Indonesia</p>
        <div className="logos">
          {["Tokopedia","Gojek","Traveloka","Bukalapak","Shopee"].map(b => (
            <span key={b} className="logo-chip">{b}</span>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="features">
        <div className="section-label">Fitur Unggulan</div>
        <h2 className="section-title">Segalanya yang kamu<br />butuhkan, sudah ada.</h2>

        <div className="feat-grid">
          <div className="feat-card feat-large">
            <div className="feat-icon-wrap blue">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
              </svg>
            </div>
            <h3>Instan & Real-time</h3>
            <p>Transaksi diproses dalam hitungan milidetik. Tidak ada delay, tidak ada antrean.</p>
            <div className="feat-stat">
              <span className="stat-num">99.99%</span>
              <span className="stat-desc">uptime SLA</span>
            </div>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap purple">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
              </svg>
            </div>
            <h3>Keamanan Berlapis</h3>
            <p>Enkripsi AES-256, 3D Secure, dan fraud detection berbasis AI.</p>
          </div>

          <div className="feat-card">
            <div className="feat-icon-wrap green">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
              </svg>
            </div>
            <h3>Semua Metode</h3>
            <p>QRIS, VA, e-wallet, kartu kredit — semuanya dalam satu integrasi.</p>
          </div>

          <div className="feat-card feat-large">
            <div className="feat-icon-wrap orange">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
              </svg>
            </div>
            <h3>Analytics Mendalam</h3>
            <p>Dashboard real-time dengan insight bisnis yang actionable. Pahami pola transaksi pelangganmu.</p>
            <div className="mini-bars">
              {[40,65,50,80,55,90,72].map((h,i) => (
                <div key={i} className="mini-bar" style={{height:`${h}%`}} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="steps-section">
        <div className="section-label">Cara Kerja</div>
        <h2 className="section-title">Integrasi dalam<br /><em>3 langkah.</em></h2>
        <div className="steps">
          {[
            { n:"01", title:"Daftar & Verifikasi", desc:"Buat akun dalam 2 menit. Verifikasi KYC langsung dari dashboard." },
            { n:"02", title:"Integrasi API", desc:"Dokumentasi lengkap, SDK tersedia untuk semua bahasa populer." },
            { n:"03", title:"Mulai Terima Bayaran", desc:"Go live dan mulai terima pembayaran dari seluruh Indonesia." },
          ].map(s => (
            <div key={s.n} className="step">
              <span className="step-num">{s.n}</span>
              <div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-section">
        {[
          { val:"Rp 2,4T+", label:"Volume Transaksi" },
          { val:"12.000+", label:"Merchant Aktif" },
          { val:"50ms", label:"Rata-rata Latensi" },
          { val:"20+", label:"Metode Pembayaran" },
        ].map(s => (
          <div key={s.val} className="stat-item">
            <span className="stat-value">{s.val}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2>Siap memulai?</h2>
        <p>Bergabung dengan ribuan bisnis yang sudah mempercayakan pembayarannya ke Stouch.</p>
        <div className="cta-actions">
          <a href="#" className="btn-white">Buat Akun Gratis</a>
          <a href="#" className="btn-ghost-white">Hubungi Sales →</a>
        </div>
        <p className="cta-note">Gratis hingga 1.000 transaksi/bulan. Tidak perlu kartu kredit.</p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <span className="footer-logo">stouch</span>
        <div className="footer-links">
          <a href="#">Privasi</a>
          <a href="#">Syarat</a>
          <a href="#">Status</a>
          <a href="#">Blog</a>
        </div>
        <span className="footer-copy">© 2025 Stouch. All rights reserved.</span>
      </footer>

      {/* ── STYLES ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .stouch-root {
          font-family: 'DM Sans', sans-serif;
          background: #000;
          color: #fff;
          overflow-x: hidden;
        }

        /* ── NAV ── */
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 48px;
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .nav-logo {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.5px;
          background: linear-gradient(90deg, #fff 40%, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: #fff; }
        .nav-cta {
          background: #fff;
          color: #000;
          padding: 9px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .nav-cta:hover { opacity: 0.85; }

        /* ── HERO ── */
        .hero {
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 24px 60px;
          position: relative;
          background: radial-gradient(ellipse 80% 60% at 50% 20%, rgba(99,102,241,0.12) 0%, transparent 70%);
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.3px;
          margin-bottom: 36px;
        }
        .hero-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(72px, 12vw, 132px);
          font-weight: 600;
          line-height: 0.92;
          letter-spacing: -4px;
          margin-bottom: 28px;
        }
        .hero-title em {
          font-style: italic;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .hero-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          max-width: 420px;
          margin-bottom: 40px;
          font-weight: 300;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          align-items: center;
          margin-bottom: 72px;
        }
        .btn-dark {
          background: #fff;
          color: #000;
          padding: 14px 28px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .btn-dark:hover { opacity: 0.85; }
        .btn-ghost {
          color: rgba(255,255,255,0.6);
          font-size: 15px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .btn-ghost:hover { color: #fff; }

        /* ── CARD MOCKUP ── */
        .card-mockup {
          width: 100%;
          max-width: 480px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
        }
        .mockup-inner { padding: 28px; }
        .mockup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .mockup-label { font-size: 12px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; }
        .mockup-badge {
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 100px;
          background: rgba(34,197,94,0.15);
          color: #4ade80;
        }
        .mockup-amount {
          font-family: 'Fraunces', serif;
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -1px;
          margin-bottom: 20px;
        }
        .mockup-chart { margin-bottom: 20px; }
        .mockup-chart svg { width: 100%; height: 60px; }
        .mockup-row { display: flex; flex-direction: column; gap: 10px; }
        .mockup-txn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
        }
        .txn-icon { font-size: 14px; color: rgba(255,255,255,0.3); }
        .txn-label { flex: 1; font-size: 13px; color: rgba(255,255,255,0.6); }
        .txn-amount { font-size: 13px; font-weight: 600; }
        .txn-amount.green { color: #4ade80; }
        .txn-amount.dim { color: rgba(255,255,255,0.4); }

        /* ── TRUST ── */
        .trust-bar {
          padding: 40px 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }
        .trust-label {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }
        .logos {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .logo-chip {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.3px;
        }

        /* ── FEATURES ── */
        .features {
          padding: 100px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }
        .section-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 56px;
        }
        .section-title em {
          font-style: italic;
          color: rgba(255,255,255,0.45);
        }
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 16px;
        }
        .feat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px;
          transition: border-color 0.2s, background 0.2s;
        }
        .feat-card:hover {
          background: rgba(255,255,255,0.055);
          border-color: rgba(255,255,255,0.14);
        }
        .feat-large { grid-column: span 2; }
        .feat-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .feat-icon-wrap.blue { background: rgba(96,165,250,0.15); color: #60a5fa; }
        .feat-icon-wrap.purple { background: rgba(167,139,250,0.15); color: #a78bfa; }
        .feat-icon-wrap.green { background: rgba(74,222,128,0.15); color: #4ade80; }
        .feat-icon-wrap.orange { background: rgba(251,191,36,0.15); color: #fbbf24; }
        .feat-card h3 {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }
        .feat-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          font-weight: 300;
        }
        .feat-stat {
          display: flex;
          flex-direction: column;
          margin-top: 24px;
        }
        .stat-num {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 600;
          letter-spacing: -2px;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stat-desc { font-size: 12px; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 1px; }
        .mini-bars {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 60px;
          margin-top: 24px;
        }
        .mini-bar {
          flex: 1;
          background: linear-gradient(to top, #fbbf24, rgba(251,191,36,0.3));
          border-radius: 4px;
          min-height: 8px;
        }

        /* ── STEPS ── */
        .steps-section {
          padding: 100px 48px;
          max-width: 1100px;
          margin: 0 auto;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .step {
          display: flex;
          gap: 40px;
          align-items: flex-start;
          padding: 36px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .step:last-child { border-bottom: none; }
        .step-num {
          font-family: 'Fraunces', serif;
          font-size: 13px;
          color: rgba(255,255,255,0.2);
          min-width: 36px;
          padding-top: 4px;
          letter-spacing: 1px;
        }
        .step h4 {
          font-family: 'Fraunces', serif;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
        }
        .step p {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          max-width: 480px;
          font-weight: 300;
        }

        /* ── STATS ── */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .stat-item {
          background: #000;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .stat-value {
          font-family: 'Fraunces', serif;
          font-size: 40px;
          font-weight: 600;
          letter-spacing: -2px;
        }
        .stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 120px 48px;
          text-align: center;
          background: radial-gradient(ellipse 70% 50% at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 70%);
        }
        .cta-section h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(48px, 7vw, 80px);
          font-weight: 600;
          letter-spacing: -3px;
          margin-bottom: 16px;
        }
        .cta-section p {
          color: rgba(255,255,255,0.45);
          font-size: 16px;
          max-width: 400px;
          margin: 0 auto 40px;
          font-weight: 300;
          line-height: 1.6;
        }
        .cta-actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }
        .btn-white {
          background: #fff;
          color: #000;
          padding: 14px 28px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .btn-white:hover { opacity: 0.85; }
        .btn-ghost-white {
          color: rgba(255,255,255,0.5);
          font-size: 15px;
          text-decoration: none;
          transition: color 0.2s;
        }
        .btn-ghost-white:hover { color: #fff; }
        .cta-note {
          font-size: 12px;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.3px;
        }

        /* ── FOOTER ── */
        .footer {
          padding: 32px 48px;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-logo {
          font-family: 'Fraunces', serif;
          font-size: 18px;
          font-weight: 600;
          color: rgba(255,255,255,0.4);
        }
        .footer-links {
          display: flex;
          gap: 24px;
        }
        .footer-links a {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: rgba(255,255,255,0.7); }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.2); }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .hero { padding: 80px 20px 60px; }
          .features, .steps-section { padding: 72px 20px; }
          .feat-grid { grid-template-columns: 1fr; }
          .feat-large { grid-column: span 1; }
          .stats-section { grid-template-columns: repeat(2, 1fr); }
          .cta-section { padding: 80px 20px; }
          .footer { flex-direction: column; gap: 16px; text-align: center; }
          .footer-links { flex-wrap: wrap; justify-content: center; }
          .trust-bar { padding: 32px 20px; }
        }
      `}</style>
    </main>
  );
}