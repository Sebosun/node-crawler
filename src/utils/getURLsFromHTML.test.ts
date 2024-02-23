import { describe, expect, test } from "vitest";
import { getURLsFromHTML } from "./getURLsFromHTML";

test("returns abs links", () => {
  const baseAnchorTag = `<a href="https://boot.dev">Learn Backend Development</a>`;
  const links = ["https://boot.dev/"];
  expect(getURLsFromHTML(baseAnchorTag, "https://boot.dev")).toStrictEqual(
    links,
  );
});

test("returns abs links", () => {
  const baseAnchorTag = `<a href="https://boot.dev/dev">Learn Backend Development</a>`;
  const links = ["https://boot.dev/dev"];
  expect(getURLsFromHTML(baseAnchorTag, "https://boot.dev")).toStrictEqual(
    links,
  );
});

test("returns multiple links", () => {
  const baseAnchorTag = `
  <a href="https://boot.dev/dev">Learn Backend Development</a>
  <a href="https://boot.dev/dev/kiev">Learn Backend Development</a>
  <a href="https://boot.dev/dev/lew">Learn Backend Development</a>
  <a href="https://boot.dev/dev/ref">Learn Backend Development</a>
`;
  const links = [
    "https://boot.dev/dev",
    "https://boot.dev/dev/kiev",
    "https://boot.dev/dev/lew",
    "https://boot.dev/dev/ref",
  ];
  expect(getURLsFromHTML(baseAnchorTag, "https://boot.dev")).toStrictEqual(
    links,
  );
});
