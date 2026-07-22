# Getting Started

## Installation

```bash
pip install stoxnow
```

For pandas DataFrame support:

```bash
pip install stoxnow[pandas]
```

## Authentication

All API calls require an API key. Get yours at [stoxnow.com](https://stoxnow.com).

```python
import stoxnow

client = stoxnow.Client(api_key="sk-...")
```

## Your first request

```python
# List available industries
industries = client.industries()
print(industries)
# ['Biotech', 'Consumer', 'Software', ...]

# Fetch valuation vectors for all tickers
data = client.vectors()

# Filter by industry
data = client.vectors(industry="Software")

# Change the lookback window (default: 100 days)
data = client.vectors(industry="Software", days=30)
```

## Using pandas

```python
df = client.vectors(industry="Software", as_dataframe=True)
print(df.sort_values("x_cur").head(10))
```

## Context manager

The client can be used as a context manager to ensure the HTTP connection is closed:

```python
with stoxnow.Client(api_key="sk-...") as client:
    data = client.vectors()
```

## Error handling

```python
from stoxnow import AuthError, RateLimitError

try:
    data = client.vectors()
except AuthError:
    print("Invalid API key")
except RateLimitError:
    print("Slow down your requests")
```
