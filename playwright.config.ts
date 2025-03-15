import { defineConfig, devices } from "@playwright/test";
// See https://playwright.dev/docs/test-configuration.

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "html",
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  snapshotPathTemplate: "{testDir}/_screenshots/{arg}{ext}",
});
