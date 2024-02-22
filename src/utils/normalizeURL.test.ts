import { normalizeURL } from "./normalizeURL";
import { describe, expect, test } from "vitest";

describe("normalizes urls", () => {
  const expectedResult = "blog.boot.dev/path";
  test("case 1", () => {
    const link = "https://blog.boot.dev/path/";
    expect(normalizeURL(link)).toBe(expectedResult);
  });
});
