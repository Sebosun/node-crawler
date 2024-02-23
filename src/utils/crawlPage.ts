export async function crawlPage(url: string) {
  const page = await fetch(url);
  if (!page.ok) throw new Error("Page couldnt be fetched");
  const contentType = page.headers.get("Content-Type");
  if (!contentType?.includes("text/html")) {
    throw new Error("Couldn't find html page on this endpoint");
  }

  const pageBody = await page.text();
  return pageBody;
}
