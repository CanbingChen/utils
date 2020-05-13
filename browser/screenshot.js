const puppeteer = require('puppeteer');
const { 'iPhone X': deviceModel } = require('puppeteer/DeviceDescriptors');
const { readFileSync } = require('fs');
const targetLinks = ['https://mini-xdmp-new.oss-cn-zhangjiakou.aliyuncs.com/xiaoduo/handbook2.0.pdf']
const elementsRemoved = "#J_footer-container,.page-navigation-container,.page-comments-container";

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.emulate(deviceModel);
    for (let i = 0, j = targetLinks.length; i < j; i++) {
        await page.goto(targetLinks[i]);
        await page.evaluate((selector) => {
            const elements = document.querySelectorAll(selector);
            for (let i = 0; i < elements.length; i++) {
                elements[i].parentNode.removeChild(elements[i]);
            }
        }, elementsRemoved)
        await page.screenshot({ path: `./blog-${i}.png`, fullPage: true });
    }
    await browser.close();
})();