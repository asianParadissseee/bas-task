# Задание - URL-Shortener API

### Установка зависимостей
```bash
npm i
```

### .env 
```dotenv
PORT=3000
REDIS_URL=redis://localhost:6379
```

### Запуск redis

```bash
npm run db
```

### Запуск
```bash
npm run dev 
```


# API
### Сократить URL
```js
POST /shorten
```

### Тело запроса:
```json
{
  "url": "https://example.com"
}
```
### Ответ:
```json
{
  "shortcode": "f3c0fd4e",
  "redirect": "http://localhost:3000/f3c0fd4e"
}
```

# Перенаправление

```
GET /:shortId
```

### Перенаправляет на оригинальный URL, соответствующий shortId.


### Пример запроса:

```js
GET /abc123
```

### Ответ:

```
Пользователь будет перенаправлен на оригинальный URL.
```
