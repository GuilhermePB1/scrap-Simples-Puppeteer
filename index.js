const pupperteer = require('puppeteer');

async function scrapeWebsite() {
    const browser = await pupperteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto('https://books.toscrape.com/');
    await page.waitForNetworkIdle();

    const content = await page.evaluate(() => {
        const books = [];
        document.querySelectorAll("h3 > a").forEach(book => books.push({ title: book.title }));
        document.querySelectorAll(".price_color").forEach((book, i) => books[i].price = book.textContent);
        return books;
    });

    console.log(content);

    await browser.close();
}

scrapeWebsite();