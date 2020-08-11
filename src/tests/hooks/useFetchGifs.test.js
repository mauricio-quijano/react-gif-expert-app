import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests on useFetchGifs hook', () => {
    test('should return initial state', async () => {
        const { result, waitForNextUpdate } = renderHook(() => {
            return useFetchGifs('Test');
        });
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an image array as data and loading false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => {
            return useFetchGifs('Test');
        });
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
