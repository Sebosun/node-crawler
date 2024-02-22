export function normalizeURL(url: string) {
  let { host, pathname } = new URL(url);
  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  return host + pathname;
}
