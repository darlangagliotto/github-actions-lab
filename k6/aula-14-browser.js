import { browser } from 'k6/browser';
import { check } from 'k6';

export const options = {
    scenarios: {
        ui_test: {
            executor: 'shared-iterations',
            vus: 3,
            iterations: 3,
        },
    },
};

export default async function () {
    const page = await browser.newPage();

    try {
        await page.goto('https://test.k6.io', { waitUntil: 'networkidle' });
        const title = await page.title();
        check(title, {
            'Titulo carregou': (t) => t.includes('k6'),
        });
    } finally {
        await page.close();
    }
}