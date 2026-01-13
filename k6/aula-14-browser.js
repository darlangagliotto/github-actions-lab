import { browser } from 'k6/browser';
import { check } from 'k6';

export const options = {
  scenarios: {
    ui_test: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1,
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};

export default async function () {
  const page = await browser.newPage();

  await page.goto('https://example.com');

  const title = await page.title();

  check(title, {
    'título contém Example': (t) => t.includes('Example'),
  });

  await page.close();
}
