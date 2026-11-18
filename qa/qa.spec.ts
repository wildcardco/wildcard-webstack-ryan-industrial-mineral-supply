import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pages = [
  '/',
  '/services',
  '/shop',
  '/contact',
  '/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs-1',
  '/product-page/tru-abrasives-crushed-glass-blast-media-10-lbs',
  '/product-page/urea-plastic-blast-media-5-lbs-1',
  '/product-page/urea-plastic-blast-media-5-lbs',
  '/product-page/aluminum-oxide-8-lbs-box',
  '/product-page/aluminum-oxide-blast-media-12-lbs',
  '/product-page/aluminum-oxide-50-lbs',
  '/product-page/glass-beads-blast-media-10-lbs',
  '/product-page/glass-beads-blast-media-40-lbs',
  '/product-page/walnut-shells-blast-media-5-lbs',
];

const widths = [375, 390, 768, 1440];
const schemes = ['light', 'dark'] as const;

function shotName(path: string) {
  if (path === '/') return 'home';
  return path.replace(/^\//, '').replace(/\//g, '__');
}

for (const path of pages) {
  for (const width of widths) {
    for (const scheme of schemes) {
      test(`${path} ${width} ${scheme}`, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));
        page.on('console', (message) => {
          if (message.type() === 'error') errors.push(message.text());
        });

        await page.emulateMedia({ colorScheme: scheme });
        await page.setViewportSize({ width, height: 800 });
        await page.goto(path, { waitUntil: 'load' });

        if (path === '/' || path.startsWith('/product-page')) {
          await page.getByRole('button', { name: 'Shipping cost?' }).waitFor({ timeout: 15000 });
        }
        if (path === '/shop') {
          await page.getByRole('heading', { name: 'Tru Abrasives Crushed Glass Blast Media - 10 lbs.' }).waitFor();
        }
        if (path === '/services') {
          await page.getByRole('heading', { name: 'Sandblasting', exact: true }).waitFor();
        }

        const overflow = await page.evaluate(() => {
          const vw = window.innerWidth;
          const offenders: string[] = [];
          for (const el of document.querySelectorAll('body *')) {
            const style = getComputedStyle(el);
            if (style.display === 'none' || style.visibility === 'hidden') continue;
            const rect = el.getBoundingClientRect();
            if (rect.width < 1 || rect.height < 1) continue;
            if (rect.right <= vw + 1) continue;
            let parent = el.parentElement;
            let contained = false;
            while (parent) {
              const parentStyle = getComputedStyle(parent);
              const parentRect = parent.getBoundingClientRect();
              const scrolls = parentStyle.overflowX === 'auto' || parentStyle.overflowX === 'scroll';
              if (scrolls && parentRect.left >= -1 && parentRect.right <= vw + 1) {
                contained = true;
                break;
              }
              parent = parent.parentElement;
            }
            if (!contained) {
              const cls = typeof el.className === 'string' ? el.className.slice(0, 90) : '';
              offenders.push(`${el.tagName}.${cls} right=${Math.round(rect.right)}`);
              if (offenders.length >= 8) break;
            }
          }
          return {
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: vw,
            offenders,
          };
        });

        expect(overflow.scrollWidth, overflow.offenders.join(' | ')).toBeLessThanOrEqual(overflow.innerWidth + 1);
        expect(overflow.offenders).toEqual([]);

        const axe = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
        const contrast = axe.violations.flatMap((violation) =>
          violation.nodes.slice(0, 5).map((node) => `${node.html.slice(0, 160)} :: ${node.failureSummary?.split('\n')[0] ?? ''}`),
        );
        expect(contrast).toEqual([]);

        if (width === 375 || width === 390) {
          const desktop = page.locator('[data-nav="desktop"] a');
          await expect(desktop.first()).toBeHidden();
          const mobileLinks = page.locator('[data-nav="mobile"] a');
          const toggle = page.locator('[data-nav-toggle]');
          await expect(mobileLinks.first()).toBeHidden();
          await expect(toggle).toHaveAttribute('aria-expanded', 'false');
          await toggle.click();
          await expect(toggle).toHaveAttribute('aria-expanded', 'true');
          await expect(mobileLinks.first()).toBeVisible();
          await mobileLinks.first().click({ trial: true });
          await toggle.click();
          await expect(mobileLinks.first()).toBeHidden();
          await expect(toggle).toHaveAttribute('aria-expanded', 'false');
        }

        if (width === 1440) {
          await expect(page.locator('[data-nav="desktop"] a').first()).toBeVisible();
        }

        expect(errors).toEqual([]);

        await page.screenshot({
          path: `qa/screenshots/${shotName(path)}-${width}-${scheme}.png`,
          fullPage: true,
        });
      });
    }
  }
}
