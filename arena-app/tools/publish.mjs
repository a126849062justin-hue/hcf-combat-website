import { cp, copyFile, mkdir, readdir } from "node:fs/promises";
import { resolve } from "node:path";
const root = resolve(process.cwd(), "..");
await mkdir(resolve(root, "arena-runtime"), { recursive: true });
await cp("out/_next", resolve(root, "arena-runtime/_next"), {
  recursive: true,
});
await copyFile("out/fighters.html", resolve(root, "fighters.html"));
for (const file of await readdir("out"))
  if (file.startsWith("fighters") && file !== "fighters.html")
    await cp(resolve("out", file), resolve(root, file), { recursive: true });
console.log(
  "Published statically rendered fighters page and isolated Next runtime",
);
