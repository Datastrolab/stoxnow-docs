# Client

## `stoxnow.Client`

```python
client = stoxnow.Client(api_key, base_url=..., timeout=30.0)
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `api_key` | `str` | required | Your stoxnow API key |
| `base_url` | `str` | `https://api.stoxnow.com` | API base URL |
| `timeout` | `float` | `30.0` | Request timeout in seconds |

---

### `client.industries()`

Returns the list of available industries.

```python
industries = client.industries()
# ['Biotech', 'Consumer', 'Software', ...]
```

**Returns:** `list[str]`

---

### `client.vectors(industry, days, as_dataframe)`

Fetch valuation vectors for all tickers.

```python
data = client.vectors(industry="Software", days=90)
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `industry` | `str \| None` | `None` | Filter by industry |
| `days` | `int` | `100` | Lookback window (1–365) |
| `as_dataframe` | `bool` | `False` | Return a pandas DataFrame |

**Returns:** `list[dict] | DataFrame`

Each record contains:

| Field | Description |
|-------|-------------|
| `ticker` | Stock ticker symbol |
| `name` | Company name |
| `industry` | Industry classification |
| `mc_cur` | Current market cap |
| `x_cur` | Current MC/TTM Revenue ratio |
| `x_past` | MC/TTM Revenue ratio N days ago |
| `rev_growth_cur` | YoY revenue growth (current, %) |
| `rev_growth_past` | YoY revenue growth (N days ago, %) |
| `ebitda_growth_cur` | YoY EBITDA growth (current, %) |
| `ni_growth_cur` | YoY net income growth (current, %) |

---

### `client.timeseries(industry, as_dataframe)`

Fetch full time-series payload per ticker (MC series + quarterly financials).

```python
data = client.timeseries(industry="Software")
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `industry` | `str \| None` | `None` | Filter by industry |
| `as_dataframe` | `bool` | `False` | Return a pandas DataFrame |

**Returns:** `list[dict] | DataFrame`

Each record includes `mc_series` (daily market cap) and `fin_series` (quarterly TTM financials) in addition to the snapshot fields above.
