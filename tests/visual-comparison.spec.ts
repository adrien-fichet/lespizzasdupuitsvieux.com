import { test, expect, type Page } from "@playwright/test";

const referenceUrl = "http://lespizzasdupuitsvieux.com";
const localServerUrl = "http://127.0.0.1:1111";

const useReference = false; // set to true to generate the screenshots from the original website
const baseUrl = useReference ? referenceUrl : localServerUrl;

const screenshotTest = async (page: Page, path: string) => {
  await page.goto(new URL(path, baseUrl).toString());
  await expect(page).toHaveScreenshot({ fullPage: true });
};

test("index", async ({ page }) => {
  await screenshotTest(page, "");
});

test("carte-dessert", async ({ page }) => {
  await screenshotTest(page, "carte-dessert.html");
});

test("carte-pizza", async ({ page }) => {
  await screenshotTest(page, "carte-pizza.html");
});

test("carte-vin", async ({ page }) => {
  await screenshotTest(page, "carte-vin.html");
});

test("news-burger", async ({ page }) => {
  await screenshotTest(page, "news-burger.html");
});

test("news-calzone", async ({ page }) => {
  await screenshotTest(page, "news-calzone.html");
});

test("news-lasagnes", async ({ page }) => {
  await screenshotTest(page, "news-lasagnes.html");
});

test("news-tiramisu", async ({ page }) => {
  await screenshotTest(page, "news-tiramisu.html");
});
