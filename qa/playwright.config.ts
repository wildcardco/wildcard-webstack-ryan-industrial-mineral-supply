import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: ".",
  testMatch: "qa.spec.ts",
  fullyParallel: false,
  workers: 1,
  timeout: 300_000,
  expect: { timeout: 10_000 },
  use: { baseURL: "http://127.0.0.1:4321" },
  webServer: {
    command: "npx astro preview --host 127.0.0.1 --port 4321",
    url: "http://127.0.0.1:4321",
    reuseExistingServer: true,
    timeout: 60_000,
    cwd: "/agent/repos/wildcard-webstack-ryan-industrial-mineral-supply",
  },
});
