import { normalizeURL } from "./normalizeURL";
import { getURLsFromHTML } from "./getURLsFromHTML";

let currentCount = 0;
export async function crawlPage(
  baseURL: string,
  currentURL: string,
  pages: Record<string, any>,
) {
  const baseURLObj = new URL(baseURL);
  const currentURLObj = new URL(currentURL);
  const baseURLNorm = normalizeURL(baseURL);
  const curURLNorm = normalizeURL(currentURL);

  if (baseURLObj.hostname != currentURLObj.hostname) {
    console.log("Different hostnames, skipping", currentURL);
    return pages;
  }

  if (pages?.[curURLNorm] >= 0) {
    console.log("Already visited", currentURL);
    pages[curURLNorm] += 1;
    return pages;
  }

  pages[curURLNorm] = curURLNorm !== baseURLNorm ? 1 : 0;

  try {
    console.log("Fetching", currentURL);
    currentCount += 1;
    console.log("current count", currentCount);
    const page = await fetch(currentURL);
    if (!page.ok) throw new Error("Page couldnt be fetched");
    const contentType = page.headers.get("Content-Type");
    if (!contentType?.includes("text/html")) {
      return pages;
    }

    const pageBody = await page.text();
    const urls = getURLsFromHTML(pageBody, baseURL);
    for (const url of urls) {
      pages = await crawlPage(baseURL, url, pages);
    }
  } catch (e) {
    console.error("Error fetching", currentURL, e);
  }

  return pages;
}
