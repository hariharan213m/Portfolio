const fs = require("fs");
const path = require("path");
const root = process.cwd();
const pkg = JSON.parse(
  fs.readFileSync(path.join(root, "package.json"), "utf8"),
);
const deps = Object.assign(
  {},
  pkg.dependencies || {},
  pkg.devDependencies || {},
);
const files = [];
const walk = (dir) => {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".git") continue;
      walk(full);
    } else if (
      /\.(js|jsx|ts|tsx|css|json|html|md)$/.test(name) ||
      name === "vite.config.js"
    ) {
      files.push(full);
    }
  }
};
walk(root);
const text = files.map((f) => fs.readFileSync(f, "utf8")).join("\n");
const report = [];
for (const dep of Object.keys(deps)) {
  const escaped = dep.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&");
  const regex = new RegExp(escaped, "g");
  const count = (text.match(regex) || []).length;
  report.push({ dep, count });
}
report
  .sort((a, b) => a.count - b.count)
  .forEach((r) => console.log(`${r.dep}: ${r.count}`));
