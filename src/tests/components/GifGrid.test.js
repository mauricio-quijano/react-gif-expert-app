import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
    const category = 'Test category';
    const gifs = [
        {
            id: 'ABC',
            title: 'The Title',
            url: 'http://127.0.0.1',
        },
        {
            id: 'DEF',
            title: 'The Other Title',
            url: 'http://127.0.0.1/other',
        },
    ];

    test('should display component correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should display items when images are fetched with useFetchGif', () => {
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
