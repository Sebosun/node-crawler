import { JSDOM } from "jsdom";

export function getURLsFromHTML(html: string, rootUrl: string) {
  const dom = new JSDOM(html);
  const anchors = dom.window.document.querySelectorAll("a");
  const collector = [] as string[];
  anchors.forEach((anchor) => {
    try {
      const myURL = new URL(rootUrl);
      myURL.pathname = anchor.pathname;
      collector.push(myURL.href);
    } catch (e) {
      console.error(e);
    }
  });

  return collector;
}
