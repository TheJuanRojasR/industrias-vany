export function withBase(path = "/"): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  if (/^(https?:|mailto:|tel:|#)/.test(path)) {
    return path;
  }

  if (path === "/") {
    return base;
  }

  return `${base}${path.replace(/^\//, "")}`;
}
