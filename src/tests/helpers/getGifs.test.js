import '@testing-library/jest-dom';

const { getGifs } = require('../../helpers/getGifs');

describe('Tests with getGifs fetch', () => {
    test('should fetch 10 elements for Hunter x Hunter input', async () => {
        const images = await getGifs('Hunter x Hunter');
        expect(images.length).toBe(10);
    });

    test('should fetch 0 elements for empty string as the input', async () => {
        const images = await getGifs('');
        expect(images.length).toBe(0);
    });
});
