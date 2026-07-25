export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid var(--border)' }} className="px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight" style={{ color: 'var(--purple-light)' }}>stoxnow</span>
        <div className="flex items-center gap-8 text-sm" style={{ color: 'var(--muted)' }}>
          <a href="/docs" className="hover:text-white transition-colors">Docs</a>
          <a href="/blog" className="hover:text-white transition-colors">Blog</a>
          <a href="https://github.com/Datastrolab/stoxnow" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="px-4 py-1.5 rounded text-white text-sm transition-colors"
            style={{ background: 'var(--purple)' }}>
            Get API key
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-4 text-sm font-mono px-3 py-1 rounded-full inline-block"
          style={{ background: '#1a0a2e', color: 'var(--purple-light)', border: '1px solid #3b1f6e' }}>
          pip install stoxnow
        </div>

        <h1 className="text-5xl font-bold tracking-tight mb-6 max-w-2xl leading-tight">
          Financial data for{' '}
          <span style={{ color: 'var(--purple-light)' }}>developers</span>
        </h1>

        <p className="text-lg mb-10 max-w-xl" style={{ color: 'var(--muted)' }}>
          Clean, normalized financial market data via a simple Python API.
          Valuation metrics, revenue growth, and market cap time-series for 700+ tickers.
        </p>

        {/* Code block */}
        <div className="w-full max-w-xl text-left rounded-lg overflow-hidden mb-10"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid var(--border)' }}>
            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
          </div>
          <pre className="px-5 py-4 text-sm leading-relaxed overflow-x-auto">
            <code>
              <span style={{ color: '#a78bfa' }}>import</span>
              <span style={{ color: '#e5e5e5' }}> stoxnow{'\n\n'}</span>
              <span style={{ color: '#555' }}># Connect{'\n'}</span>
              <span style={{ color: '#e5e5e5' }}>client = stoxnow.</span>
              <span style={{ color: '#a78bfa' }}>Client</span>
              <span style={{ color: '#e5e5e5' }}>(api_key=</span>
              <span style={{ color: '#86efac' }}>"sk-..."</span>
              <span style={{ color: '#e5e5e5' }}>){'\n\n'}</span>
              <span style={{ color: '#555' }}># Get valuation data as a DataFrame{'\n'}</span>
              <span style={{ color: '#e5e5e5' }}>df = client.</span>
              <span style={{ color: '#a78bfa' }}>vectors</span>
              <span style={{ color: '#e5e5e5' }}>(industry=</span>
              <span style={{ color: '#86efac' }}>"Software"</span>
              <span style={{ color: '#e5e5e5' }}>, as_dataframe=</span>
              <span style={{ color: '#f97316' }}>True</span>
              <span style={{ color: '#e5e5e5' }}>){'\n'}</span>
              <span style={{ color: '#e5e5e5' }}>df.sort_values(</span>
              <span style={{ color: '#86efac' }}>"x_cur"</span>
              <span style={{ color: '#e5e5e5' }}>).head(</span>
              <span style={{ color: '#f97316' }}>10</span>
              <span style={{ color: '#e5e5e5' }}>)</span>
            </code>
          </pre>
        </div>

        <div className="flex items-center gap-4">
          <a href="/docs" className="px-6 py-2.5 rounded font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--purple)' }}>
            Read the docs
          </a>
          <a href="https://github.com/Datastrolab/stoxnow" target="_blank"
            className="px-6 py-2.5 rounded font-medium transition-colors hover:text-white"
            style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}>
            View on GitHub
          </a>
        </div>
      </main>

      {/* Features */}
      <section className="px-6 py-20 max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Valuation metrics', desc: 'MC/Revenue ratios current and historical. Spot cheap and expensive tickers at a glance.' },
          { title: 'Revenue growth', desc: 'YoY revenue, EBITDA and net income growth across 700+ tickers, updated daily.' },
          { title: 'Time-series data', desc: 'Full market cap history and quarterly TTM financials for every ticker in the universe.' },
        ].map(({ title, desc }) => (
          <div key={title} className="rounded-lg p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h3 className="font-semibold mb-2" style={{ color: 'var(--purple-light)' }}>{title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 text-center text-xs" style={{ color: 'var(--muted)', borderTop: '1px solid var(--border)' }}>
        © {new Date().getFullYear()} Datastrolab ·{' '}
        <a href="https://github.com/Datastrolab/stoxnow" target="_blank" className="hover:text-white transition-colors">GitHub</a>
      </footer>

    </div>
  );
}
