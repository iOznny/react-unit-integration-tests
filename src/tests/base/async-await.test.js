import { getImagen } from "../../base/11-async-await";

describe('Async & Await', () => {
    test('Async & Await Fetch return URL Gif', async () => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);

        console.log(url);
    });    
});