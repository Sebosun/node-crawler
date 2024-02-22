export function normalizeURL(url: string) {
  const { host, pathname } = new URL(url);

  return host + pathname;
}
