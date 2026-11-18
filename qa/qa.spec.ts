import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const pages = [
  ['home', '/'],
  ['services', '/services'],
  ['services-glass', '/services?tab=glass'],
  ['services-plastic', '/services?tab=plastic'],
  ['services-painting', '/services?tab=painting'],
  ['services-delivery', '/services?tab=delivery'],
  ['about', '/about'],
  ['gallery', '/gallery'],
  ['contact', '/contact'],
  ['shop', '/shop'],
  ['product-glass', '/shop/tru-abrasives-crushed-glass-blast-media-10-lbs'],
  ['product-urea', '/shop/urea-plastic-blast-media-5-lbs'],
  ['product-oxide', '/shop/aluminum-oxide-8-lbs-box'],
] as const;

const viewports = [
  { width: 375, height: 812 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
] as const;

const productPages = [
  ['home', '/'],
  ['shop', '/shop'],
  ['product-glass', '/shop/tru-abrasives-crushed-glass-blast-media-10-lbs'],
  ['product-urea', '/shop/urea-plastic-blast-media-5-lbs'],
  ['product-oxide', '/shop/aluminum-oxide-8-lbs-box'],
] as const;

const schemes = ['light', 'dark'] as const;

const shotDir = path.join(process.cwd(), 'qa', 'screenshots');

test.beforeAll(async () => {
  await mkdir(shotDir, { recursive: true });
});

async function assertProductLayout(page: Page, viewportWidth: number) {
  const cards = page.locator('.product-card');
  const count = await cards.count();
  const boxes = [];
  for (let i = 0; i < count; i += 1) {
    const card = cards.nth(i);
    const box = await card.boundingBox();
    expect(box, 'product card is on screen').not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(-1);
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewportWidth + 1);
    const colors = await card.evaluate((el) => {
      const body = el.querySelector('.product-card__body') as HTMLElement;
      const title = el.querySelector('h3') as HTMLElement;
      const note = el.querySelector('.product-card__note') as HTMLElement;
      const read = (node: HTMLElement) => getComputedStyle(node);
      return {
        card: read(el as HTMLElement).backgroundColor,
        body: read(body).backgroundColor,
        title: read(title).color,
        note: read(note).color,
      };
    });
    expect(colors.card).toBe('rgb(255, 255, 255)');
    expect(colors.body).toBe('rgb(255, 255, 255)');
    expect(colors.title).toBe('rgb(0, 0, 0)');
    expect(colors.note).toBe('rgb(59, 58, 58)');
    expect(box!.x).toBeGreaterThanOrEqual(8);
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewportWidth - 8);
    boxes.push(box!);
  }

  const badges = page.locator('.product-badges > span');
  const badgeCount = await badges.count();
  for (let i = 0; i < badgeCount; i += 1) {
    const badgeBox = await badges.nth(i).boundingBox();
    expect(badgeBox, 'badge is visible').not.toBeNull();
    expect(badgeBox!.height).toBeGreaterThanOrEqual(24);
    expect(badgeBox!.x + badgeBox!.width).toBeLessThanOrEqual(viewportWidth + 1);
  }

  if (viewportWidth >= 1024 && count >= 3) {
    expect(Math.abs(boxes[0].height - boxes[1].height)).toBeLessThanOrEqual(2);
    expect(Math.abs(boxes[1].height - boxes[2].height)).toBeLessThanOrEqual(2);
  }
  if (viewportWidth >= 768 && viewportWidth < 1024 && count >= 2) {
    expect(Math.abs(boxes[0].height - boxes[1].height)).toBeLessThanOrEqual(2);
  }

  const frame = page.locator('.product-frame').first();
  if ((await frame.count()) > 0) {
    const box = await frame.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewportWidth + 1);
  }
}

