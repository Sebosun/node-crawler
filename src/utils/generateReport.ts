export function genReport(item: Record<string, number>) {
  const sortedKeys = Object.keys(item).sort((a, b) => item[a] - item[b]);

  for (const key of sortedKeys) {
    console.log(`Found ${item[key]} ${key}`);
  }
}
