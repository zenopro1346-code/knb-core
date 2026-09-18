export default function Home() {
  return (
    <main
      style={{
        fontFamily: 'sans-serif',
        maxWidth: 700,
        margin: '60px auto',
      }}
    >
      <h1>KNB Core</h1>
      <p>
        <strong>SANDBOX ONLY</strong> — no real money, banking, or blockchain
        settlement.
      </p>
      <h2>System status</h2>
      <p>KNB Phase 0 sandbox is running.</p>
      <p>
        API:{' '}
        <a href="http://localhost:3001/health">
          http://localhost:3001/health
        </a>
      </p>
    </main>
  );
}
