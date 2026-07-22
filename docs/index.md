# stoxnow

**Financial market data for developers — in two lines of Python.**

```bash
pip install stoxnow
```

```python
import stoxnow

client = stoxnow.Client(api_key="sk-...")
df = client.vectors(industry="Software", as_dataframe=True)
```

## What is stoxnow?

stoxnow is a Python client for the stoxnow API, giving developers programmatic access to financial market data including valuation metrics, revenue growth, and market cap time-series.

## Features

- Valuation vectors (MC/Revenue) across 700+ tickers
- Revenue, EBITDA and net income growth (YoY, TTM)
- Market cap time-series and quarterly financials
- Optional pandas DataFrame output
- Typed exceptions for clean error handling

## Quick links

- [Getting Started](getting-started.md)
- [API Reference](reference/client.md)
- [GitHub](https://github.com/Datastrolab/stoxnow)
- [PyPI](https://pypi.org/project/stoxnow)
