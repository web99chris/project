# API

- endpoint: `https://sta-api.17app.co/api`

## POST `/api/v1/leaderboards/mktevent`

### Request body

| name     | type   | optional | note                              |
| -------- | ------ | -------- | --------------------------------- |
| `type`   | string |          | leaderboard identity              |
| `count`  | number |          | limit of amount of responded data |
| `cursor` | string | ✓        | specify part of data              |

---

### Response

| name                          | type   | note                                                                                                              |
| ----------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------- |
| `type`                        | string |
| `nextCursor`                  | string |
| `data`                        | array  |
| `data[].rank`                 | number |
| `data[].score`                | number |
| `data[].userInfo`             | object |
| `data[].userInfo.displayName` | string | user display name                                                                                                 |
| `data[].userInfo.name`        | string |
| `data[].userInfo.openID`      | string |
| `data[].userInfo.picture`     | string | user avatar filename, file is host under akamaized. e.q `https://assets-17app.akamaized.net/THUMBNAIL_${picture}` |
| `data[].userInfo.region`      | string | possible value: `TW`, `JP`, `HK`, `MY`, `US`                                                                      |
| `data[].userInfo.userID`      | string | user uuid                                                                                                         |

---

### Example

```typescript
function fetchAll(type: string, limit = 1000, cursor = ""): LeaderboardItem[] {
  const url = `${ENDPOINT}/api/v1/leaderboards/mktevent`;

  const body = { type, count: limit, cursot };

  const res = await axios.post(url, body);

  const { nextCursor, data } = res.data;

  if (nextCursor) {
    return [...data, ...(await fetchAll(type, limit, nextCursor))];
  } else {
    return data;
  }
}
```
