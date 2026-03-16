export default function Home() {
  return (
    <main className="root">

      {/* top bar */}
      <div className="top-bar">
        <span className="wordmark">STOUCH</span>
        <span className="issue">EST. 2025 — ID</span>
      </div>

      {/* main grid */}
      <div className="grid">

        {/* big number */}
        <div className="col-num">
          <span className="big-num">01</span>
        </div>

        {/* headline block */}
        <div className="col-main">
          <div className="kicker">Platform Pembayaran Digital</div>
          <h1>
            <span>BAYAR</span>
            <span className="outline">LEBIH</span>
            <span>CERDAS</span>
          </h1>
        </div>

        {/* right info */}
        <div className="col-info">
          <p className="desc">
            Infrastruktur pembayaran untuk bisnis Indonesia. Cepat, aman, dan siap diintegrasikan dalam menit.
          </p>
          <div className="divider-h" />
          <div className="stats">
            <div className="s"><b>99.99%</b><span>Uptime</span></div>
            <div className="s"><b>50ms</b><span>Latensi</span></div>
            <div className="s"><b>20+</b><span>Metode</span></div>
          </div>
        </div>

      </div>

      {/* bottom ticker */}
      <div className="ticker-wrap">
        <div className="ticker">
          {Array(6).fill(["QRIS", "VIRTUAL ACCOUNT", "E-WALLET", "KARTU KREDIT", "TRANSFER BANK", "REAL-TIME"]).flat().map((t, i) => (
            <span key={i} className="tick-item">{t} <span className="tick-dot">✦</span></span>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .root {
          font-family: 'DM Mono', monospace;
          background: #F2EFE8;
          color: #0D0D0D;
          height: 100vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }

        /* ── TOP BAR ── */
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 40px;
          border-bottom: 2px solid #0D0D0D;
          flex-shrink: 0;
        }
        .wordmark {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 4px;
          color: #0D0D0D;
        }
        .issue {
          font-size: 11px;
          color: rgba(13,13,13,0.35);
          letter-spacing: 2px;
        }

        /* ── MAIN GRID ── */
        .grid {
          flex: 1;
          display: grid;
          grid-template-columns: 120px 1fr 320px;
          border-bottom: 2px solid #0D0D0D;
          overflow: hidden;
        }

        /* number column */
        .col-num {
          border-right: 2px solid #0D0D0D;
          display: flex;
          align-items: flex-end;
          padding: 32px 28px;
        }
        .big-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 96px;
          line-height: 1;
          color: rgba(13,13,13,0.08);
          letter-spacing: -2px;
        }

        /* headline column */
        .col-main {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px 48px;
          position: relative;
        }
        .kicker {
          font-size: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: rgba(13,13,13,0.35);
          margin-bottom: 16px;
          animation: fadeIn 0.4s ease both;
        }
        h1 {
          display: flex;
          flex-direction: column;
          line-height: 0.88;
        }
        h1 span {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(88px, 11vw, 148px);
          letter-spacing: 2px;
          color: #0D0D0D;
          display: block;
          animation: slideIn 0.5s ease both;
        }
        h1 span:nth-child(1) { animation-delay: 0.05s; }
        h1 span:nth-child(2) { animation-delay: 0.12s; }
        h1 span:nth-child(3) { animation-delay: 0.19s; }

        h1 span.outline {
          -webkit-text-stroke: 2px #0D0D0D;
          color: transparent;
        }

        /* info column */
        .col-info {
          border-left: 2px solid #0D0D0D;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 36px 36px;
          gap: 28px;
          animation: fadeIn 0.6s 0.3s ease both;
        }
        .desc {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(13,13,13,0.55);
          font-weight: 400;
        }
        .divider-h {
          width: 100%;
          height: 1px;
          background: rgba(13,13,13,0.15);
        }
        .stats {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .s {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(13,13,13,0.1);
        }
        .s:last-child { border-bottom: none; padding-bottom: 0; }
        .s b {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 1px;
          font-weight: 400;
          color: #0D0D0D;
        }
        .s span {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(13,13,13,0.35);
        }

        /* ── TICKER ── */
        .ticker-wrap {
          height: 40px;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: #0D0D0D;
          flex-shrink: 0;
        }
        .ticker {
          display: flex;
          white-space: nowrap;
          animation: scroll 28s linear infinite;
        }
        .tick-item {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 2px;
          color: #F2EFE8;
          padding: 0 16px;
          opacity: 0.7;
        }
        .tick-dot {
          opacity: 0.3;
          margin-left: 4px;
        }

        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr; grid-template-rows: auto 1fr auto; }
          .col-num { display: none; }
          .col-main { padding: 28px 24px; }
          .col-info { border-left: none; border-top: 2px solid #0D0D0D; padding: 24px; }
          h1 span { font-size: clamp(72px, 18vw, 100px); }
        }
      `}</style>
    </main>
  );
}