async function overflow(page: Page) {
  return page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    const offenders: string[] = [];
    for (const el of document.querySelectorAll('body *')) {
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      const box = el.getBoundingClientRect();
      if (box.width === 0 && box.height === 0) continue;
      if (box.width > viewport + 1 || box.right > viewport + 1) {
        const id = el.id ? `#${el.id}` : '';
        const cls = typeof el.className === 'string' ? el.className.trim().slice(0, 80) : '';
        offenders.push(`${el.tagName}${id}${cls ? `.${cls}` : ''} w=${Math.round(box.width)} right=${Math.round(box.right)}`);
        if (offenders.length >= 8) break;
      }
    }
    return {
      scrollWidth: document.documentElement.scrollWidth,
      viewport,
      offenders,
    };
  });
}

for (const scheme of schemes) {
  for (const viewport of viewports) {
    for (const [name, url] of pages) {
      test(`${scheme} ${viewport.width} ${name}`, async ({ page }) => {
        const errors: string[] = [];
        page.on('pageerror', (error) => errors.push(error.message));
        page.on('console', (message) => {
          if (message.type() === 'error') errors.push(message.text());
        });

        await page.emulateMedia({ colorScheme: scheme });
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.goto(url, { waitUntil: 'networkidle' });

        const layout = await overflow(page);
        expect(layout.scrollWidth, layout.offenders.join('\n')).toBeLessThanOrEqual(layout.viewport + 1);
        expect(layout.offenders, 'elements wider than the viewport').toEqual([]);

        const axe = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
        expect(axe.violations, JSON.stringify(axe.violations, null, 2)).toEqual([]);
        await assertProductLayout(page, viewport.width);

        if (viewport.width === 375) {
          const menu = page.locator('#site-nav');
          await expect(menu).toBeHidden();
        }

        expect(errors, 'console errors').toEqual([]);

        await page.screenshot({
          path: path.join(shotDir, `${scheme}-${viewport.width}-${name}.png`),
        });
      });
    }
  }
}

for (const scheme of schemes) {
  for (const [name, url] of productPages) {
    test(`${scheme} 390 ${name}`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });

      await page.emulateMedia({ colorScheme: scheme });
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(url, { waitUntil: 'networkidle' });

      const layout = await overflow(page);
      expect(layout.scrollWidth, layout.offenders.join('\n')).toBeLessThanOrEqual(layout.viewport + 1);
      expect(layout.offenders, 'elements wider than the viewport').toEqual([]);

      const axe = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
      expect(axe.violations, JSON.stringify(axe.violations, null, 2)).toEqual([]);
      await assertProductLayout(page, 390);

      const menu = page.locator('#site-nav');
      await expect(menu).toBeHidden();
      expect(errors, 'console errors').toEqual([]);

      await page.screenshot({
        path: path.join(shotDir, `${scheme}-390-${name}.png`),
        fullPage: name === 'shop' || name === 'home',
      });
    });
  }
}

for (const scheme of schemes) {
  test(`nav ${scheme} 375`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });

    await page.emulateMedia({ colorScheme: scheme });
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/', { waitUntil: 'networkidle' });

    const toggle = page.getByRole('button', { name: /main menu/i });
    const menu = page.locator('#site-nav');
    const services = menu.getByRole('link', { name: 'SERVICES' });

    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeHidden();
    await expect(services).toBeHidden();

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(menu).toBeVisible();

    for (const label of ['HOME', 'SERVICES', 'ABOUT', 'GALLERY', 'CONTACT', 'BUY ABRASIVES']) {
      const link = menu.getByRole('link', { name: label });
      await expect(link).toBeVisible();
      const box = await link.boundingBox();
      expect(box, `${label} has a tap target`).not.toBeNull();
      expect(box!.width).toBeGreaterThan(8);
      expect(box!.height).toBeGreaterThan(8);
      expect(box!.x).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width).toBeLessThanOrEqual(376);
    }

    const openAxe = await new AxeBuilder({ page }).withRules(['color-contrast']).analyze();
    expect(openAxe.violations, JSON.stringify(openAxe.violations, null, 2)).toEqual([]);

    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeHidden();

    await toggle.click();
    await services.click();
    await expect(page).toHaveURL(/\/services\/?$/);
    await expect(page.locator('#site-nav')).toBeHidden();
    expect(errors, 'console errors').toEqual([]);

    await page.screenshot({
      path: path.join(shotDir, `${scheme}-375-nav-after-link.png`),
    });
  });
}
