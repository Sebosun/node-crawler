import { normalizeURL } from "./normalizeURL";
import { describe, expect, test } from "vitest";

describe("normalizes urls", () => {
  test("ends with slash", () => {
    const link = "https://blog.boot.dev/path/";
    const expectedResult = "blog.boot.dev/path";
    expect(normalizeURL(link)).toBe(expectedResult);
  });

  test("ends without slash", () => {
    const link = "https://blog.boot.dev/path";
    const expectedResult = "blog.boot.dev/path";
    expect(normalizeURL(link)).toBe(expectedResult);
  });

  test("https", () => {
    const link = "https://blog.boot.dev/path";
    const expectedResult = "blog.boot.dev/path";
    expect(normalizeURL(link)).toBe(expectedResult);
  });

  test("more paths", () => {
    const link = "https://blog-lol.boot.dev/path/test";
    const expectedResult = "blog-lol.boot.dev/path/test";
    expect(normalizeURL(link)).toBe(expectedResult);
  });

  test("more paths but with slash", () => {
    const link = "https://blog-lol.boot.dev/path/test/";
    const expectedResult = "blog-lol.boot.dev/path/test";
    expect(normalizeURL(link)).toBe(expectedResult);
  });

  test("query", () => {
    const link = "https://blog-lol.boot.dev/path/test?s=20";
    const expectedResult = "blog-lol.boot.dev/path/test";
    expect(normalizeURL(link)).toBe(expectedResult);
  });
});
