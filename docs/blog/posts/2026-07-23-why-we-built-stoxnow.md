---
date: 2026-07-23
categories:
  - Engineering
---

# Why we built stoxnow

Most financial data APIs are built for institutions. They're expensive, over-engineered, and painful to integrate. We built stoxnow because we wanted something different.

<!-- more -->

## The problem

As a developer, getting clean financial data shouldn't require a $500/month contract, a sales call, or parsing a 200-page API spec. Yet that's the reality for most data providers.

The few affordable alternatives either have poor data quality, aggressive rate limits, or return data in formats that require significant cleanup before they're usable.

## What we did differently

stoxnow is built on top of a ClickHouse database that processes and normalizes data from multiple sources. The result is a clean, consistent API that returns exactly what you need — no cleaning required.

```python
import stoxnow

client = stoxnow.Client(api_key="sk-...")
df = client.vectors(industry="Software", as_dataframe=True)

# That's it. Clean data, ready to use.
print(df.sort_values("x_cur").head(10))
```

## What's next

We're starting with valuation vectors — MC/Revenue ratios and revenue growth across 700+ tickers. Over the coming months we'll be adding:

- Price and volume history
- Earnings surprises
- Sector and industry classifications
- Momentum signals

If there's data you'd like to see, open an issue on [GitHub](https://github.com/Datastrolab/stoxnow).
