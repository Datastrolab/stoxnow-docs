# Exceptions

All exceptions inherit from `stoxnow.StoxnowError`.

| Exception | HTTP status | When |
|-----------|-------------|------|
| `AuthError` | 401 | Invalid or missing API key |
| `NotFoundError` | 404 | Requested resource does not exist |
| `RateLimitError` | 429 | Too many requests |
| `ServerError` | 5xx | Unexpected server-side error |

```python
from stoxnow import AuthError, NotFoundError, RateLimitError, ServerError, StoxnowError

try:
    data = client.vectors()
except AuthError:
    print("Check your API key")
except RateLimitError:
    print("Back off and retry")
except StoxnowError as e:
    print(f"Something went wrong: {e}")
```
