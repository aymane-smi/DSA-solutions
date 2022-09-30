function lengthOfLastWord(s: string): number {
  const len: number = s
    .split(" ")
    .filter((s) => s !== "")
    .reverse()[0].length;
  return len;
}
