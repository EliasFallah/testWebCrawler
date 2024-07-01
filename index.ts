import axios from "axios";
import cheerio from 'cheerio';

export class CapitalCityScrapper {
    async scrapeCity(url: string){
        const response = await axios.get(url);
        const html = response.data;

        const $ = cheerio.load(html);

        const cityName = $('#firstHeading').text().trim();
        console.log(cityName);
    }
}

async function main() {
    const scraper = new CapitalCityScrapper();
    await scraper.scrapeCity("https://en.wikipedia.org/wiki/Prague")
}

main();