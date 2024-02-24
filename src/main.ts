import { argv } from "process";
import { crawlPage } from "./utils/crawlPage";
import { genReport } from "./utils/generateReport";

async function main() {
  console.log(argv.length);
  if (argv.length < 3) {
    throw new Error("Missing command line arguments!");
  }
  if (argv.length != 3) {
    throw new Error("Too many command line arguments!");
  }

  const baseURL = argv[2];
  console.log("Running a script on:", baseURL);
  try {
    const pages = await crawlPage(baseURL, baseURL, {});
    genReport(pages);
  } catch (e) {
    console.error(e);
  }
}

main();
