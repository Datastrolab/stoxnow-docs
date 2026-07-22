---
date: 2026-07-22
categories:
  - Announcements
---

# Introducing stoxnow

We're building stoxnow to make financial market data accessible to developers without the complexity of traditional data providers.

<!-- more -->

Most financial data APIs are built for institutions — expensive, over-engineered, and painful to integrate. stoxnow is different: a clean Python client that gets you from zero to a DataFrame of stock valuations in two lines of code.

```python
import stoxnow

client = stoxnow.Client(api_key="sk-...")
df = client.vectors(industry="Software", as_dataframe=True)
```

We're starting with valuation vectors — MC/Revenue ratios, revenue growth, EBITDA growth — across 700+ tickers. More endpoints are coming.

Stay tuned.
