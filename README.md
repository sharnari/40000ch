# React + TypeScript + Vite

## How to build image?

```bash
docker build -t vite-react-ts .
```

## How to run the Container?

```bash
docker run --rm -p 5173:5173 -v "$(pwd):/app" -v /app/node_modules vite-react-ts
```
