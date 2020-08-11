import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests on <GifGridItem /> component', () => {
    const image = {
        title: 'Image Title',
        url: '127.0.0.1',
    };
    const wrapper = shallow(<GifGridItem {...image} />);

    test('Should display component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should contain a paragraph with the image title', () => {
        const pTag = wrapper.find('p');
        expect(pTag.text().trim()).toBe(image.title);
    });

    test('should contain an image with url as source and title as alt', () => {
        const imgTag = wrapper.find('img');
        expect(imgTag.prop('src')).toBe(image.url);
        expect(imgTag.prop('alt')).toBe(image.title);
    });

    test('should contain a div with class animate__fadeIn', () => {
        const divTag = wrapper.find('div');
        expect(divTag.prop('className').includes('animate__fadeIn')).toBe(true);
    });
});
