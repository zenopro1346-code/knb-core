'use client';

import { useEffect, useState } from 'react';

type Health = {
  status?: string;
  environment?: string;
  realMoney?: boolean;
  database?: string;
  cache?: string;
};

export default function Home() {
  const [health, setHealth] = useState<Health | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/health')
      .then((response) => response.json())
      .then(setHealth)
      .catch(() => setHealth({ status: 'unreachable' }));
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', maxWidth: 700, margin: '60px auto' }}>
      <h1>KNB Core</h1>
      <p>
        <b>SANDBOX ONLY</b> — no real money, banking or blockchain settlement.
      </p>

      <h2>System status</h2>
      <pre>{JSON.stringify(health, null, 2)}</pre>

      <p>
        API:{' '}
        <a href="http://localhost:3001/health">
          localhost:3001/health
        </a>
      </p>
    </main>
  );
}
