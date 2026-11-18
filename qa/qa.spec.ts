import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs";
import path from "node:path";

const pages = [
  "/",
  "/services",
  "/shop",
  "/contact",
  "/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs-1",
  "/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs",
  "/product-page/urea-plastic-blast-media-5-lbs-1",
  "/product-page/urea-plastic-blast-media-5-lbs",
  "/product-page/aluminum-oxide-8-lbs-box",
  "/product-page/aluminum-oxide-blast-media-12-lbs",
  "/product-page/aluminum-oxide-50-lbs",
  "/product-page/glass-beads-blast-media-10-lbs",
  "/product-page/glass-beads-blast-media-40-lbs",
  "/product-page/walnut-shells-blast-media-5-lbs",
];

const widths = [375, 390, 768, 1440];
const shotDir = "/agent/repos/wildcard-webstack-ryan-industrial-mineral-supply/qa/screenshots";

function slug(urlPath: string) {
  if (urlPath === "/") return "home";
  return urlPath.replace(/^\//, "").replace(/\//g, "-");
}

async function overflowReport(page: Page) {
  return page.evaluate(() => {
    const vw = window.innerWidth;
    const doc = document.documentElement;
    const problems: string[] = [];
    if (doc.scrollWidth > vw + 1) problems.push(`document scrollWidth ${doc.scrollWidth} > ${vw}`);
    const nodes = document.body.querySelectorAll("*");
    for (const el of nodes) {
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") continue;
      const rect = el.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) continue;
      if (rect.right > vw + 1) {
        const id = el.id ? `#${el.id}` : "";
        const cls = typeof el.className === "string" ? el.className.split(/\s+/).slice(0, 3).join(".") : "";
        problems.push(`${el.tagName}${id}${cls ? "." + cls : ""} right=${Math.round(rect.right)}`);
        if (problems.length > 6) break;
      }
    }
    return problems;
  });
}

async function checkNav(page: Page, width: number) {
  const services = page.getByRole("link", { name: "Services", exact: true });
  if (width === 375 || width === 390) {
    const button = page.getByRole("button", { name: "Menu" });
    await expect(services, "links hidden before open").toBeHidden({ timeout: 3_000 });
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await button.click();
    await expect(services, "links visible after open").toBeVisible();
    await expect(button).toHaveAttribute("aria-expanded", "true");
    const box = await services.boundingBox();
    expect(box && box.height >= 44, "link target at least 44px").toBeTruthy();
    await services.click({ trial: true });
    await button.click();
    await expect(services, "links hidden after close").toBeHidden();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  }
  if (width === 1440) {
    await expect(services, "desktop links visible").toBeVisible();
  }
}

for (const scheme of ["light", "dark"] as const) {
  test.describe(scheme, () => {
    test.use({ colorScheme: scheme });

    for (const width of widths) {
      test(`${width}px`, async ({ page }) => {
        fs.mkdirSync(shotDir, { recursive: true });
        await page.setViewportSize({ width, height: 800 });
        const failures: string[] = [];
        const consoleErrors: string[] = [];
        page.on("pageerror", (error) => consoleErrors.push(`pageerror ${error.message}`));
        page.on("console", (msg) => {
          if (msg.type() === "error") consoleErrors.push(msg.text());
        });

        for (const urlPath of pages) {
          consoleErrors.length = 0;
          const response = await page.goto(urlPath, { waitUntil: "load" });
          if (!response || response.status() >= 400) {
            failures.push(`${urlPath} status ${response?.status()}`);
            continue;
          }
          await page.screenshot({
            path: path.join(shotDir, `${slug(urlPath)}-${width}-${scheme}.jpeg`),
            fullPage: true,
            type: "jpeg",
            quality: 45,
          });

          const overflow = await overflowReport(page);
          if (overflow.length) failures.push(`${urlPath} overflow: ${overflow.join(" | ")}`);

          const axe = await new AxeBuilder({ page }).withRules(["color-contrast"]).analyze();
          if (axe.violations.length) {
            const detail = axe.violations
              .flatMap((v) => v.nodes.slice(0, 3).map((n) => n.html.slice(0, 140)))
              .join(" || ");
            failures.push(`${urlPath} contrast: ${detail}`);
          }

          try {
            await checkNav(page, width);
          } catch (error) {
            failures.push(`${urlPath} nav: ${error instanceof Error ? error.message.split("\n")[0] : error}`);
          }

          if (consoleErrors.length) {
            failures.push(`${urlPath} console: ${consoleErrors.slice(0, 3).join(" || ")}`);
          }
        }

        expect(failures, failures.join("\n")).toEqual([]);
      });
    }
  });
}
